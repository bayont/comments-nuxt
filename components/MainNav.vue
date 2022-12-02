<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><NuxtLink to="/description">Opis projektu</NuxtLink></li>
      <li class="nav__item"><NuxtLink to="/goals">Cele</NuxtLink></li>
      <li class="nav__item"><NuxtLink to="/news">Aktualności</NuxtLink></li>
      <li class="nav__item"><NuxtLink to="/comments">Komentarze</NuxtLink></li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.nav__list {
  list-style: none;
  display: flex;
  font-size: 16px;
  padding: 0;
  margin: 0;
}

.nav__item a {
  padding: 15px;
  display: block;
  color: inherit;
  text-decoration: inherit;
  border-bottom: 2px solid transparent;
  color: #606060;
}

.nav__item a:hover,
a.router-link-active {
  border-bottom-color: #19b0f6;
  color: $base-text-color;
}
</style>
