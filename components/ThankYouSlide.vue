<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $nav, $page } = useSlideContext()
const videoHost = ref<HTMLElement>()
const loaded = ref(false)
const postUrl = 'https://x.com/IntCyberDigest/status/2103974566435717157'
let stop: (() => void) | undefined
let revision = 0
onMounted(() => {
  stop = watch(() => $nav.value.currentSlideNo === $page.value, async (active) => {
    const current = ++revision
    loaded.value = false
    videoHost.value?.replaceChildren()
    if (!active) return
    try {
      const win = window as any
      if (!win.twttr?.widgets) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://platform.twitter.com/widgets.js'
          script.async = true
          script.onload = () => resolve()
          script.onerror = reject
          document.head.appendChild(script)
        })
      }
      if (current !== revision || !videoHost.value) return
      const embed = await win.twttr.widgets.createVideo('2103974566435717157', videoHost.value, {
        width: 550, theme: 'light', dnt: true,
      })
      if (current === revision) loaded.value = Boolean(embed)
    } catch { /* Keep the direct post link available if X cannot load. */ }
  }, { immediate: true })
})
onBeforeUnmount(() => { revision++; stop?.() })
</script>

<template>
  <div class="thank-you">
    <div class="thank-you-bg" aria-hidden="true" />

    <div class="thank-you-copy">
      <h1>Thank You!</h1>
      <p>Questions?</p>
    </div>

    <div class="thank-you-video" @click.stop @keydown.stop>
      <div ref="videoHost" class="video-host" />
      <a v-if="!loaded" :href="postUrl" target="_blank" rel="noopener noreferrer" class="video-fallback">Watch the video on X ↗</a>
    </div>

    <div class="thank-you-visuals">
      <img class="thank-you-qr" src="/qa-dimi.JPG" alt="Dimi Trizna LinkedIn QR">
      <img class="thank-you-logo" src="/aisle_logo.png" alt="AISLE">
    </div>
  </div>
</template>

<style scoped>
.thank-you {
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  color: #1d1d1f;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
}

.thank-you-bg {
  position: absolute;
  inset: 0;
  background-color: #fff;
}

.thank-you-copy {
  position: absolute;
  z-index: 1;
  top: 55px;
  left: 85px;
  text-align: left;
}

.thank-you-copy h1 {
  margin: 0;
  color: #1d1d1f;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 1.08;
}

.thank-you-copy p {
  margin: 14px 0 0;
  color: #6e6e73;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.thank-you-visuals {
  position: absolute;
  z-index: 1;
  top: 64%;
  left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  transform: translateY(-50%);
}

.thank-you-qr {
  display: block;
  width: 230px;
  height: auto;
  border-radius: 22px;
  box-shadow: 0 8px 28px rgb(0 0 0 / 8%);
  object-fit: contain;
}

.thank-you-logo {
  display: block;
  width: 72px;
  height: auto;
  object-fit: contain;
}
.thank-you-video { position: absolute; left: 530px; top: 25px; width: 550px; height: 820px; transform: scale(.61); transform-origin: top left; }
.video-host :deep(iframe) { max-width: 100%; }
.video-fallback { display: inline-block; margin-top: 12px; color: #6e6e73; font-size: 18px; }
</style>
