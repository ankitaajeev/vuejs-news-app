<template>
  <div>
    <b-container class="p-5">
      <b-row class="pt-5 pl-3">
        <h3>Top Headlines in USA</h3>
      </b-row>
      <b-row v-if="news" align-v="center" class="justify-content-around pt-4">
        <NewsCard
          v-for="article in news.slice(0,10)"
          :key="article.id"
          :article="article"
        >
        </NewsCard>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import NewsCard from "@/components/NewsCard.vue";

  export default {
    name: "Home",
    components: {
      NewsCard
    },
    computed: {
      news() {
        return this.$store.state.news.articles;
      }
    },
    mounted() {
      this.$store.dispatch('getTopNews');
    },
  };
</script>