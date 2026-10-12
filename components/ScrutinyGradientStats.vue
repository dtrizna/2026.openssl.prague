<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  explainNested?: boolean
}>()

const statistics = computed(() => [
  {
    percentage: 2.03,
    displayPercentage: 2.03,
    statement: 'commits carried security signal',
    denominator: 'of all commits',
    role: 'universe' as const,
  },
  {
    percentage: 5.61,
    displayPercentage: 5.6,
    statement: 'security-signal commits cited a CVE',
    denominator: props.explainNested
      ? 'of that 2%'
      : 'of security-signal commits',
    role: 'subset' as const,
  },
  {
    percentage: 77.6,
    displayPercentage: 77.6,
    statement: 'fixes landed before public disclosure',
    denominator: props.explainNested
      ? 'of dated CVE dossiers in that 2%'
      : 'of dated CVE dossiers',
    role: 'subset' as const,
  },
])

function decimalPercentage(percentage: number) {
  const decimalDigits = percentage.toString().split('.')[1]
  return decimalDigits ? `.${decimalDigits}%` : '%'
}

function denominatorParts(denominator: string) {
  const marker = '2%'
  const markerIndex = denominator.indexOf(marker)
  if (markerIndex === -1)
    return [{ text: denominator, emphasize: false }]

  return [
    { text: denominator.slice(0, markerIndex), emphasize: false },
    { text: marker, emphasize: true },
    { text: denominator.slice(markerIndex + marker.length), emphasize: false },
  ].filter(part => part.text.length > 0)
}
</script>

<template>
  <section
    class="scrutiny-stats"
    :class="{ 'is-nested-explanation': explainNested }"
  >
    <div class="statistics-content">
      <div class="scope-tags" aria-label="Study scope">
        <span class="commits-tag"><strong>1,139,828</strong> commits</span>
        <span><strong>22</strong> Linux base-system repositories</span>
      </div>

      <ol>
        <li
          v-for="(statistic, index) in statistics"
          :key="statistic.displayPercentage"
          :class="`is-${statistic.role}`"
        >
          <div class="statistic-copy">
            <strong
              class="statistic-percentage"
              :aria-label="`${statistic.displayPercentage}%`"
            >
              {{ Math.trunc(statistic.displayPercentage) }}<span class="statistic-decimal">{{ decimalPercentage(statistic.displayPercentage) }}</span>
            </strong>
            <span class="statistic-label">
              {{ statistic.statement }}
              <small>
                <template
                  v-for="(part, partIndex) in denominatorParts(statistic.denominator)"
                  :key="`${statistic.displayPercentage}-${partIndex}`"
                >
                  <b v-if="part.emphasize">{{ part.text }}</b>
                  <template v-else>{{ part.text }}</template>
                </template>
              </small>
            </span>
          </div>
          <div
            class="statistic-track"
            role="img"
            :aria-label="`${statistic.displayPercentage}% ${statistic.statement} ${statistic.denominator}`"
          >
            <i :style="{ width: `${statistic.percentage}%` }" />
          </div>
          <p
            v-if="explainNested && index === 0"
            class="expansion-label"
          >
            this 2% becomes 100% below
          </p>
          <svg
            v-if="index < statistics.length - 1"
            class="statistic-connector"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
            :data-scene-name="index === 0
              ? '2.03% subset expansion'
              : 'shared CVE denominator guides'"
          >
            <line x1="1" y1="-5" x2="1" y2="100" />
            <line
              :x1="index === 0 ? statistic.percentage : 100"
              y1="-10"
              x2="100"
              y2="110"
            />
          </svg>
        </li>
      </ol>
    </div>

    <footer>
      M. J. Bommarito II, “The Scrutiny Gradient: A Mean-Field Survey of Security
      Commits, CVEs, and Dossiers in 22 Linux Base-System Repositories,” draft
      (2026).
    </footer>
  </section>
</template>

<style scoped>
:global(.scrutiny-gradient-slide) {
  box-sizing: border-box;
  position: relative;
  padding: 0 !important;
  background: #fff;
  color: #1d1d1f;
}

.scrutiny-stats {
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 38px 56px 56px;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
}

.statistics-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 38px;
}

.scope-tags {
  display: flex;
  align-items: center;
  gap: 8px;
}

.scope-tags span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border-radius: 999px;
  padding: 7px 12px;
  background: #f2f2f4;
  color: #86868b;
  font-size: 10px;
  font-weight: 550;
}

.scope-tags strong {
  color: #1d1d1f;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  font-weight: 650;
}

.scope-tags .commits-tag {
  gap: 7px;
  padding: 8px 14px;
  background: #fdecee;
  color: #b42318;
  font-size: 13px;
  font-weight: 600;
}

.scope-tags .commits-tag strong {
  color: #9b1c1c;
  font-size: 20px;
  font-weight: 750;
  letter-spacing: -0.03em;
}

ol {
  position: relative;
  isolation: isolate;
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 25px;
}

li {
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 420px minmax(0, 1fr);
  gap: 30px;
}

.statistic-copy {
  display: grid;
  align-items: center;
  grid-template-columns: 112px minmax(0, 1fr);
  gap: 17px;
}

.statistic-percentage {
  display: flex;
  align-items: baseline;
  font-size: 36px;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1;
}

.statistic-decimal {
  margin-left: 1px;
  font-size: 21px;
  font-weight: 650;
  letter-spacing: -0.03em;
}

.statistic-label {
  color: #343438;
  font-size: 15px;
  font-weight: 570;
  letter-spacing: -0.018em;
  line-height: 1.2;
}

.statistic-label small {
  display: block;
  margin-top: 4px;
  color: #a1a1a6;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0;
}

.statistic-label small b {
  font-weight: 500;
}

.statistic-track {
  position: relative;
  z-index: 1;
  height: 11px;
  overflow: hidden;
  border-radius: 999px;
  background: #ececee;
}

.statistic-track i {
  display: block;
  min-width: 3px;
  height: 100%;
  border-radius: inherit;
  background: #ff3b30;
  transform-origin: left center;
  animation: reveal-statistic 520ms cubic-bezier(0.22, 0.75, 0.25, 1) both;
}

li:nth-child(2) .statistic-track i {
  animation-delay: 80ms;
}

li:nth-child(3) .statistic-track i {
  animation-delay: 160ms;
}

.statistic-connector {
  position: absolute;
  z-index: 2;
  top: calc(50% + 5.5px);
  left: 450px;
  width: calc(100% - 450px);
  height: calc(100% + 14px);
  overflow: visible;
  pointer-events: none;
}

.statistic-connector line {
  stroke: #ff3b30;
  stroke-width: 1;
  stroke-dasharray: 4 4;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
  animation: reveal-expansion 260ms ease-out both;
}

.expansion-label {
  display: none;
}

.is-nested-explanation {
  --universe: #c2410c;
  --universe-muted: color-mix(in srgb, var(--universe) 11%, #fff);
  --subset: #16306e;
}

.is-nested-explanation .is-universe .statistic-percentage {
  color: var(--universe);
}

.is-nested-explanation .is-subset .statistic-percentage {
  color: var(--subset);
}

.is-nested-explanation .is-universe .statistic-track i {
  background: var(--universe);
}

.is-nested-explanation .is-subset .statistic-track {
  background: var(--universe-muted);
}

.is-nested-explanation .is-subset .statistic-track i {
  background: var(--subset);
}

.is-nested-explanation .statistic-connector line {
  stroke: var(--universe);
}

.is-nested-explanation .statistic-label small b {
  color: var(--universe);
  font-weight: 700;
}

.is-nested-explanation .expansion-label {
  display: block;
  position: absolute;
  z-index: 3;
  left: 468px;
  bottom: calc(50% + 12px);
  margin: 0;
  color: var(--universe);
  font-size: 11px;
  font-weight: 650;
  letter-spacing: -0.012em;
  white-space: nowrap;
}

li:first-child .statistic-connector line {
  animation-delay: 520ms;
}

li:nth-child(2) .statistic-connector line {
  animation-delay: 680ms;
}

footer {
  position: absolute;
  right: 56px;
  bottom: 32px;
  left: 56px;
  max-width: 880px;
  color: #96969b;
  font-size: 9px;
  font-weight: 450;
  line-height: 1.3;
}

@keyframes reveal-statistic {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes reveal-expansion {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.72;
  }
}

@media (prefers-reduced-motion: reduce) {
  .statistic-track i,
  .statistic-connector line {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
</style>
