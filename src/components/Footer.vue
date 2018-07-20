<template>
  <div class="phone-footer">
    <div class="home-cta" @click="handleHome">
      <i class="fas fa-home fa-lg"></i>
    </div>
    <div class="search-cta">
      <i class="fas fa-search fa-lg"></i>
    </div>
    <div class="upload-cta">
      <input type="file" id="file" name="file" class="inputfile" @change ="handleChange($event)"/>
      <label for="file">
        <i class="far fa-plus-square fa-lg"></i>
      </label>
    </div>
    <div class="like-cta">
      <i class="far fa-heart fa-lg"></i>
    </div>
    <div class="user-cta">
      <i class="far fa-user fa-lg"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        footer: "footer"
      };
    },
    props: {
      image: {
        type: String
      },
      step: {
        type: Number
      }
    },
    methods: {
      handleChange(event) {
        this.$emit('image-uploaded', event)
      },
      handleHome() {
        this.$emit('home', this.step)
      }
    }
  };
</script>




