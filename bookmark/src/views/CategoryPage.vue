<template>
    <b-container class="p-5">
      <b-row class="pt-5 pl-3">
        <h3>Top Headlines in {{ this.$route.params.id }}</h3>
      </b-row>
    <b-row v-if="catnews" align-v="center" class="justify-content-around pt-2">
        <NewsCard v-for="article in catnews.slice(0,10)" :key="article.title" :article="article">Here</NewsCard>
    </b-row>
    </b-container>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import NewsCard from "@/components/NewsCard.vue";

export default {
  name: "Category",
  components: {
    NewsCard
  },
  props:["id"],

  created() {
    console.log(this.$route.params.id)
    this.$store.dispatch('getCategoryNews', this.$route.params.id);
  },

  computed: {
    catnews() {
        console.log(this.$store.state.catnews.articles)
      return this.$store.state.catnews.articles;
    }
  },
};
</script>


:title="article.title"
      :description="article.description"
      :image="article.urlToImage"
      :articleurl="article.url"
      :articles="articles"

      <NewsCard v-for="article in news.slice(0,10)" :key="article.id" :article="article">Here</NewsCard>