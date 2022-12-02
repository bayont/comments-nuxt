<template>
  <div class="container">
    <header class="container__add-comment-header">Dodaj komentarz</header>
    <form class="container__form" @submit.prevent="submitComment" ref="form">
      <div class="form__panel--left">
        <Avatar path="/avatar.png" />
      </div>
      <div class="form__panel--right">
        <input
          class="form__input--author"
          type="text"
          name="author"
          placeholder="Autor"
          required
          oninvalid="this.setCustomValidity('Wpisz swoje imię :)')"
          oninput="this.setCustomValidity('')"
        />
        <textarea
          rows="4"
          class="form__input--message"
          type="text"
          name="comment"
          placeholder="Komentarz"
          required
          oninvalid="this.setCustomValidity('Wpisz komentarz, który chcesz zamieścić')"
          oninput="this.setCustomValidity('')"
        />
        <FadeButton class="form__button--add" @click="$refs.form?.submit"> Dodaj </FadeButton>
      </div>
    </form>

    <header class="container__comments-header">
      <div>Komentarze wspierających</div>
      <div class="comments-header__counter">{{ countComments }}</div>
    </header>
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
  },
  computed: {
    countComments() {
      return this.comments.length;
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin form__input {
  @include box-shadow;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid $gray-dark-color;
  border-radius: 15px;
  display: block;
  padding: 15px 30px;
  margin-bottom: 20px;
  font-family: inherit;
  color: $base-text-color;
  &:focus {
    border-color: $accent-light-color;
    color: $accent-dark-text-color;
    outline: none;
  }
}

.container {
  width: 50%;
  margin: 0 auto;
}

.container__comments-header,
.container__add-comment-header {
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.container__comments-header {
  display: flex;
}

.container__form {
  display: flex;
  column-gap: 20px;
  padding: 20px 0 20px 20px;
}

.form__panel--right {
  flex-grow: 1;
}

.form__input--author {
  @include form__input;
  border-radius: 25px;
}

.form__input--message {
  @include form__input;
  resize: none;
}

.form__button--add {
  display: block;
  margin-left: auto;
}

.comments-header__counter {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  border: 1px solid $accent-dark-color;
  color: $accent-dark-color;
  line-height: 1.8;
  margin-left: 16px;
  user-select: none;
}
</style>
