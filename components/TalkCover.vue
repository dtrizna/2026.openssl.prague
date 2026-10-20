<script setup lang="ts">
import cohereLogo from '../img/cohere.jpg'
</script>

<template>
  <div class="talk-cover-content">
    <h1>500 CVEs Later:<br><span class="talk-cover-subtitle">Lessons from Securing<br>Open Source with AI</span></h1>
    <div class="talk-cover-speaker">
      <span class="talk-cover-name">Dimi Trizna</span>
      <span>AI / Security Research Lead</span>
    </div>
    <img class="talk-cover-event-logo" src="/cyberlogs.png" alt="Cyberlogs">
    <img class="talk-cover-aisle-logo" src="/aisle_logo.png" alt="AISLE">
    <div v-click="1" class="talk-cover-cohere"><img :src="cohereLogo" alt="Cohere"></div>
  </div>
</template>

<style scoped>
:global(.talk-cover-slide) { padding: 0 !important; background: #fff; color: #1d1d1f; }
.talk-cover-content { position: absolute; inset: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif; }
.talk-cover-content h1 { position: absolute; top: 105px; left: 50%; width: 880px; margin: 0; font-size: 48px; font-weight: 650; line-height: 1.08; letter-spacing: -.045em; text-align: center; transform: translateX(-50%); }
.talk-cover-subtitle { color: #6e6e73; }
.talk-cover-speaker { position: absolute; top: 340px; right: 76px; display: flex; flex-direction: column; align-items: flex-end; gap: 7px; text-align: right; }
.talk-cover-name { font-size: 28px; font-weight: 400; }
.talk-cover-speaker span:not(.talk-cover-name) { color: #6e6e73; font-size: 20px; }
.talk-cover-event-logo { position: absolute; bottom: 48px; left: 76px; width: 240px; height: 111px; object-fit: contain; object-position: left bottom; }
.talk-cover-aisle-logo { position: absolute; bottom: 48px; right: 76px; width: 76px; height: 76px; object-fit: contain; }
.talk-cover-cohere { position: absolute; bottom: 57px; right: 45px; width: 160px; height: 48px; transform: rotate(30deg); z-index: 2; overflow: hidden; }
.talk-cover-cohere img { display: block; width: 100%; height: 100%; object-fit: cover; }
</style>
