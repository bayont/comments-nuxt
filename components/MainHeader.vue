<template>
  <header class="header">
    <MainNav />
    <FadeButton @click="navigateTo('/support')"> Wspieram projekt </FadeButton>
  </header>
</template>
<style scoped>
.header {
  background-color: white;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
</style>
