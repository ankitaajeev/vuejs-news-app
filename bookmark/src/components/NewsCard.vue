<template>
  <div>
      <b-col>
        <b-card
          :img-src="article.urlToImage"
          img-alt="No Image"
          img-top
          img-height=212px
          tag="article"
          style="max-width: 20rem;"
          class="myCard mb-3"
        >
        <!-- <b-img> -->
          <b-card-text class="textHeight">
            {{ article.title }}
          </b-card-text>

          <b-button :href="article.url" variant="primary">Go to Article</b-button>
        </b-card>
      </b-col>
  </div>
</template>

<script>

export default {
  name: "NewsCard",
  props: ["article"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myCard {
  min-height: 375px;
  height: 405px;
}
.textHeight {
  min-height: 96px;
}
</style>


