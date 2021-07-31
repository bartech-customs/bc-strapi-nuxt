<template>
  <div>
    <NuxtLink to="/">Back to list</NuxtLink>
    <h2>Lyric</h2>
    <hr />
    <h4>{{ article.title }}</h4>

    <h5>{{ article.description }}</h5>
    <hr />
    <pre>
      {{ article.body }}
    </pre>
    <NuxtLink to="/">Back to list</NuxtLink>
  </div>
</template>

<script>
import { singleArticleQuery } from "~/graphql/queries";

export default {
  data() {
    return {
      article: [],
    };
  },
  apollo: {
    article: {
      prefetch: true,
      query: singleArticleQuery,
      variables() {
        return {
          id: this.$route.query.id,
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>