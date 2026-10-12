<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
</script>
<template>
  <div class="eval-evidence">
    <h1>Where does it improve? Where does it fail?</h1>
    <div v-show="$clicks === 0" class="eval-table">
      <table>
        <thead><tr><th>Target</th><th>Human harness</th><th>Agent harness</th><th>Change</th></tr></thead>
        <tbody>
          <tr><td>fftw3/fftw3_fuzzer</td><td>12.8%</td><td>39.3%</td><td class="gain">+26.6 pp</td></tr>
          <tr><td>hwloc/hwloc_fuzzer</td><td>14.9%</td><td>9.6%</td><td class="loss">−5.2 pp</td></tr>
        </tbody>
      </table>
      <p>Line coverage</p>
    </div>
    <img v-click="1" class="harness-viewer" src="/bsides/Image233.png" alt="Harness benchmark viewer comparing target code and AI-generated fuzz harness side by side">
  </div>
</template>
<style scoped>
.eval-evidence { position: absolute; inset: 0; padding: 38px 45px; }
h1 { font-size: 32px !important; line-height: 1.12 !important; font-weight: 400; letter-spacing: -.03em; margin: 0; }
.eval-table { position: absolute; top: 175px; left: 55px; right: 55px; }
table { width: 100%; border-collapse: collapse; font-size: 23px; }
th { font-size: 17px; font-weight: 450; color: #6e6e73; text-align: right; border-bottom: 1px solid #ddd; padding: 14px 10px; }
td { padding: 26px 10px; text-align: right; border-bottom: 1px solid #eee; }
th:first-child, td:first-child { text-align: left; }
td:first-child { font-size: 19px; }
.gain { color: #23844c; }.loss { color: #d33a34; }
.eval-table p { color: #6e6e73; font-size: 16px; margin-top: 15px; }
.harness-viewer { position: absolute; top: 105px; left: 10%; width: 80%; max-height: 425px; object-fit: contain; border-radius: 5px; }
</style>
