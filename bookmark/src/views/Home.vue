<template>
  <div>
    <b-container class="p-5">
      <b-row class="pt-5 pl-3">
        <h3>Top Headlines in USA</h3>
      </b-row>
      <b-row v-if="news" align-v="center" class="justify-content-around pt-4">
        <NewsCard v-for="article in news.slice(0,10)" :key="article.id" :article="article"></NewsCard>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import NewsCard from "@/components/NewsCard.vue";
// import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NewsCard,
    // NavBar
  },

  computed: {
    news() {
      return this.$store.state.news.articles;
    }
  },

  mounted() {
    this.$store.dispatch('getTopNews');
  },

  // created () {
  //   document.title = "Bookmark";
  //   axios.get('https://api.currentsapi.services/v1/latest-news?language=en&apiKey='+this.api_key)
  //     .then(response => {
  //       this.articles = response.data.news
  //       console.log('data:')
  //       console.log(response.data.news)
  //     .catch(e => {
  //       this.errors.push(e)
  //     })
  //   })
  // },
};
</script>


:title="article.title"
      :description="article.description"
      :image="article.urlToImage"
      :articleurl="article.url"
      :articles="articles"