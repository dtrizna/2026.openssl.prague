<script setup lang="ts">
const nodes = [
  { image: 'Image205.png', label: 'Target code' },
  { image: 'Image215.png', label: 'AI agent' },
  { image: 'Image211.png', label: 'Harness · seeds · build' },
  { image: 'Image209.png', label: 'libFuzzer / AFL++' },
  { image: 'Image207.png', label: 'Bugs' },
]
</script>
<template>
  <div class="eval-development">
    <h1>Eval-driven development</h1>
    <div v-click="1" class="eval-bracket">
      <div class="eval-input">Source code<br>Target logic</div>
      <div class="eval-output">Coverage<br>Bugs</div>
      <div class="eval-rule"><span>Benchmark</span></div>
    </div>
    <div class="eval-flow">
      <template v-for="(node, index) in nodes" :key="node.label">
        <div class="eval-node"><img :src="`/bsides/${node.image}`" alt=""><p>{{ node.label }}</p></div>
        <span v-if="index < nodes.length - 1" class="eval-arrow" aria-hidden="true">→</span>
      </template>
    </div>
    <img v-click="2" class="eval-baseline" src="/bsides/Image221.png" alt="OSS-Fuzz: Continuous Fuzzing for Open Source Software">
  </div>
</template>
<style scoped>
.eval-development { position: absolute; inset: 0; padding: 45px 50px; }
h1 { margin: 0; font-size: 36px !important; line-height: 1.12 !important; font-weight: 400; letter-spacing: -.035em; }
.eval-flow { position: absolute; top: 245px; left: 45px; right: 45px; display: grid; grid-template-columns: 1fr 20px 1fr 20px 1.4fr 20px 1.2fr 20px 1fr; align-items: center; gap: 5px; }
.eval-node { text-align: center; align-self: start; }
.eval-node img { display: block; width: 90px; height: 80px; object-fit: contain; margin: 0 auto 14px; }
.eval-node p { margin: 0; font-size: 19px; line-height: 1.2; }
.eval-arrow { margin-top: -35px; font-size: 28px; color: #1971c2; }
.eval-bracket { position: absolute; left: 85px; right: 75px; top: 130px; height: 110px; color: #1971c2; }
.eval-input, .eval-output { position: absolute; top: 0; font-size: 20px; line-height: 1.3; }
.eval-output { right: 0; text-align: right; }
.eval-rule { position: absolute; bottom: 0; left: 0; right: 0; height: 28px; border: 2px solid #1971c2; border-bottom: 0; text-align: center; }
.eval-rule span { position: relative; top: -17px; padding: 0 15px; background: white; font-size: 24px; }
.eval-baseline { position: absolute; bottom: 45px; left: 23%; width: 54%; height: auto; }
</style>
