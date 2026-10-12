<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { onMounted, ref } from 'vue'
import rough from 'roughjs'
import type { Options } from 'roughjs/bin/core'
import type { RoughSVG } from 'roughjs/bin/svg'
import sceneSource from '../draws/nd-scheme.excalidraw?raw'
import { getAgentHarnessSceneElementMetadata } from './agent-harness-scene'
import { getGithubRepositorySceneElementMetadata } from './github-repository-scene'
import {
  getGithubScanSceneElementMetadata,
  githubScanCodeOnlyElements,
} from './github-scan-scene'
import {
  getFirstPartyCodeSceneElementMetadata,
  getVersionBumpScreenGeometry,
  versionBumpScreen,
} from './first-party-code-scene'
import { getSceneElementMetadata } from './negative-day-scene'
import { preparePathForAnimation } from './scene-path'
import { calculateSceneViewBox } from './scene-viewbox'
import {
  alignSilentPatchSceneElements,
  getSilentPatchSceneElementMetadata,
} from './silent-patch-scene'
import {
  getArchitectureDefenseSceneElementMetadata,
  getArchitectureHarnessSceneElementMetadata,
  getArchitectureRestrictedSceneElementMetadata,
} from './architecture-defense-scene'
import {
  getHarnessAgentSceneElementMetadata,
  getHarnessAgentToolElements,
  getHarnessMultiSceneElementMetadata,
  getHarnessSimpleSceneElementMetadata,
} from './harness-kinds-scene'
import { getScalableOversightSceneElementMetadata } from './scalable-oversight-scene'
import { getRecallCostLolSceneElementMetadata } from './recall-cost-lol-scene'
import {
  getParetoLolSceneElementMetadata,
  paretoLolCodeOnlyElements,
} from './pareto-lol-scene'
import { getHeatmapPolicySceneElementMetadata } from './heatmap-policy-scene'
import { getTrustBoundarySceneElementMetadata } from './trust-boundary-scene'
import { getAgentIsolationSceneElementMetadata } from './agent-isolation-scene'
import {
  cveEcosystemCodeOnlyElements,
  getCveEcosystemSceneElementMetadata,
} from './cve-ecosystem-scene'

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

interface Props {
  scene?: 'coordinated-disclosure' | 'silent-patch' | 'first-party-code' | 'agent-harness' | 'github-repository' | 'github-scan' | 'trust-boundary' | 'architecture-defense' | 'architecture-harness' | 'architecture-agent' | 'scalable-oversight' | 'recall-cost-lol' | 'pareto-lol' | 'heatmap-policy' | 'harness-simple' | 'harness-agent' | 'harness-multi' | 'agent-isolation' | 'cve-ecosystem'
}

const props = withDefaults(defineProps<Props>(), {
  scene: 'coordinated-disclosure',
})

const scene = JSON.parse(sceneSource) as {
  elements: SceneElement[]
  files?: Record<string, { dataURL?: string }>
}
const referenceElements = scene.elements.filter(
  element => !element.isDeleted && getSceneElementMetadata(element.id) !== undefined,
)
const selectedSourceElements = props.scene === 'silent-patch'
  ? alignSilentPatchSceneElements(scene.elements)
  : props.scene === 'pareto-lol'
    ? [...scene.elements, ...paretoLolCodeOnlyElements]
      : props.scene === 'github-scan'
        ? [...scene.elements, ...githubScanCodeOnlyElements]
    : props.scene === 'harness-agent'
      ? [...scene.elements, ...getHarnessAgentToolElements(scene.elements)]
      : props.scene === 'cve-ecosystem'
        ? [...scene.elements, ...cveEcosystemCodeOnlyElements]
        : scene.elements
const getSelectedSceneElementMetadata = props.scene === 'silent-patch'
  ? getSilentPatchSceneElementMetadata
  : props.scene === 'first-party-code'
    ? getFirstPartyCodeSceneElementMetadata
    : props.scene === 'agent-harness'
      ? getAgentHarnessSceneElementMetadata
      : props.scene === 'github-repository'
        ? getGithubRepositorySceneElementMetadata
        : props.scene === 'github-scan'
          ? getGithubScanSceneElementMetadata
          : props.scene === 'trust-boundary'
          ? getTrustBoundarySceneElementMetadata
          : props.scene === 'architecture-defense'
            ? getArchitectureDefenseSceneElementMetadata
            : props.scene === 'architecture-harness'
              ? getArchitectureHarnessSceneElementMetadata
              : props.scene === 'architecture-agent'
                ? getArchitectureRestrictedSceneElementMetadata
                : props.scene === 'harness-simple'
                  ? getHarnessSimpleSceneElementMetadata
                  : props.scene === 'harness-agent'
                    ? getHarnessAgentSceneElementMetadata
                    : props.scene === 'harness-multi'
                      ? getHarnessMultiSceneElementMetadata
                : props.scene === 'scalable-oversight'
                  ? getScalableOversightSceneElementMetadata
                  : props.scene === 'recall-cost-lol'
                    ? getRecallCostLolSceneElementMetadata
                    : props.scene === 'pareto-lol'
                      ? getParetoLolSceneElementMetadata
                      : props.scene === 'heatmap-policy'
                        ? getHeatmapPolicySceneElementMetadata
                      : props.scene === 'agent-isolation'
                        ? getAgentIsolationSceneElementMetadata
                      : props.scene === 'cve-ecosystem'
                        ? getCveEcosystemSceneElementMetadata
                      : getSceneElementMetadata
const revealCounts = new Map<number, number>()
const stagedElements = selectedSourceElements.flatMap((element): StagedSceneElement[] => {
  const metadata = getSelectedSceneElementMetadata(element.id)
  if (element.isDeleted || metadata === undefined)
    return []

  const revealOrder = 'revealOrder' in metadata && metadata.revealOrder !== undefined
    ? metadata.revealOrder
    : revealCounts.get(metadata.stage) ?? 0
  if (!('revealOrder' in metadata) || metadata.revealOrder === undefined)
    revealCounts.set(metadata.stage, revealOrder + 1)
  return [{
    ...element,
    revealOrder,
    revealStage: metadata.stage,
    sceneName: metadata.name,
  }]
})
const versionBumpScreenGeometry = props.scene === 'first-party-code'
  ? getVersionBumpScreenGeometry(stagedElements)
  : undefined
const viewBoxElements = props.scene === 'agent-harness'
  || props.scene === 'github-repository'
  || props.scene === 'github-scan'
  || props.scene === 'trust-boundary'
  || props.scene === 'architecture-defense'
  || props.scene === 'architecture-harness'
  || props.scene === 'architecture-agent'
  || props.scene === 'harness-simple'
  || props.scene === 'harness-agent'
  || props.scene === 'harness-multi'
  || props.scene === 'scalable-oversight'
  || props.scene === 'recall-cost-lol'
  || props.scene === 'pareto-lol'
  || props.scene === 'heatmap-policy'
  || props.scene === 'agent-isolation'
  || props.scene === 'cve-ecosystem'
  ? stagedElements
  : referenceElements
const sceneViewBox = calculateSceneViewBox(
  versionBumpScreenGeometry
    ? [...stagedElements, versionBumpScreenGeometry]
    : viewBoxElements,
  props.scene === 'pareto-lol' ? 56 : 8,
)
const totalStages = Math.max(...stagedElements.map(element => element.revealStage))
const sceneDescription = props.scene === 'silent-patch'
  ? 'Silent-patch timeline'
  : props.scene === 'first-party-code'
    ? 'First-party and third-party code'
    : props.scene === 'agent-harness'
      ? 'Multi-agent vulnerability analysis harness'
      : props.scene === 'github-repository'
        ? 'GitHub repository'
        : props.scene === 'github-scan'
          ? 'GitHub repositories scanned for negative-day commits'
          : props.scene === 'trust-boundary'
          ? 'Public code crossing the trust boundary'
          : props.scene === 'architecture-defense'
            ? 'Restricted agent and multi-agent harness'
            : props.scene === 'architecture-harness'
              ? 'Multi-agent analysis harness'
              : props.scene === 'architecture-agent'
                ? 'Restricted single agent'
                : props.scene === 'harness-simple'
                  ? 'Single one-call harness'
                  : props.scene === 'harness-agent'
                    ? 'Single agent with repo tools'
                    : props.scene === 'harness-multi'
                      ? 'Multi-agent analysis harness'
                : props.scene === 'scalable-oversight'
                  ? 'Scalable oversight of a chain of thought'
                  : props.scene === 'recall-cost-lol'
                    ? 'LoL callout for Astra and Fable cost'
                    : props.scene === 'pareto-lol'
                      ? 'LoL callout for Astra and Fable on the Pareto plot'
                      : props.scene === 'heatmap-policy'
                        ? 'Cyber policy violations on Fable'
                      : props.scene === 'agent-isolation'
                        ? 'Sandboxed agents can reach Artifactory but not the public internet'
                      : props.scene === 'cve-ecosystem'
                        ? 'CVE numbering, GHSA, and first-party software'
                      : 'Negative-day disclosure timeline'

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
  <svg
    ref="svgElement"
    class="negative-day-timeline"
    :viewBox="sceneViewBox"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    :aria-label="`${sceneDescription}, step ${Math.min($clicks, totalStages)} of ${totalStages}`"
  >
    <g
      v-for="element in stagedElements"
      :key="element.id"
      class="scene-element"
      :class="{
        'is-visible': element.revealStage <= $clicks,
        'is-initial': element.revealStage === 0,
      }"
      :data-scene-id="element.id"
      :data-scene-name="element.sceneName"
      :style="{ '--reveal-delay': `${element.revealOrder * 35}ms` }"
    />
    <g
      v-if="versionBumpScreenGeometry"
      class="scene-element version-bump-screen"
      :class="{ 'is-visible': versionBumpScreen.stage <= $clicks }"
      :data-scene-name="versionBumpScreen.name"
      style="--reveal-delay: 105ms"
    >
      <rect
        class="version-bump-screen-frame"
        :x="versionBumpScreenGeometry.x"
        :y="versionBumpScreenGeometry.y"
        :width="versionBumpScreenGeometry.width"
        :height="versionBumpScreenGeometry.height"
        rx="7"
        ry="7"
      />
      <image
        :href="versionBumpScreen.src"
        :x="versionBumpScreenGeometry.x"
        :y="versionBumpScreenGeometry.y"
        :width="versionBumpScreenGeometry.width"
        :height="versionBumpScreenGeometry.height"
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
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
