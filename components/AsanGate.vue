<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
</script>
<template>
  <div class="asan-gate">
    <figure class="asan-intro" :class="{ visible: $clicks >= 1 }">
      <img src="/asan-intro.png" alt="AddressSanitizer introduction">
      <svg viewBox="0 0 1350 1010" aria-hidden="true"><path d="M393 309 H714" /></svg>
    </figure>
    <figure class="asan-crash" :class="{ visible: $clicks >= 2 }">
      <img src="/asan-crash-example.png" alt="AddressSanitizer heap-use-after-free crash report">
      <svg viewBox="0 0 1514 656" aria-hidden="true"><path d="M292 110 H859" /></svg>
    </figure>
  </div>
</template>
<style scoped>
.asan-gate { position: absolute; inset: 0; }
figure { position: absolute; margin: 0; opacity: 0; transform: translateY(14px); transition: opacity .3s, transform .3s; border: 1px solid #e4e4e7; border-radius: 7px; overflow: hidden; box-shadow: 0 12px 28px #0f0f121c; background: white; }
figure.visible { opacity: 1; transform: none; }
.asan-intro { left: 4%; top: 5%; width: 65%; }
.asan-crash { right: 4%; top: 35%; width: 73%; }
img { display: block; width: 100%; }
svg { position: absolute; inset: 0; width: 100%; height: 100%; fill: none; stroke: #e03131; stroke-width: 5; stroke-linecap: round; }
</style>
