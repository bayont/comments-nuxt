<template>
  <button class="button" @click.stop="handleClick">
    <div class="button__burger">
      <div class="burger__line--first"></div>
      <div class="burger__line--second"></div>
    </div>
  </button>
</template>
<script lang="ts">
export default {
  emits: ['activate'],
  methods: {
    handleClick(event) {
      const { classList } = event.target;
      if (classList.contains('open')) {
        this.$emit('activate', false);
        classList.remove('open');
      } else {
        this.$emit('activate', true);
        classList.add('open');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin burger-line {
  position: absolute;
  height: 2px;
  background-color: $accent-light-color;
  border-radius: 2px;
}
.button {
  padding: 0;
  border: none;
  background: none;
}
.button__burger {
  width: 100%;
  height: 30%;
  position: relative;
  pointer-events: none;
}
.burger {
  &__line--first {
    @include burger-line;
    top: 0;
    width: 100%;
    transform: translateX(-25%) scaleX(0.5);
    transition: transform 0.5s;
  }
  &__line--second {
    @include burger-line;
    width: 100%;
    top: 100%;
  }
}

.button.open .burger__line--first {
  transform: translateX(0) scaleX(1);
}
</style>
