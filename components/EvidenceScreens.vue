<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import sceneSource from '../draws/schemes.excalidraw?raw'
import { getOpenSSLSceneMetadata } from './openssl-scenes'
const responseIds = getOpenSSLSceneMetadata('anthropic-response')
const response = JSON.parse(sceneSource).elements.find((element: { id: string }) => responseIds.has(element.id))
const responseLines: string[] = response.text.split('\n')

defineProps<{ kind: 'mythos' | 'glm' | 'small-models' | 'candidates' }>()
const { $clicks } = useSlideContext()
const screens = {
  mythos: [
    ['mythos-danger-1.png', 'Nature: Too dangerous to release. Is Mythos the start of the restricted-AI era?'],
    ['mythos-danger-2.png', 'How scary is Claude Mythos?'],
  ],
  glm: [
    ['anthropic_glm-title.png', 'Anthropic: GLM-5.3 and the spread of advanced cyber capabilities'],
    ['anthropic_glm-bars.png', 'Anthropic graph comparing fully automated exploit development'],
    ['anthropic-glm-meme.png', 'You cannot find zero-days without my permission meme'],
  ],
  'small-models': [
    ['system-not-model.png', 'Aisle: System Over Model, Zero-Day Discovery at the Jagged Frontier'],
    ['mythos-FreeBSD-cve-oss-table-dark.png', 'FreeBSD vulnerability discovery results for small open-weight and hosted models'],
  ],
  candidates: [
    ['anthropic-oss-candidate-title.png', 'Anthropic: Launching an opt-in vulnerability-finding service for open-source software'],
    ['anthropic-oss-candidate-text.png', 'Over 29,000 candidates, approximately 6,000 manually reviewed and triaged'],
    ['anthropic-report-text.png', 'Triage by six external security research firms'],
    ['anthropic-report-example.png', 'Example report attribution to Claude and Ada Logics'],
  ],
}
const appearAt = (kind: string, index: number) => kind === 'candidates' && index >= 2 ? index + 2 : index + 1
</script>

<template>
  <div class="evidence-screens" :class="`evidence-${kind}`">
    <figure v-for="([src, alt], index) in screens[kind]" :key="src"
      class="evidence-screen" :class="[`screen-${index + 1}`, { 'is-in': $clicks >= appearAt(kind, index) }]"
      :aria-hidden="$clicks < appearAt(kind, index)" :data-appear-at="appearAt(kind, index)">
      <img :src="`/${src}`" :alt="alt">
      <svg v-if="kind === 'mythos'" class="evidence-annotation" :viewBox="index === 0 ? '0 0 1536 846' : '0 0 1434 1194'" aria-hidden="true">
        <path :d="index === 0 ? 'M308 410 L501 410' : 'M416 270 L639 270'" />
      </svg>
      <svg v-if="kind === 'candidates' && index === 1" class="evidence-annotation bottleneck" :class="{ 'is-in': $clicks >= 7 }" viewBox="0 0 1430 390" aria-hidden="true">
        <path d="M240 311 L1250 311" />
      </svg>
      <svg v-if="kind === 'candidates' && index === 2" class="evidence-annotation" viewBox="0 0 1300 396" aria-hidden="true">
        <path d="M449 130 H925" />
      </svg>
    </figure>
    <div v-if="kind === 'candidates'" class="anthropic-response">
      <p v-for="(line, index) in responseLines" :key="index" :style="{ color: response.strokeColor }" :class="{ 'is-in': $clicks >= (index <= 3 ? 3 : index === 4 ? 6 : 8) }">{{ line }}</p>
    </div>
  </div>
</template>

<style scoped>
.evidence-screens { position: absolute; inset: 0; background: white; }
.evidence-screen {
  position: absolute; margin: 0; opacity: 0;
  transform: translate3d(22px, 18px, 0) scale(.97);
  transition: opacity .42s ease, transform .42s ease;
  border: 1px solid #e4e4e7; border-radius: 7px; overflow: hidden;
  box-shadow: 0 14px 32px #0f0f121c, 0 2px 6px #0f0f120d;
  background: white;
}
.evidence-screen.is-in { opacity: 1; transform: none; }
.evidence-screen img { display: block; width: 100%; height: auto; }
.evidence-mythos .screen-1 { left: 5%; top: 9%; width: 69%; }
.evidence-mythos .screen-2 { right: 5%; top: 22%; width: 46.8%; }
.evidence-glm .screen-1 { left: 5%; top: 7%; width: 70%; }
.evidence-glm .screen-2 { left: 10%; top: 38%; width: 53%; }
.evidence-glm .screen-3 { right: 5%; top: 40%; width: 30%; }
.evidence-small-models .screen-1 { left: 5%; top: 13%; width: 57%; }
.evidence-small-models .screen-2 { right: 4%; top: 7%; width: 61.1%; }
.evidence-candidates { background: transparent; }
.evidence-candidates .screen-1 { left: 4%; top: 4%; width: 46%; }
.evidence-candidates .screen-2 { right: 4%; top: 25%; width: 60%; }
.evidence-candidates .screen-3 { right: 4%; top: 54%; width: 52%; }
.evidence-candidates .screen-4 { right: 4%; top: 79%; width: 52%; }
.anthropic-response { position: absolute; left: 5%; top: 60%; width: 40%; font-size: 21px; line-height: 1.3; }
.anthropic-response p { margin: 0; white-space: pre; opacity: 0; transition: opacity .25s; }
.anthropic-response p.is-in { opacity: 1; }
.evidence-annotation { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; fill: none; stroke: #e03131; stroke-width: 5; stroke-linecap: round; }
.bottleneck { opacity: 0; transition: opacity .25s; }
.bottleneck.is-in { opacity: 1; }
@media (prefers-reduced-motion: reduce) { .evidence-screen { transition: none; } }
</style>
