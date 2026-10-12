<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
</script>
<template>
  <div class="validation-demand" :class="{ 'focus-validation': $clicks >= 2 }">
    <div class="closing-pipeline"><OpenSSLDiagram scene="pipeline" all-visible /></div>
    <div v-click="1" class="finding-stream" aria-label="More candidate findings entering validation">
      <span v-for="i in 24" :key="i" :style="{ '--delay': `${i * 35}ms` }" />
    </div>
    <p v-click="2" class="closing-takeaway">Cheaper discovery can mean more demand for expert validation</p>
  </div>
</template>
<style scoped>
.validation-demand { position: absolute; inset: 0; }
.closing-pipeline { position: absolute; inset: 45px 50px 90px; }
.finding-stream { position: absolute; left: 37%; top: 62%; width: 80px; display: grid; grid-template-columns: repeat(6, 7px); gap: 6px; transform: rotate(-15deg); }
.finding-stream span { width: 7px; height: 7px; background: #f08c00; border-radius: 50%; }
.finding-stream:not(.slidev-vclick-hidden) span { animation: candidate-arrive .4s ease-out var(--delay) both; }
.closing-takeaway { position: absolute; bottom: 32px; left: 50px; right: 50px; text-align: center; font-size: 25px; letter-spacing: -.025em; line-height: 1.25; margin: 0; }
.focus-validation :deep([data-scene-name="Upper validation branch"] path),
.focus-validation :deep([data-scene-name="Lower validation branch"] path) { stroke-width: 5; }
.focus-validation :deep([data-scene-name="Validation and triage label"] text),
.focus-validation :deep([data-scene-name="Security domain expertise"] text) { fill: #7041e8; font-weight: bold; }
@keyframes candidate-arrive { from { opacity: 0; transform: translateX(-65px); } to { opacity: 1; transform: none; } }
@media(prefers-reduced-motion:reduce) { .finding-stream span { animation: none !important; } }
</style>
