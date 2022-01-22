<template>
  <div class="banner">
    <div class="banner-main">
      <div class="banner-main-item">
        <img src="~/assets/images/newsBg1.jpg" />
        <div class="container">
          <div class="banner-main-item-wrapper">
            <a>
              <span>30 сентября 2021</span>
              <h1>
                Узбекистан и Венгрия запускают конкурс на разработку научных
                проектов и стартапов
              </h1>
              <p>
                Мининноваций Узбекистана совместно с Министерством иностранных
                дел и торговли Венгрии объявили о запуске конкурса стартапов и
                научных проектов по всем совместным направлениям...
              </p>
              <a class="btn" href="#!">Подробнее</a>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-news">
      <div class="container">
        <div class="banner-news-wrapper">
          <div class="banner-slide-nav">
            <i class="icon-angle-left" slot="button-prev"></i>
            <i class="icon-angle-right" slot="button-next"></i>
          </div>
          <swiper class="swiper swiper-wrapper row" ref="swiper" :options="swiperOption">
            <swiper-slide
              v-for="item in banner_news"
              :key="item.id"
              class="link col-lg-4 "
            >
              <div class="banner-news-item">
                <span> {{ item.date }} </span>
                <h4>
                  {{ item.title }}
                </h4>
                <p>
                  {{ item.text }}
                </p>
                <span class="tag" >
                  #{{item.tag}}
                </span>
              </div>
            </swiper-slide>
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
  name: "swiper-example-change-direction",
  title: "Change direction",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      banner_news: [
        {
          date: "14 сентября 2021",
          title: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          text: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          tag: "инновации",
        },
        {
          date: "14 сентября 2021",
          title: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          text: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          tag: "инновации",
        },
        {
          date: "14 сентября 2021",
          title: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          text: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          tag: "инновации",
        },
        {
          date: "14 сентября 2021",
          title: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          text: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          tag: "инновации",
        },
        {
          date: "14 сентября 2021",
          title: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          text: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          tag: "инновации",
        },
        {
          date: "14 сентября 2021",
          title: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          text: `Индия запустит в Узбекистане онлайн-платформу телемедицины`,
          tag: "инновации",
        },
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: "horizontal",
        navigation: {
          nextEl: ".icon-angle-right",
          prevEl: ".icon-angle-left",
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? "vertical" : "horizontal"
            );
          },
        },
      },
    };
  },
};
</script>

<style>
</style>