<template>
  <nav class="nav">
    <Hamburger class="burger" @activate="activateNav" />
    <ul class="nav__list" ref="list">
      <li class="nav__item"><NuxtLink to="/description">Opis projektu</NuxtLink></li>
      <li class="nav__item"><NuxtLink to="/goals">Cele</NuxtLink></li>
      <li class="nav__item">
        <NuxtLink to="/news">Aktualności <NotificationBadge :notificationsNumber="46" /></NuxtLink>
      </li>
      <li class="nav__item"><NuxtLink to="/comments">Komentarze</NuxtLink></li>
    </ul>
  </nav>
</template>
<script lang="ts">
export default {
  methods: {
    activateNav(value: boolean) {
      const element = this.$refs.list as HTMLElement;
      if (value) {
        element.classList.remove('close');
        element.classList.add('open');
      } else {
        element.classList.remove('open');
        element.classList.add('close');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  min-height: 50px;
}
.burger {
  display: none;
  margin-top: 5px;
}
.nav__list {
  list-style: none;
  display: flex;
  font-size: 16px;
  padding: 0;
  margin: 0;
  animation: none;
}

.nav__item a {
  padding: 15px;
  display: block;
  color: inherit;
  text-decoration: inherit;
  border: 2px solid transparent;
  color: #606060;
  white-space: nowrap;
}

.nav__item a:hover,
a.router-link-active {
  border-bottom-color: $accent-light-color;
  color: $base-text-color;
}

@media screen and (max-width: 768px) {
  .nav {
    height: 100%;
  }
  .burger {
    display: block;
    width: 40px;
    height: 40px;
  }
  .nav__list {
    flex-direction: column;
    opacity: 0;
    margin-top: -200%;
  }
  .nav__list.open {
    animation: open-nav 0.7s ease-out forwards;
  }
  .nav__list.close {
    animation: close-nav 0.7s ease-out forwards;
  }

  @keyframes open-nav {
    0% {
      margin-top: -200%;
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      margin-top: 0;
      opacity: 1;
    }
  }

  @keyframes close-nav {
    0% {
      margin-top: 0;
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    99% {
      margin-top: -200%;
      display: flex;
    }
    100% {
      display: none;
    }
  }

  .nav__item a:hover,
  a.router-link-active {
    border-bottom-color: transparent;
    border-left-color: $accent-light-color;
  }
}
</style>
