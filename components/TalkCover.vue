<template>
  <div class="talk-cover-content">
    <h1>500 CVEs Later:<br><span class="talk-cover-subtitle">Lessons from Securing<br>Open Source with AI</span></h1>
    <div class="talk-cover-speaker">
      <span class="talk-cover-name">Dimi Trizna</span>
      <span>AI and Security Research Lead, AISLE</span>
    </div>
    <img class="talk-cover-event-logo" src="/openssl-conf-logo-2.png" alt="OpenSSL Conference">
    <img class="talk-cover-aisle-logo" src="/aisle_logo.png" alt="AISLE">
  </div>
</template>

<style scoped>
:global(.talk-cover-slide) { padding: 0 !important; background: #fff; color: #1d1d1f; }
.talk-cover-content { position: absolute; inset: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif; }
.talk-cover-content h1 { position: absolute; top: 105px; left: 50%; width: 880px; margin: 0; font-size: 48px; font-weight: 650; line-height: 1.08; letter-spacing: -.045em; text-align: center; transform: translateX(-50%); }
.talk-cover-subtitle { color: #6e6e73; }
.talk-cover-speaker { position: absolute; top: 340px; right: 76px; display: flex; flex-direction: column; align-items: flex-end; gap: 7px; text-align: right; }
.talk-cover-name { font-size: 22px; font-weight: 400; }
.talk-cover-speaker span:not(.talk-cover-name) { color: #6e6e73; font-size: 15px; }
.talk-cover-event-logo { position: absolute; bottom: 48px; left: 76px; width: 240px; height: 111px; object-fit: contain; object-position: left bottom; }
.talk-cover-aisle-logo { position: absolute; bottom: 48px; right: 76px; width: 76px; height: 76px; object-fit: contain; }
</style>
