<script setup lang="ts">
import latvianFlag from '../img/flag-lv.png'
</script>

<template>
  <div class="whoami">
    <h1># whoami</h1>
    <img class="latvian-flag" :src="latvianFlag" alt="Latvian flag">

    <div class="whoami-bio">
      <p>~15 years in infosec</p>
      <p>~7 years AI heavy<br>(pre-LLM)</p>
    </div>

    <img class="logo msft" src="/whoami/msft.png" alt="Microsoft">
    <img class="logo aisle" src="/whoami/aisle.png" alt="Aisle">
    <img class="logo sans" src="/whoami/sans.png" alt="SANS">
    <img class="logo oscp" src="/whoami/oscp.png" alt="OSCP">
    <img class="logo stanford" src="/whoami/stanford.png" alt="Stanford Online">
    <img class="logo blackhat" src="/whoami/blackhat.png" alt="Black Hat">
    <img class="logo bluehat" src="/whoami/bluehat.png" alt="BlueHat">
    <img class="logo defcon" src="/whoami/defcon.jpg" alt="DEF CON">
    <img class="logo aivillage" src="/whoami/aivillage.png" alt="AI Village">
    <img class="whoami-photo" src="/team-dimi-li.jpeg" alt="Dimi Trizna">
  </div>
</template>

<style scoped>
.whoami {
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
}

.whoami h1 {
  position: absolute;
  top: 28px;
  left: 56px;
  margin: 0;
  font-size: 42px;
  font-weight: 400;
  letter-spacing: -0.04em;
}

.whoami-bio {
  position: absolute;
  top: 168px;
  left: 46%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  transform: translateX(-50%);
}

.whoami-bio p {
  margin: 0;
  color: #343438;
  font-size: 26px;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.025em;
  white-space: nowrap;
}

.logo {
  position: absolute;
  display: block;
  object-fit: contain;
}

.msft {
  top: 196px;
  left: 56px;
  width: 82px;
  height: 82px;
}

.aisle {
  top: 168px;
  left: 158px;
  width: 118px;
  height: 118px;
}

.sans {
  top: 336px;
  left: 56px;
  width: 70px;
  height: 70px;
}

.oscp {
  top: 330px;
  left: 142px;
  width: 78px;
  height: 78px;
}

.stanford {
  top: 322px;
  left: 236px;
  width: 88px;
  height: 88px;
}

.blackhat {
  top: 188px;
  right: 196px;
  width: 168px;
  height: auto;
}

.bluehat {
  top: 286px;
  right: 228px;
  width: 104px;
  height: 104px;
}

.defcon {
  top: 158px;
  right: 56px;
  width: 92px;
  height: 92px;
}

.aivillage {
  top: 272px;
  right: 58px;
  width: 88px;
  height: 88px;
}

.whoami-photo {
  position: absolute;
  bottom: 120px;
  left: 48%;
  display: block;
  width: 15%;
  height: auto;
  object-fit: contain;
  transform: translateX(-50%);
}
.latvian-flag { position: absolute; right: 65px; bottom: 67px; width: 105px; height: auto; transform: rotate(-45deg); }
</style>
