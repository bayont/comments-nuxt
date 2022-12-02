<template>
  <div class="tile">
    {{ notificationsNumber }}
  </div>
</template>
<script>
export default {
  props: ['notificationsNumber']
};
</script>
<style lang="scss" scoped>
.tile {
  color: white;
  background-color: $accent-secondary-color;
  border-radius: 20px;
  padding: 2px 8px;
  margin-left: 5px;
  font-size: $small-font-size;
  display: inline;
}
</style>
