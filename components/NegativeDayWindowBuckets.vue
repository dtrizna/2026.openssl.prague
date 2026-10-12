<script setup lang="ts">
import {
  corpusWindowCount,
  formatWindowLengthWords,
  meanWindowDays,
  windowBuckets,
  windowDurationColor,
} from './negative-day-window-data'
</script>

<template>
  <section class="window-buckets">
    <header>Most negative day vulnerability windows close the same day</header>

    <ol>
      <li
        v-for="(bucket, bucketIndex) in windowBuckets"
        :key="bucket.id"
        :style="{ '--dot-color': windowDurationColor(bucketIndex / (windowBuckets.length - 1)) }"
      >
        <span class="label">{{ bucket.label }}</span>
        <span class="dots" aria-hidden="true">
          <i v-for="index in bucket.count" :key="index" />
        </span>
        <span class="count">{{ bucket.count }}</span>
      </li>
    </ol>

    <p class="stats">
      <span>average · {{ formatWindowLengthWords(meanWindowDays) }}</span>
    </p>

    <footer>{{ corpusWindowCount }} negative day vulnerability windows</footer>
  </section>
</template>

<style scoped>
.window-buckets {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 36px 56px 22px;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
}

header {
  margin: 0 0 36px;
  font-size: 26px;
  font-weight: 650;
  letter-spacing: -0.04em;
  line-height: 1.15;
}

ol {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 22px;
}

li {
  display: grid;
  align-items: center;
  grid-template-columns: 92px minmax(0, 1fr) 28px;
  gap: 16px;
}

.label {
  color: #6e6e73;
  font-size: 14px;
  font-weight: 500;
}

.dots {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.dots i {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--dot-color);
}

.count {
  font-size: 16px;
  font-variant-numeric: tabular-nums;
  font-weight: 560;
  letter-spacing: -0.02em;
  text-align: right;
}

.stats {
  display: flex;
  gap: 28px;
  margin: 34px 0 0;
  color: #1d1d1f;
  font-size: 18px;
  font-weight: 560;
  letter-spacing: -0.025em;
}

footer {
  margin-top: auto;
  color: #86868b;
  font-size: 11px;
}

</style>
