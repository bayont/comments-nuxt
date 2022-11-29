<template>
  <div class="comment" key="comment.id">
    <div class="comment_panel--left">
      <div class="comment__avatar">
        <img src="" alt="empty" />
      </div>
    </div>
    <div class="comment__panel--right">
      <div class="comment__info">
        <p class="comment__author">{{ comment.author }}</p>
        <small class="comment__date">{{ comment.createdAt }}</small>
      </div>
      <p class="comment__message">{{ comment.message }}</p>
      <div class="comment__actions">
        <a class="actions--reply"></a>
        <div class="actions__divider"></div>
        <a class="actions--edit"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['comment']
};
</script>
