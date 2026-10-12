<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import {
  cveNvdUrl,
  featuredWindows,
  formatWindowLength,
  windowBarPercent,
  windowDurationColor,
} from './negative-day-window-data'

const { $clicks } = useSlideContext()
</script>

<template>
  <section class="window-bars">
    <header>How long is the negative day vulnerability window?</header>

    <ol>
      <li
        v-for="(row, index) in featuredWindows"
        :key="row.cve"
        :class="{
          'is-longest': row.longest,
          'is-dimmed': $clicks >= 1 && !row.longest,
        }"
      >
        <span class="name">{{ row.package }}</span>
        <a
          class="cve"
          :href="cveNvdUrl(row.cve)"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
        >{{ row.cve }}</a>
        <span class="track" aria-hidden="true">
          <i
            :style="{
              width: `${windowBarPercent(row.days)}%`,
              background: windowDurationColor(index / (featuredWindows.length - 1)),
            }"
          />
        </span>
        <span class="length">{{ formatWindowLength(row.days) }}</span>
      </li>
    </ol>

    <footer>10 of 39 negative day vulnerability windows · log scale</footer>
  </section>
</template>

<style scoped>
:global(.nd-window-slide) {
  box-sizing: border-box;
  padding: 0 !important;
  background: #fff;
  color: #1d1d1f;
}

.window-bars {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 36px 56px 22px;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
}

header {
  margin: 0 0 22px;
  font-size: 26px;
  font-weight: 650;
  letter-spacing: -0.04em;
  line-height: 1.15;
}

ol {
  display: grid;
  flex: 1;
  min-height: 0;
  align-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 9px;
}

li {
  display: grid;
  align-items: center;
  grid-template-columns: 132px 148px minmax(0, 1fr) 52px;
  gap: 14px;
  transition: opacity 280ms ease;
}

li.is-dimmed {
  opacity: 0.22;
}

.name {
  font-size: 15px;
  font-weight: 560;
  letter-spacing: -0.02em;
}

.cve {
  color: #a1a1a6;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  text-decoration: none;
  pointer-events: auto;
}

.cve:hover {
  color: #1e3a8a;
  text-decoration: underline;
}

.track {
  display: block;
  height: 7px;
  border-radius: 999px;
  background: #eee;
}

.track i {
  display: block;
  height: 100%;
  border-radius: inherit;
  transform-origin: left center;
  animation: grow-bar 520ms cubic-bezier(0.22, 0.75, 0.25, 1) both;
}

li.is-longest .name,
li.is-longest .length {
  font-weight: 650;
}

.length {
  color: #1d1d1f;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  font-weight: 560;
  letter-spacing: -0.02em;
  text-align: right;
}

footer {
  margin-top: 16px;
  color: #86868b;
  font-size: 11px;
}

@keyframes grow-bar {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  li,
  .track i {
    animation-duration: 1ms;
    transition-duration: 1ms;
  }
}
</style>
