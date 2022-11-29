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
      this.comments.push(newComment);
    }
  }
};
</script>
<template>
  <div>
    <h3>Dodaj komentarz</h3>
    <form @submit.prevent="submitComment">
      <input type="text" name="author" id="author" placeholder="Autor" />
      <input type="text" name="comment" id="comment" placeholder="Komentarz" />
      <input type="submit" value="Dodaj" />
    </form>

    <h3>Komentarze wspierających</h3>
    <div class="comments">
      <Comment v-for="comment of comments" :comment="comment" />
    </div>
  </div>
</template>
