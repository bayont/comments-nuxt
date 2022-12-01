<template>
  <div class="container">
    <h3>Dodaj komentarz</h3>
    <form class="container__form" @submit.prevent="submitComment">
      <div class="form__panel--left">
        <Avatar path="/avatar.png" />
      </div>
      <div class="form__panel--right">
        <input class="form__input--text" type="text" name="author" placeholder="Autor" />
        <textarea class="form__input--textarea" type="text" name="comment" placeholder="Komentarz" />
        <input class="form__input--submit" type="submit" value="Dodaj" />
      </div>
    </form>

    <h3>Komentarze wspierających</h3>
    <div class="container__comments">
      <Comment v-for="comment of comments" :comment="comment" />
    </div>
  </div>
</template>
<script>
export default {
  setup: async () => {
    const comments = ref(JSON.parse(await $fetch('http://127.0.0.1:3001/comments')));
    return {
      comments
    };
  },
  methods: {
    async submitComment(event) {
      const author = event.target[0].value;
      const message = event.target[1].value;
      const newComment = await $fetch('http://127.0.0.1:3001/comments', {
        method: 'POST',
        body: JSON.stringify({ author, message })
      });
      this.comments.unshift(newComment);
    }
  }
};
</script>
<style lang="scss">
@mixin form__input {
  width: 100%;
  border: 1px solid $gray-dark-color;
  border-radius: 15px;
  display: block;
  &:focus {
    border-color: $accent-light-color;
    outline: none;
  }
}

.container {
  width: 50%;
  margin: 0 auto;
}

.container__form {
  display: flex;
}

.form__panel--right {
  flex-grow: 1;
}

.form__input--text {
  @include form__input;
}

.form__input--textarea {
  @include form__input;
  resize: none;
}

.form__input--submit {
  display: block;
  margin-left: auto;
}
</style>
