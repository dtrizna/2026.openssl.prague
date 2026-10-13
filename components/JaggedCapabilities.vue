<template>
  <div class="jagged-capabilities">
    <h1>The AI has a jagged frontier,<br>sometimes it’s amazing, sometimes it’s dumb.</h1>
    <svg viewBox="0 0 1024 576" role="img" aria-label="Human capabilities represented by the circle; AI capabilities represented by the red irregular shape">
      <defs>
        <clipPath id="jagged-shape-only"><path d="M700 410 H1005 V604 L1038 635 L1057 658 L1063 679 L1048 704 L1000 728 H700 Z" /></clipPath>
        <marker id="capability-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1 L9 5 L1 9" fill="none" stroke="#6e6e73" stroke-width="1.5" /></marker>
      </defs>
      <svg x="330" y="205" width="370" height="320" viewBox="700 410 370 320">
        <image href="/bsides/Image278.jpg" width="1977" height="1104" clip-path="url(#jagged-shape-only)" />
      </svg>
      <g class="capability-labels">
        <text x="75" y="325">human capabilities</text>
        <text x="735" y="451">AI capabilities</text>
      </g>
      <g fill="none" stroke="#6e6e73" stroke-width="2" marker-end="url(#capability-arrow)">
        <path d="M277 320 Q340 290 409 285" />
        <path d="M722 444 Q687 444 650 470" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.jagged-capabilities { position: absolute; inset: 0; }
.jagged-capabilities h1 { position: absolute; top: 48px; left: 40px; right: 40px; margin: 0; font-size: 32px !important; line-height: 1.2 !important; font-weight: 400 !important; letter-spacing: -.035em; text-align: center; }
.jagged-capabilities > svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.capability-labels { font-family: inherit; font-size: 22px; fill: #6e6e73; }
</style>
