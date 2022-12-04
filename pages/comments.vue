<template>
  <div class="container">
    <header class="container__add-comment-header">Dodaj komentarz</header>
    <form class="container__form" @submit.prevent="submitComment" ref="form">
      <div class="form__panel--left">
        <Avatar path="/avatar.png" />
      </div>
      <div class="form__panel--right">
        <div class="form__input-wrapper--text">
          <input
            class="form__input--author"
            type="text"
            name="author"
            required
            oninvalid="this.setCustomValidity('Wpisz swoje imię :)')"
            oninput="this.setCustomValidity('')"
            @input="toggleAuthorBubble"
            autocomplete="off"
          />
          <div class="input-wrapper--placeholder" ref="authorPlaceholder">
            <div class="placeholder__text">Autor</div>
          </div>
        </div>
        <div class="form__input-wrapper--textarea">
          <textarea
            rows="4"
            class="form__input--message"
            type="text"
            name="comment"
            required
            oninvalid="this.setCustomValidity('Wpisz komentarz, który chcesz zamieścić')"
            oninput="this.setCustomValidity('')"
            @input="toggleCommentBubble"
          />
          <div class="input-wrapper--placeholder" ref="commentPlaceholder">
            <div class="placeholder__text">Komentarz</div>
          </div>
        </div>
        <FadeButton class="form__button--add" @click="submitForm"> Dodaj </FadeButton>
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
<script lang="ts">
export default {
  setup: async () => {
    const comments = ref(JSON.parse(await $fetch('http://127.0.0.1:3001/comments')));
    return {
      comments
    };
  },
  methods: {
    submitForm() {
      return (this.$refs.form as HTMLFormElement).submit;
    },
    async submitComment(event: Event) {
      const author = ((event.target as HTMLFormElement)[0] as HTMLInputElement).value;
      const message = ((event.target as HTMLFormElement)[1] as HTMLInputElement).value;
      const newComment = await $fetch('http://127.0.0.1:3001/comments', {
        method: 'POST',
        body: JSON.stringify({ author, message })
      });
      this.comments.unshift(newComment);
    },
    toggleAuthorBubble(event: Event) {
      const { value } = event.target as HTMLInputElement;
      if (value !== '') {
        (this.$refs.authorPlaceholder as HTMLDivElement).classList.add('bubble');
      } else {
        (this.$refs.authorPlaceholder as HTMLDivElement).classList.remove('bubble');
      }
    },
    toggleCommentBubble(event: Event) {
      const { value } = event.target as HTMLInputElement;
      if (value !== '') {
        (this.$refs.commentPlaceholder as HTMLDivElement).classList.add('bubble');
      } else {
        (this.$refs.commentPlaceholder as HTMLDivElement).classList.remove('bubble');
      }
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
  transition: border-color 0.3s;
  &:focus {
    border-color: $accent-light-color;
    color: $accent-dark-text-color;
    outline: none;
  }
}

.container {
  width: min(95vw, 800px);
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

.form__input--message {
  @include form__input;
  resize: none;
}

.form__button--add {
  display: block;
  margin-left: auto;
}
.form__input-wrapper--text,
.form__input-wrapper--textarea {
  position: relative;
}

.form__input--author:not(:focus) + .input-wrapper--placeholder {
  &.bubble {
    &::before {
      transition-delay: 0ms;
      border-color: $gray-dark-color;
    }
    .placeholder__text {
      color: $muted-text-color;
    }
  }
}

.input-wrapper--placeholder {
  position: absolute;
  font-size: 16px;
  color: $muted-text-color;
  transition: font-size 0.3s, transform 0.4s;
  padding: 2px 10px;
  left: 30px;
  top: 15px;
  pointer-events: none;

  &.bubble {
    font-size: 10px;
    transform: translate(-5px, -22px);
    &::before {
      background-color: white;
      border: 1px solid $accent-light-color;
      z-index: -1;
    }
    &::after {
      z-index: 4;
      opacity: 1;
    }
    .placeholder__text {
      color: $accent-dark-text-color;
      transform: translate(0, 0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    background-color: white;
    width: 100%;
    border-radius: 10px;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    border: 1px solid transparent;
    transition: border 100ms;
  }

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    background-color: white;
    width: calc(100% + 10px);
    height: 100%;
    top: 50%;
    left: 0;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .placeholder__text {
    position: relative;
    z-index: 5;
    transition: color 0.2s, transform 0.5s;
    transform: translate(-9px, -2px);
  }
}

.form__input--author {
  @include form__input;
  border-radius: 25px;
  font-size: 16px;
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

@media screen and (max-width: 768px) {
  .form__panel--left {
    display: none;
  }
  .container__form {
    padding: 0;
  }
}
</style>
