<template>
  <div class="thank-you">
    <div class="thank-you-bg" aria-hidden="true" />

    <div class="thank-you-copy">
      <h1>Thank You!</h1>
      <p>Questions?</p>
    </div>

    <div class="thank-you-visuals">
      <img class="thank-you-qr" src="/qa-dimi.JPG" alt="Dimi Trizna LinkedIn QR">
      <img class="thank-you-logo" src="/aisle_logo.png" alt="AISLE">
    </div>
  </div>
</template>

<style scoped>
.thank-you {
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  color: #1d1d1f;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
}

.thank-you-bg {
  position: absolute;
  inset: 0;
  background-color: #fff;
}

.thank-you-copy {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 30%;
  text-align: center;
  transform: translate(-50%, -50%);
}

.thank-you-copy h1 {
  margin: 0;
  color: #1d1d1f;
  font-size: 56px;
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 1.08;
}

.thank-you-copy p {
  margin: 14px 0 0;
  color: #6e6e73;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.thank-you-visuals {
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  transform: translateY(-50%);
}

.thank-you-qr {
  display: block;
  width: 268px;
  height: auto;
  border-radius: 22px;
  box-shadow: 0 8px 28px rgb(0 0 0 / 8%);
  object-fit: contain;
}

.thank-you-logo {
  display: block;
  width: 72px;
  height: auto;
  object-fit: contain;
}
</style>
