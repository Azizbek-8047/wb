<template>
  <div class="media">
    <div class="container">
      <div class="media-wrapper">
        <div class="media-header">
          <div class="media-header-add">
            <h1 class="title">MediaTitle</h1>
            <div class="media-nav">
              <button :class="{'btn' : show == true}" @click="show = true"  >PhotoGalleryAll</button>
              <button :class="{'btn' : show == false}" @click="show = false" >VideoGalleryAll</button>
            </div>
          </div>
          <a class="view" href="#!"> ViewAll </a>
        </div>
        <div class="media-main">
          <div
           v-if="show == true"
           class="media-items">
            <a
              v-for="(image, index) in images"
              :key="image.id"
              class="media-item"
              :class="{ 'media-item-active': index == 0 }"
              href="#!"
            >
              <i class="icon-gallery"></i>
              <img :src="image.img" alt="Not Found" />
            </a>
          </div>
          <div
           v-else
           class="media-items">
            <a
              v-for="(image, index) in images"
              :key="image.id"
              class="media-item"
              :class="{ 'media-item-active': index == 0 }"
              href="#!"
            >
              <i class="icon-video"></i>
              <img :src="image.img" alt="Not Found" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      images: [
        {
          img: require("~/assets/images/img1.png"),
        },
        {
          img: require("~/assets/images/img1.png"),
        },
        {
          img: require("~/assets/images/img1.png"),
        },
        {
          img: require("~/assets/images/img1.png"),
        },
        {
          img: require("~/assets/images/img2.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>