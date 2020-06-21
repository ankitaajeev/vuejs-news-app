<template>
  <b-container class="p-5">
    <b-row class="pt-5 pl-3">
      <h3>Top Headlines in {{ this.$route.params.id }}</h3>
    </b-row>
    <b-row v-if="catnews" align-v="center" class="justify-content-around pt-2">
      <NewsCard
        v-for="article in catnews.slice(0,10)"
        :key="article.title"
        :article="article"
        >
      </NewsCard>
    </b-row>
  </b-container>
</template>

<script>
  import NewsCard from "@/components/NewsCard.vue";

  export default {
    name: "Category",
    components: {
      NewsCard
    },
    props:["id"],

    created() {
      this.$store.dispatch('getCategoryNews', this.$route.params.id);
    },

    computed: {
      catnews() {
        return this.$store.state.catnews.articles;
      }
    },
  };
</script>