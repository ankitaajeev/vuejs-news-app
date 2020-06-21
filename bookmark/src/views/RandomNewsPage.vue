<template>
  <div>
    <b-container class="p-5">
      <b-row class="pt-5 pl-5">
        <h2>Today's Random News</h2>
      </b-row>
      <b-row align-v="center" class="justify-content-around pt-4">
        <NewsCard
          :article="random"
        >
        </NewsCard>
        <b-col cols="6" class="randomContainer">
          <b-card
            style="max-width: 20rem;"
            class="mb-3"
          >
            <b-card-text>
              Click the button to see another random news
            </b-card-text>
            <b-button
              href="#"
              @click.native="getRandom(articles)"
              variant="primary"
            >
              Give me Random News!
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
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
  .randomContainer {
    padding: 100px;
    height: 420px;
    border-left: 4px solid dimgray;
  }
</style>>

