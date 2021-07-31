<template>
  <div class="home">
    <h1>Lyrics</h1>
    <div class="articles">
      <div v-for="(article, index) in articles" :key="index">
        <NuxtLink :to="{ path: article.slug, query: { id: article.id } }">
          <h3>{{ article.title }}</h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { allArticlesQuery } from "~/graphql/queries";
export default {
  data() {
    return {
      articles: [],
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticlesQuery,
    },
  },
};
</script>
