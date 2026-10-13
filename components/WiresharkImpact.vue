<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { ref, watch } from 'vue'
const { $clicks, $page, $nav } = useSlideContext()
const video = ref<HTMLVideoElement>()
watch(() => [$clicks.value, $nav.value.currentSlideNo], () => {
  if (!video.value) return
  if ($nav.value.currentSlideNo === $page.value && $clicks.value >= 1)
    video.value.play().catch(() => {})
  else video.value.pause()
})
</script>
<template>
  <div class="wireshark-impact">
    <img class="wireshark-cves" src="/wireshark-cves.jpeg" alt="Wireshark CVEs discovered by AISLE">
    <video ref="video" class="poc-video" :class="{ visible: $clicks >= 1 }" :aria-hidden="$clicks < 1" src="/poc_demo_c1222.mov" controls muted playsinline preload="auto" @click.stop @keydown.stop />
  </div>
</template>
<style scoped>
.wireshark-impact { position: absolute; inset: 0; }
.wireshark-cves { position: absolute; left: 3%; top: 6%; width: 35%; height: 88%; object-fit: contain; }
.poc-video { position: absolute; right: 3%; top: 15%; width: 57%; height: 70%; object-fit: contain; opacity: 0; visibility: hidden; transition: opacity .3s; }
.poc-video.visible { opacity: 1; visibility: visible; }
</style>
