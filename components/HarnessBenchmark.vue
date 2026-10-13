<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
</script>
<template>
  <div class="harness-benchmark">
    <div class="benchmark-harness"><NegativeDayTimeline scene="agent-harness" /></div>
    <svg viewBox="0 0 980 552" role="img" aria-label="An expert defines source-code inputs and true-vulnerability labels for the harness benchmark">
      <defs><marker id="eval-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1 L9 5 L1 9" fill="none" stroke="currentColor" stroke-width="1.5" /></marker></defs>
      <g class="reveal" :class="{ visible: $clicks >= 1 }">
        <text x="160" y="206" class="label">Inputs</text>
        <text x="160" y="233" class="detail">source code</text>
        <g class="icon" transform="translate(132 257)">
          <ellipse cx="28" cy="8" rx="27" ry="9" />
          <path d="M1 8 V47 C1 59 55 59 55 47 V8 M1 27 C1 39 55 39 55 27" />
        </g>
        <path class="arrow" d="M222 284 H320" />
      </g>
      <g class="reveal" :class="{ visible: $clicks >= 2 }">
        <text x="820" y="206" class="label">Outputs</text>
        <text x="820" y="233" class="detail">true vulnerabilities</text>
        <g class="icon" transform="translate(792 257)">
          <path d="M0 0 H32 L57 25 L31 51 L0 20 Z" /><circle cx="12" cy="12" r="3" />
          <path d="M23 27 L30 34 L43 20" />
        </g>
        <path class="arrow" d="M660 284 H756" />
      </g>
      <g class="reveal" :class="{ visible: $clicks >= 3 }">
        <text x="490" y="83" class="label">Benchmark (aka Eval)</text>
        <path class="arrow" d="M160 110 H820" marker-start="url(#eval-arrow)" />
      </g>
      <g class="reveal expert" :class="{ visible: $clicks >= 4 }">
        <g class="icon" transform="translate(470 427)"><circle cx="20" cy="12" r="11" /><path d="M0 49 V43 C0 24 40 24 40 43 V49" /></g>
        <path class="arrow" d="M455 454 C303 466 160 449 160 336" />
        <path class="arrow" d="M525 454 C677 466 820 449 820 336" />
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
.icon, .arrow { fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.arrow { marker-end: url(#eval-arrow); }
.reveal { opacity: 0; transition: opacity .3s ease; }
.reveal.visible { opacity: 1; }
@media (prefers-reduced-motion: reduce) { .reveal { transition: none; } }
</style>
