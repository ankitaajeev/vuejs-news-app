<template>
  <div>
    <b-container class="p-5">
      <b-row class="pt-5 pl-5">
        <h2>Today's Random News</h2>
      </b-row>
      <b-row align-v="center" class="justify-content-around pt-4">
        <NewsCard
          :article="random">
        </NewsCard>
        <b-col cols="6" class="buttonContainer">
          <b-card
            style="max-width: 20rem;"
            class="buttonDiv mb-3"
          >
            <b-card-text>
              Click the button to see another random news
            </b-card-text>

            <b-button href="#" @click.native="getRandom(articles)" variant="primary">Give me Random News!</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import NewsCard from "@/components/NewsCard.vue";

export default {
  name: "Random",
  components: {
    NewsCard
  },
  data() {
    return {
      api_key:'d8eef8df96c84cbcae4fedecd769629b',
      articles: [],
      random: {},
      errors: []
    }
  },

  // computed: {
  //   randomnews() {
  //     let idx =  Math.floor(Math.random() * 20);
  //     this.articles = this.$store.state.randomnews.articles
  //     console.log('random',idx)
  //     const random = randomArticles[idx]
  //     console.log('randomarticle', idx, random)

  //     return random
  //   }
  // },

  // mounted() {
  //   this.$store.dispatch('getRandomNews');
  // },


    // created () {
    //     this.articles = this.$store.state.news.articles
    //     console.log(this.article.length)
    //     const idx = Math.floor(Math.random() * this.articles.length);
    //     console.log('random',idx)
    //     this.random = this.articlesarray[idx]
    //     console.log(this.random)
    //     return random
    // },
//   computed: {
//     randomnews() {
//         this.articles = this.$store.state.news.articles
//          console.log(this.article.length)
//         const idx = Math.floor(Math.random() * this.articles.length);
//         console.log('random',idx)
//         this.random = this.articlesarray[idx]
//     }
//   },

  created () {
    axios.get('https://newsapi.org/v2/everything?domains=techcrunch.com,bbc.co.uk,abc,cnbc,axios,bloomberg&apiKey=d8eef8df96c84cbcae4fedecd769629b')
      .then(response => {
        this.articles = response.data.articles
        const idx = Math.floor(Math.random() * this.articles.length);
        this.random = this.articles[idx]
        console.log(this.random)
      .catch(e => {
        this.errors.push(e)
      })
    })
  },

  methods: {
      getRandom(articles){
        const idx = Math.floor(Math.random() * articles.length);
        this.random = this.articles[idx]
      }

  }
}
</script>

<style scoped>
  .buttonContainer {
    padding: 100px;
    height: 420px;
    border-left: 4px solid dimgray;
  }
</style>>

