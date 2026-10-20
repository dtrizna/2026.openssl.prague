<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import rough from 'roughjs'
import datasetIcon from '../img/dataset-c.png'
import labelsIcon from '../img/labels-c.png'
import expertIcon from '../img/expert-a.png'

const generator = rough.generator()
const sketch = (path: string, seed: number) => generator.toPaths(generator.path(path, {
  seed, stroke: '#35383b', strokeWidth: 2.2, roughness: 1.1, bowing: 1,
})).map(part => part.d)
const arrows = {
  inputs: sketch('M238 295 Q279 293 320 295 M308 287 L320 295 L308 303', 11),
  outputs: sketch('M660 295 Q702 293 742 295 M730 287 L742 295 L730 303', 12),
  benchmark: sketch('M160 110 Q490 107 820 110 M172 102 L160 110 L172 118 M808 102 L820 110 L808 118', 13),
  expertInputs: sketch('M439 454 C303 468 160 449 160 370 M152 383 L160 370 L168 383', 14),
  expertLabels: sketch('M541 454 C677 468 820 449 820 370 M812 383 L820 370 L828 383', 15),
}
const { $clicks } = useSlideContext()
</script>
<template>
  <div class="harness-benchmark">
    <div class="benchmark-harness"><NegativeDayTimeline scene="agent-harness" /></div>
    <svg viewBox="0 0 980 552" role="img" aria-label="An expert defines source-code inputs and true-vulnerability labels for the harness benchmark">

      <g class="reveal" :class="{ visible: $clicks >= 1 }">
        <text x="160" y="206" class="label">Inputs</text>
        <text x="160" y="233" class="detail">source code</text>
        <image :href="datasetIcon" x="90" y="235" width="140" height="140" />
        <path v-for="(d, i) in arrows.inputs" :key="i" class="arrow" :d="d" />
      </g>
      <g class="reveal" :class="{ visible: $clicks >= 2 }">
        <text x="820" y="206" class="label">Outputs</text>
        <text x="820" y="233" class="detail">true vulnerabilities</text>
        <image :href="labelsIcon" x="750" y="235" width="140" height="140" />
        <path v-for="(d, i) in arrows.outputs" :key="i" class="arrow" :d="d" />
      </g>
      <g class="reveal" :class="{ visible: $clicks >= 3 }">
        <text x="490" y="83" class="label">Benchmark (aka Eval)</text>
        <path v-for="(d, i) in arrows.benchmark" :key="i" class="arrow" :d="d" />
      </g>
      <g class="reveal expert" :class="{ visible: $clicks >= 4 }">
        <image :href="expertIcon" x="440" y="397" width="100" height="100" />
        <path v-for="(d, i) in arrows.expertInputs" :key="`left-${i}`" class="arrow" :d="d" />
        <path v-for="(d, i) in arrows.expertLabels" :key="`right-${i}`" class="arrow" :d="d" />
        <text x="490" y="507" class="detail">Domain expertise defines both</text>
      </g>
    </svg>
  </div>
</template>
<style scoped>
.harness-benchmark { position: absolute; inset: 0; color: #6e6e73; }
.benchmark-harness { position: absolute; left: calc(50% - 156px); top: calc(50% - 127.5px); width: 312px; height: 255px; }
.harness-benchmark > svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.label, .detail { fill: currentColor; text-anchor: middle; font-family: inherit; font-weight: 400; }
.label { font-size: 23px; }
.detail { font-size: 21px; }
.arrow { fill: none; stroke: #35383b; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.reveal { opacity: 0; transition: opacity .3s ease; }
.reveal.visible { opacity: 1; }
@media (prefers-reduced-motion: reduce) { .reveal { transition: none; } }
</style>
