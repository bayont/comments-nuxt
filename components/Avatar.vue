<template>
  <div>
    <img :src="path" alt="Avatar" />
  </div>
</template>
<script>
export default {
  props: ['path']
};
</script>
<style scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
