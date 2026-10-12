<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

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
  ],
}
</script>

<template>
  <div class="evidence-screens" :class="`evidence-${kind}`">
    <figure v-for="([src, alt], index) in screens[kind]" :key="src"
      class="evidence-screen" :class="[`screen-${index + 1}`, { 'is-in': $clicks >= index + 1 }]"
      :aria-hidden="$clicks < index + 1" :data-appear-at="index + 1">
      <img :src="`/${src}`" :alt="alt">
    </figure>
    <div v-if="kind === 'candidates'" class="anthropic-response">
      <OpenSSLDiagram scene="anthropic-response" />
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
.evidence-mythos .screen-2 { right: 5%; top: 31%; width: 39%; }
.evidence-glm .screen-1 { left: 5%; top: 7%; width: 70%; }
.evidence-glm .screen-2 { left: 10%; top: 40%; width: 53%; }
.evidence-glm .screen-3 { right: 5%; top: 40%; width: 30%; }
.evidence-small-models .screen-1 { left: 5%; top: 13%; width: 57%; }
.evidence-small-models .screen-2 { right: 4%; top: 12%; width: 61.1%; }
.evidence-candidates { background: transparent; }
.evidence-candidates .screen-1 { left: 50%; top: 5%; width: 43%; }
.evidence-candidates .screen-2 { right: 4%; top: 35%; width: 44%; }
.anthropic-response { position: absolute; left: 52%; top: 60%; width: 44%; height: 35%; }
@media (prefers-reduced-motion: reduce) { .evidence-screen { transition: none; } }
</style>
