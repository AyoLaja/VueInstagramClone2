<template>
  <div id="app">
    <div class="app-phone">
      <app-header :step="step" @cancel="goHome" @next="nextStep" @share="sharePost"></app-header>
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
      // fizzBuzz() {
      //   console.log('Fizz run')
      //   var number = 100;
      //   for (var i = 0; i <= 100; i++) {
      //     if(i % 15 === 0) {
      //       console.log('FizzBuzz')
      //     }
      //     else if (i % 3 === 0) {
      //       console.log('Fizz')
      //     }
      //     else if (i % 5 === 0) {
      //       console.log('Buzz')
      //     }
      //     else {
      //       console.log(i);
      //     }
      //   }
      // },
      // find(target, values) {
      //   let currentVal = values[0];
      //   let diff = target - currentVal;
      //   values.forEach(value => {
      //       let currentDiff = target - value;
      //       if (currentDiff < diff) {
      //           diff = currentDiff;
      //           currentVal = value;
      //       }
      //   }); 
        
      //   if (currentVal > target) {
      //       if (values.indexOf(target - diff) > -1) {
      //           return target - diff;
      //       }
      //       else {
      //           return currentVal;
      //       }
      //   }
      // },
      goHome() {
        this.image = "";
        this.selectedFilter = "";
        this.caption = "";
        this.step = 1;
        console.log('Home run')

        //this.fizzBuzz();
        // this.find(19,[5, 21, 45, 3]);
      },
      nextStep() {
        this.step++;
      },
      sharePost() {
        const post = {
          username: 'ayo_laja',
          userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_lg_bg.png',
          postImage: this.image,
          likes: 0,
          caption: this.caption,
          filter: this.filterType
        };
        this.posts.unshift(post);
        this.goHome();
      }
    },
    created() {
      EventBus.$on('filterSelected', (e) => {
        this.selectedFilter = e.filter;
      });
    }
  };
</script>

<style lang="scss" src="./styles/app.scss">
  
</style>
