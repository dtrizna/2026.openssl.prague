<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
import khaledPhoto from '../img/khaled.png'
import pcapImage from '../img/pcap-img.png'

const { $nav, $page } = useSlideContext()
const video = ref<HTMLVideoElement>()
watch(() => $nav.value.currentSlideNo, (page) => {
  if (page !== $page.value) video.value?.pause()
})
</script>

<template>
  <div class="finwake-demo">
    <video ref="video" src="/finwake_demo.mov" controls playsinline preload="auto" @click.stop @keydown.stop />
    <img class="khaled-photo" :src="khaledPhoto" alt="Khaled" />
    <img v-click="1" class="pcap-image" :src="pcapImage" alt="open_me_its_safe.pcapng capture file" />
  </div>
</template>

<style scoped>
.finwake-demo { position: absolute; inset: 0; }
video { position: absolute; left: 5%; top: 2%; width: 90%; height: 90%; object-fit: contain; }
.khaled-photo { position: absolute; right: 2%; top: 2%; width: 16.5%; aspect-ratio: 1; object-fit: cover; border: 3px solid white; border-radius: 10px; box-shadow: 0 4px 14px #0002; }
.pcap-image { position: absolute; left: 2%; bottom: 40%; width: 14%; height: auto; border-radius: 7px; box-shadow: 0 4px 14px #0002; }
</style>
