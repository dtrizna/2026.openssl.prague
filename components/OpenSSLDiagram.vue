<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { onMounted, ref } from 'vue'
import rough from 'roughjs'
import type { Options } from 'roughjs/bin/core'
import type { RoughSVG } from 'roughjs/bin/svg'
import sceneSource from '../draws/schemes.excalidraw?raw'
import { getOpenSSLSceneMetadata, type OpenSSLScene } from './openssl-scenes'
import { preparePathForAnimation } from './scene-path'
import { calculateSceneViewBox } from './scene-viewbox'
interface Point {
  0: number
  1: number
}

interface SceneElement {
  id: string
  type: 'rectangle' | 'ellipse' | 'line' | 'arrow' | 'text' | 'image'
  x: number
  y: number
  width: number
  height: number
  angle: number
  strokeColor: string
  backgroundColor: string
  fillStyle: string
  strokeWidth: number
  strokeStyle: string
  roughness: number
  opacity: number
  seed: number
  isDeleted: boolean
  customData?: { slidevKey?: string }
  fileId?: string
  points?: Point[]
  startArrowhead?: string | null
  endArrowhead?: string | null
  text?: string
  fontSize?: number
  textAlign?: 'left' | 'center' | 'right'
  lineHeight?: number
}

interface StagedSceneElement extends SceneElement {
  revealOrder: number
  revealStage: number
  sceneName: string
}


const props = defineProps<{ scene: OpenSSLScene; allVisible?: boolean }>()
const scene = JSON.parse(sceneSource) as {
  elements: SceneElement[]
  files?: Record<string, { dataURL?: string }>
}
const metadata = getOpenSSLSceneMetadata(props.scene)
const metadataByKey = new Map([...metadata.values()].map(entry => [
  entry.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''), entry,
]))
const seenKeys = new Set<string>()
for (const element of scene.elements.filter(element => !element.isDeleted)) {
  const key = element.customData?.slidevKey
  if (!key) continue
  if (seenKeys.has(key)) throw new Error(`Duplicate Excalidraw slidevKey: ${key}`)
  seenKeys.add(key)
}
const stagedElements: StagedSceneElement[] = scene.elements.flatMap(element => {
  const entry = (element.customData?.slidevKey && metadataByKey.get(element.customData.slidevKey)) || metadata.get(element.id)
  if (element.isDeleted || !entry) return []
  return [{ ...element, sceneName: entry.name, revealStage: entry.stage, revealOrder: entry.revealOrder }]
})
// Both halves share the full pipeline viewport, so discovery never moves.
const viewportMetadata = getOpenSSLSceneMetadata(
  props.scene === 'discovery' ? 'pipeline' : props.scene,
)
const viewportElements = scene.elements.filter(element =>
  !element.isDeleted && viewportMetadata.has(element.id),
)
const sceneViewBox = calculateSceneViewBox(viewportElements, 18)
const totalStages = Math.max(...stagedElements.map(element => element.revealStage))
const svgElement = ref<SVGSVGElement>()
const { $clicks } = useSlideContext()
function getRoughOptions(element: SceneElement): Options {
  const fill = element.backgroundColor === 'transparent'
    ? undefined
    : element.backgroundColor
  const strokeLineDash = element.strokeStyle === 'dashed'
    ? [10, 8]
    : element.strokeStyle === 'dotted'
      ? [3, 7]
      : undefined

  return {
    fill,
    fillStyle: element.fillStyle,
    roughness: element.roughness,
    seed: element.seed,
    stroke: element.strokeColor,
    strokeLineDash,
    strokeWidth: element.strokeWidth,
  }
}

function appendDrawable(
  group: SVGGElement,
  drawable: SVGGElement,
) {
  drawable.querySelectorAll('path').forEach(preparePathForAnimation)
  group.append(drawable)
}

function absolutePoints(element: SceneElement) {
  return (element.points ?? []).map(
    ([x, y]) => [element.x + x, element.y + y] as Point,
  )
}

function appendArrowhead(
  renderer: RoughSVG,
  group: SVGGElement,
  tip: Point,
  adjacentPoint: Point,
  options: Options,
) {
  const direction = Math.atan2(adjacentPoint[1] - tip[1], adjacentPoint[0] - tip[0])
  const arrowLength = Math.max(10, (options.strokeWidth ?? 1) * 5)
  const arrowAngle = Math.PI / 7

  for (const angle of [direction - arrowAngle, direction + arrowAngle]) {
    appendDrawable(
      group,
      renderer.line(
        tip[0],
        tip[1],
        tip[0] + Math.cos(angle) * arrowLength,
        tip[1] + Math.sin(angle) * arrowLength,
        options,
      ),
    )
  }
}

function appendText(group: SVGGElement, element: SceneElement) {
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
  const fontSize = element.fontSize ?? 20
  const lineHeight = fontSize * (element.lineHeight ?? 1.25)
  const textAnchor = element.textAlign === 'center'
    ? 'middle'
    : element.textAlign === 'right'
      ? 'end'
      : 'start'
  const textX = element.textAlign === 'center'
    ? element.x + element.width / 2
    : element.textAlign === 'right'
      ? element.x + element.width
      : element.x

  text.setAttribute('x', `${textX}`)
  text.setAttribute('y', `${element.y}`)
  text.setAttribute('fill', element.strokeColor)
  text.setAttribute('font-family', '"Comic Sans MS", "Bradley Hand", cursive')
  text.setAttribute('font-size', `${fontSize}`)
  text.setAttribute('text-anchor', textAnchor)
  text.setAttribute('dominant-baseline', 'hanging')

  for (const [index, line] of (element.text ?? '').split('\n').entries()) {
    const textLine = document.createElementNS('http://www.w3.org/2000/svg', 'tspan')
    textLine.setAttribute('x', `${textX}`)
    textLine.setAttribute('dy', index === 0 ? '0' : `${lineHeight}`)
    textLine.textContent = line
    text.append(textLine)
  }

  group.append(text)
}

function renderElement(
  renderer: RoughSVG,
  group: SVGGElement,
  element: SceneElement,
) {
  const options = getRoughOptions(element)

  if (element.type === 'rectangle') {
    appendDrawable(
      group,
      renderer.rectangle(element.x, element.y, element.width, element.height, options),
    )
  }
  else if (element.type === 'ellipse') {
    appendDrawable(
      group,
      renderer.ellipse(
        element.x + element.width / 2,
        element.y + element.height / 2,
        element.width,
        element.height,
        options,
      ),
    )
  }
  else if (element.type === 'line') {
    appendDrawable(group, renderer.linearPath(absolutePoints(element), options))
  }
  else if (element.type === 'arrow') {
    const points = absolutePoints(element)
    appendDrawable(group, renderer.linearPath(points, options))

    if (element.startArrowhead && points.length > 1)
      appendArrowhead(renderer, group, points[0], points[1], options)
    if (element.endArrowhead && points.length > 1)
      appendArrowhead(renderer, group, points.at(-1)!, points.at(-2)!, options)
  }
  else if (element.type === 'text') {
    appendText(group, element)
  }
  else if (element.type === 'image') {
    const dataURL = element.fileId ? scene.files?.[element.fileId]?.dataURL : undefined
    if (!dataURL)
      return

    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image')
    image.setAttribute('href', dataURL)
    image.setAttribute('x', `${element.x}`)
    image.setAttribute('y', `${element.y}`)
    image.setAttribute('width', `${element.width}`)
    image.setAttribute('height', `${element.height}`)
    image.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    group.append(image)
  }

  const turns = element.angle / (Math.PI * 2)
  const residualAngle = (turns - Math.round(turns)) * Math.PI * 2
  if (Math.abs(residualAngle) > 0.01) {
    const centerX = element.x + element.width / 2
    const centerY = element.y + element.height / 2
    group.setAttribute(
      'transform',
      `rotate(${residualAngle * 180 / Math.PI} ${centerX} ${centerY})`,
    )
  }
  group.setAttribute('opacity', `${element.opacity / 100}`)
}

onMounted(() => {
  const svg = svgElement.value
  if (!svg)
    return

  const renderer = rough.svg(svg)
  svg.querySelectorAll<SVGGElement>('[data-scene-id]').forEach((group) => {
    const element = stagedElements.find(candidate => candidate.id === group.dataset.sceneId)
    if (element)
      renderElement(renderer, group, element)
  })
})
</script>
<template>
  <svg ref="svgElement" class="negative-day-timeline" :viewBox="sceneViewBox"
    preserveAspectRatio="xMidYMid meet" role="img" :aria-label="`${scene}, step ${Math.min($clicks, totalStages)} of ${totalStages}`">
    <g v-for="element in stagedElements" :key="element.id" class="scene-element"
      :class="{ 'is-visible': allVisible || element.revealStage <= $clicks, 'is-initial': allVisible || element.revealStage === 0 }"
      :data-scene-id="element.id" :data-scene-name="element.sceneName"
      :data-reveal-stage="element.revealStage"
      :style="{ '--reveal-delay': `${element.revealOrder * 35}ms` }" />
  </svg>
</template>
<style scoped>
:global(.negative-day-slide) {
  padding: 0 !important;
  background: #fff;
}

:global(.timeline-stage) {
  position: absolute;
  inset: 0;
  padding: 50px;
}

:global(.click-register) {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.negative-day-timeline {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.version-bump-screen-frame {
  fill: #fff;
  stroke: #d2d2d7;
  stroke-width: 1.25;
  filter: drop-shadow(0 10px 22px rgba(15, 15, 18, 0.16));
}

.scene-element {
  opacity: 0;
  pointer-events: none;
}

.scene-element :deep(path:not(.patterned-stroke)) {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}

.scene-element.is-visible {
  animation: reveal-element 480ms cubic-bezier(0.2, 0.75, 0.25, 1) var(--reveal-delay) both;
}

.scene-element.is-visible :deep(path:not(.patterned-stroke)) {
  animation: draw-stroke 620ms ease-out var(--reveal-delay) both;
}

.scene-element.is-initial {
  opacity: 1;
}

.scene-element.is-visible.is-initial,
.scene-element.is-visible.is-initial :deep(path:not(.patterned-stroke)) {
  animation: none;
}

.scene-element.is-visible.is-initial :deep(path:not(.patterned-stroke)) {
  stroke-dashoffset: 0;
}

@keyframes reveal-element {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes draw-stroke {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scene-element.is-visible,
  .scene-element.is-visible :deep(path:not(.patterned-stroke)) {
    animation-duration: 1ms;
    animation-delay: 0ms;
  }
}
</style>
