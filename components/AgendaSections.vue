<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { slides } = useNav()

const sectionTitles = computed(() =>
  slides.value
    .map(({ meta }) => meta.slide.frontmatter)
    .filter(frontmatter => frontmatter.section === true)
    .map(frontmatter => String(frontmatter.title)),
)
</script>

<template>
  <div class="agenda-list">
    <h1 v-for="(title, index) in sectionTitles" :key="title">
      <span>{{ String(index + 1).padStart(2, '0') }}</span>{{ title }}
    </h1>
  </div>
</template>

<style scoped>
.agenda-list {
  display: grid;
  margin-top: 32px;
  grid-template-columns: 1fr;
  gap: 13px;
}

.agenda-list h1 {
  margin: 0;
  color: #343438;
  font-size: 23px;
  font-weight: 560;
  line-height: 1.14;
  letter-spacing: -0.025em;
}

.agenda-list h1 span {
  display: inline-block;
  width: 42px;
  color: #a1a1a6;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
}
</style>
