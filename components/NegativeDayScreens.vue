<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

interface ScreenHotspot {
  name: string
  stage: number
  type?: 'underline' | 'circle'
  left: number
  top: number
  width: number
  height: number
  pad?: number
  shiftY?: number
}

interface EvidenceScreen {
  id: string
  src: string
  alt: string
  appearAt: number
  imageWidth: number
  imageHeight: number
  fit: 'cover-top' | 'contain'
  hotspots: ScreenHotspot[]
}

const { $clicks } = useSlideContext()
const githubCropAspect = 1.45
const markerRed = '#ff3b30'

const screens: EvidenceScreen[] = [
  {
    id: 'openclaw-commit',
    src: '/nd-openclas-commit-no-cve.png',
    alt: 'OpenClaw commit that disables repository git hooks, with no CVE',
    appearAt: 0,
    imageWidth: 1530,
    imageHeight: 1748,
    fit: 'cover-top',
    hotspots: [
      {
        name: 'openclaw',
        stage: 1,
        type: 'circle',
        left: 376,
        top: 33,
        width: 126,
        height: 25,
        pad: 16,
      },
      {
        name: 'execute repository git hooks',
        stage: 2,
        left: 420,
        top: 402,
        width: 468,
        height: 28,
        pad: 3,
      },
    ],
  },
  {
    id: 'authlib-commit',
    src: '/nd-authlib-commit.png',
    alt: 'Authlib commit that removes the none JWT algorithm on February 6',
    appearAt: 3,
    imageWidth: 1428,
    imageHeight: 1704,
    fit: 'cover-top',
    hotspots: [
      {
        name: 'authlib',
        stage: 3,
        type: 'circle',
        left: 340,
        top: 44,
        width: 91,
        height: 22,
        pad: 16,
      },
      {
        name: 'Feb 6',
        stage: 4,
        left: 385,
        top: 360,
        width: 70,
        height: 12,
        pad: 2,
      },
      {
        name: 'remove none algorithm',
        stage: 4,
        left: 149,
        top: 470,
        width: 382,
        height: 12,
        pad: 2,
      },
    ],
  },
  {
    id: 'authlib-cve',
    src: '/nd-authlib-cve-cvss4.png',
    alt: 'NVD record for CVE-2026-28802, published March 6 2026, with a CVSS 3.1 score of 9.8 Critical',
    appearAt: 5,
    imageWidth: 2374,
    imageHeight: 1138,
    fit: 'contain',
    hotspots: [
      {
        name: 'CVE-2026-28802',
        stage: 6,
        left: 115,
        top: 34,
        width: 524,
        height: 45,
        pad: 20,
      },
      {
        name: 'NVD published date Mar 06 2026',
        stage: 7,
        left: 2001,
        top: 380,
        width: 201,
        height: 30,
        pad: 3,
      },
      {
        name: 'malicious JWT containing alg none',
        stage: 8,
        left: 543,
        top: 530,
        width: 532,
        height: 31,
        pad: 3,
      },
      {
        name: 'passing the signature',
        stage: 8,
        left: 1521,
        top: 530,
        width: 322,
        height: 31,
        pad: 3,
      },
      {
        name: 'verification',
        stage: 8,
        left: 25,
        top: 583,
        width: 164,
        height: 25,
        pad: 3,
      },
      {
        name: 'CVSS 9.8 CRITICAL',
        stage: 9,
        type: 'circle',
        left: 560,
        top: 1075,
        width: 201,
        height: 43,
        pad: 15,
      },
    ],
  },
]

function screenFrameStyle(screen: EvidenceScreen) {
  const aspect = screen.fit === 'contain'
    ? screen.imageWidth / screen.imageHeight
    : githubCropAspect
  return { aspectRatio: `${aspect}` }
}

function hotspotStyle(screen: EvidenceScreen, hotspot: ScreenHotspot) {
  const pad = hotspot.pad ?? 8
  const left = hotspot.left - pad
  const top = hotspot.top - pad + (hotspot.shiftY ?? 0)
  const width = hotspot.width + pad * 2
  const height = hotspot.height + pad * 2
  const visibleHeight = screen.fit === 'contain'
    ? screen.imageHeight
    : screen.imageWidth / githubCropAspect

  return {
    left: `${(left / screen.imageWidth) * 100}%`,
    top: `${(top / visibleHeight) * 100}%`,
    width: `${(width / screen.imageWidth) * 100}%`,
    height: `${(height / visibleHeight) * 100}%`,
  }
}

function hotspotMark(hotspot: ScreenHotspot) {
  const type = hotspot.type ?? 'underline'
  return {
    at: hotspot.stage,
    type,
    color: markerRed,
    delay: hotspot.stage === 4 ? 280 : 160,
    padding: type === 'circle' ? 4 : 2,
    strokeWidth: 3.5,
  }
}
</script>

<template>
  <div class="nd-screens">
    <span v-click="5" class="nd-screen-click" />
    <figure
      v-for="screen in screens"
      :key="screen.id"
      class="nd-screen"
      :class="[`is-${screen.id}`, { 'is-in': $clicks >= screen.appearAt }]"
    >
      <div class="nd-screen-frame" :style="screenFrameStyle(screen)">
        <img :src="screen.src" :alt="screen.alt">
      </div>
      <div class="nd-screen-marks" :style="screenFrameStyle(screen)">
        <span
          v-for="hotspot in screen.hotspots"
          :key="hotspot.name"
          class="nd-screen-hotspot"
          :data-hotspot-name="hotspot.name"
          :style="hotspotStyle(screen, hotspot)"
          v-mark="hotspotMark(hotspot)"
        />
        <p
          v-if="screen.id === 'openclaw-commit'"
          v-click="2"
          class="nd-screen-callout"
        >
          CVE was never assigned
        </p>
      </div>
    </figure>
    <p v-click="9" class="nd-screen-punchline">
      CVE 9.8 auth bypass, 30 days head start to attackers
    </p>
  </div>
</template>

<style scoped>
.nd-screens {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
}

.nd-screen-click {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

.nd-screen {
  position: absolute;
  width: 58%;
  margin: 0;
  opacity: 0;
  transform: translate3d(22px, 18px, 0) scale(0.97);
  transition:
    opacity 0.42s cubic-bezier(0.2, 0.75, 0.25, 1),
    transform 0.42s cubic-bezier(0.2, 0.75, 0.25, 1);
}

.nd-screen.is-in {
  opacity: 1;
  transform: none;
}

.nd-screen.is-openclaw-commit {
  top: 3.2%;
  left: 2.8%;
  z-index: 1;
}

.nd-screen.is-authlib-commit {
  top: 16%;
  left: 21%;
  z-index: 2;
}

.nd-screen.is-authlib-cve {
  top: auto;
  right: 1.6%;
  bottom: 11%;
  left: auto;
  width: 70%;
  z-index: 3;
}

.nd-screen-frame {
  overflow: hidden;
  background: #fff;
  border: 1px solid #d2d2d7;
  border-radius: 8px;
  box-shadow:
    0 18px 40px rgba(15, 15, 18, 0.16),
    0 2px 6px rgba(15, 15, 18, 0.08);
}

.nd-screen-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.nd-screen-marks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: visible;
  pointer-events: none;
}

.nd-screen-hotspot {
  position: absolute;
  display: block;
}

.nd-screen-callout {
  position: absolute;
  top: 28%;
  left: 63%;
  margin: 0;
  color: #ff3b30;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.15;
  white-space: nowrap;
}

.nd-screen-callout.slidev-vclick-target,
.nd-screen-punchline.slidev-vclick-target {
  transition: opacity 0.28s ease;
}

.nd-screen-punchline {
  position: absolute;
  right: 1.8%;
  bottom: 7%;
  z-index: 4;
  margin: 0;
  max-width: 46%;
  color: #ff3b30;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  text-align: right;
}
</style>
