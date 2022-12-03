<template>
  <button @click="$emit('click')" class="button">
    <slot />
  </button>
</template>
<script>
export default {
  emits: ['click']
};
</script>
<style lang="scss" scoped>
.button {
  @include box-button-shadow;
  display: block;
  background: linear-gradient(45deg, #1669c4 0%, #19b0f6 50%, #19b0f6 100%);
  background-size: 200% 200%;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: $large-font-size;
  font-weight: $regular-font-weight;
  padding: 10px 30px;
  cursor: pointer;
  transition: background-position 0.5s, filter 0.2s;
  white-space: nowrap;

  &:hover {
    background-position: 100% 100%;
  }
  &:active {
    filter: brightness(0.9);
  }
}
</style>
