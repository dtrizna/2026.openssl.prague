<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="section-title-content">
    <h1 :class="{ 'subsection-title': $frontmatter.subsection }">{{ $frontmatter.title }}</h1>
    <p v-if="$frontmatter.subtitle">
      {{ $frontmatter.subtitle }}
    </p>
  </div>
</template>

<style scoped>
.section-title-content h1.subsection-title { color: #6e6e73; }
</style>
