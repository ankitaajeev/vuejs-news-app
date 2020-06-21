<template>
  <div>
    <b-button
     @click.native="goTodetail(articleurl)" href="#" variant="primary"
     >
     Read Article
     </b-button>
  </div>
</template>

<script>
export default {
  name: "DetailsButton",
  props: {
      title: String,
      description: String,
      image: String,
      articleurl: String
  },
  methods:{
    goTodetail(url) {
      console.log("Im here")
      let proId=url
      this.$router.push({name:'Details',params:{url:proId}})
    }
  }
};
</script>