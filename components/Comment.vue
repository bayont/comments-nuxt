<template>
  <article class="comment" key="comment.id">
    <div class="comment_panel--left">
      <div class="comment__avatar">
        <Avatar path="/avatar.png" />
      </div>
    </div>
    <div class="comment__panel--right">
      <header class="comment__info">
        <h3 class="comment__author">{{ comment.author }}</h3>
        <small class="comment__date">{{ getTimeDifference(comment.createdAt) }}</small>
      </header>
      <p class="comment__message">{{ comment.message }}</p>
      <div class="comment__actions">
        <button class="actions__button--reply">Odpowiedz</button>
        <div class="actions__divider"></div>
        <button class="actions__button--edit">Edytuj</button>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: ['comment'],
  methods: {
    getTimeDifference(date) {
      return getRelativeTime(date);
    }
  }
};
</script>
<style lang="scss" scoped>
.comment {
  display: flex;
  column-gap: 20px;
  margin: 20px 0;
  padding: 20px;
  background-color: white;
  font-size: $small-font-size;
  border-radius: 15px;
  @include box-shadow;
}

.comment__panel--right {
  flex-grow: 1;
}

.comment__author {
  margin: 7px 0 2px;
}

.comment__date {
  font-size: $small-font-size;
  color: $muted-text-color;
}

.comment__message {
  margin-top: 27px;
}

.comment__actions {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

@mixin text-button {
  color: $accent-dark-text-color;
  border: none;
  background: none;
  cursor: pointer;

  &:active {
    color: $accent-light-text-color;
  }
}
.actions__button--reply,
.actions__button--edit {
  @include text-button;
}

.actions__divider {
  margin: 0 10px;
  width: 1px;
  background-color: $gray-light-color;
}
</style>
