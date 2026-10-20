<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter, $page } = useSlideContext()

const isTitleSlide = computed(() => {
  if ($frontmatter.section)
    return true
  const slideClass = $frontmatter.class
  const classes = Array.isArray(slideClass)
    ? slideClass.join(' ')
    : String(slideClass ?? '')
  return (
    classes.includes('talk-cover-slide')
    || classes.includes('section-title-slide')
    || classes.includes('thank-you-slide')
  )
})
</script>

<template>
  <div
    v-if="!isTitleSlide"
    class="deck-chrome"
  >
    <a class="deck-event" href="https://openssl-conference.org/" target="_blank" rel="noopener noreferrer" @click.stop>AISLE · CyberLogs #1 · Prague 2026</a>
    <div class="deck-slide-number">{{ $page }}</div>
  </div>
</template>

<style scoped>
.deck-chrome {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
}

.deck-event,
.deck-slide-number {
  position: absolute;
  bottom: 14px;
  color: #96969b;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
  font-size: 9px;
  font-weight: 450;
  line-height: 1.3;
}

.deck-event {
  pointer-events: auto;
  text-decoration: none;
  border: none;
  left: 50%;
  transform: translateX(-50%);
}

.deck-slide-number {
  right: 56px;
  font-variant-numeric: tabular-nums;
}
</style>
