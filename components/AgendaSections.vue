<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { slides } = useNav()
const sections = computed(() => {
  const groups: { title: string; children: string[] }[] = []
  for (const { meta } of slides.value) {
    const frontmatter = meta.slide.frontmatter
    if (frontmatter.section === true)
      groups.push({ title: String(frontmatter.title), children: frontmatter.subtitle ? [String(frontmatter.subtitle)] : [] })
    else if (frontmatter.subsection === true && groups.length)
      groups[groups.length - 1].children.push(String(frontmatter.title))
  }
  return groups
})
</script>

<template>
  <div class="agenda-list">
    <div v-for="section in sections" :key="section.title" class="agenda-section">
      <h2>{{ section.title }}</h2>
      <p v-for="title in section.children" :key="title">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
.agenda-list { display: grid; margin-top: 26px; gap: 18px; }
.agenda-section h2 {
  margin: 0;
  color: #343438;
  font-size: 23px;
  font-weight: 560;
  line-height: 1.14;
  letter-spacing: -0.025em;
}
.agenda-section p {
  margin: 7px 0 0 32px;
  color: #6e6e73;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.015em;
}
</style>
