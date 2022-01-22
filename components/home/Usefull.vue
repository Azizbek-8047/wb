<template>
  <div class="usefull">
    <div class="container">
      <div class="usefull-wrapper">
        <div class="usefull-header">
          <h2 class="title">Полезные ссылки</h2>
          <div class="pagination">
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>
        <div class="useull-body">
          <swiper class="swiper" :options="swiperOption"  >
            <swiper-slide  v-for="item in usefull" :key="item.id"
              ><a href="#!" class="usefull-item">
                <div class="usefull-item-img">
                  <img :src="item.image" />
                </div>
                <h3> {{item.title}} </h3>
              </a></swiper-slide
            >
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-responsive-breakpoints",
  title: "Responsive breakpoints",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      usefull: [
          {
              image: require('~/assets/images/usefull1.png'),
              title: 'Single interactive State Services Portal'
          },
          {
              image: require('~/assets/images/usefull2.png'),
              title: 'Single interactive State Services Portal'
          },
          {
              image: require('~/assets/images/usefull3.png'),
              title: 'Single interactive State Services Portal'
          },
          {
              image: require('~/assets/images/usefull4.png'),
              title: 'Single interactive State Services Portal'
          },
      ]
    };
  },
};
</script>


<style>
</style>