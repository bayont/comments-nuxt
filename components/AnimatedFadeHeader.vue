<template>
  <div class="container">
    <header class="container__header"><slot /></header>
  </div>
</template>
<style lang="scss" scoped>
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  font-size: 96px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(45deg, #1669c4 0%, #19b0f6 33%, #1669c4 66%, #19b0f6 100%);
  background-size: 400% 400%;
  background-position: 0 0;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: loop 3s infinite ease-in-out;
}

@media screen and (max-width: 768px) {
  .container {
    font-size: 44px;
  }
}

@keyframes loop {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
