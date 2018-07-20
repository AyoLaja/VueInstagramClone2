<template>
  <div id="app">
    <div class="app-phone">
      <app-header :step="step" @cancel="goHome" @next="nextStep"></app-header>
      <app-body 
        :posts="posts" 
        :filters="filters"
        :step="step"
        :image="image"
        :selectedFilter="selectedFilter"
        v-model="caption">
      </app-body>
      <app-footer @image-uploaded="uploadImage" @home="goHome"></app-footer>
    </div>
  </div>
</template>

<script>
import Body from "./components/Body.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import posts from "./data/posts"
import filters from "./data/filters"
import EventBus from './eventBus'

export default {
  name: "app",
  data() {
    return {
      posts,
      filters,
      step: 1,
      image: "",
      selectedFilter: "",
      caption: ""
    };
  },
  components: {
    appBody: Body,
    appHeader: Header,
    appFooter: Footer
  },
  methods: {
    uploadImage(e) {
      const files = e.target.files;
      console.log(files);
      if(!files.length) return;

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        this.image = e.target.result;
        console.log(this.image);
        this.step = 2;
        console.log(this.step);
      };

      //To enable reuploading of same files in Chrome
      document.querySelector("#file").value = "";
    },
    goHome() {
      this.image = "";
      this.selectedFilter = "";
      this.caption = "";
      this.step = 1;
    },
    nextStep() {
      this.step++;
    }
  },
  created() {
    EventBus.$on('filterSelected', (e) => {
      this.selectedFilter = e.filter;
    })
  }
};
</script>

<style lang="scss" src="./styles/app.scss">

</style>
