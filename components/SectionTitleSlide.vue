<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
</script>

<template>
  <div class="section-title-content">
    <h1>{{ $frontmatter.title }}</h1>
    <p v-if="$frontmatter.subtitle">
      {{ $frontmatter.subtitle }}
    </p>
  </div>
</template>
