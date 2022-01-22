<template>
  <div class="about">
    <div class="about-wrapper">
      <div class="container">
        <div class="row  justify-content-md-between justify-content-sm-center">
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6" v-for="(item) in about_items" :key="item.id" >
            <a class="about-item" target="_blank" href="#!">
              <div class="about-item-image">
                <img :src="item.image" alt="Not Fund" />
              </div>
              <h3>{{ item.title }}</h3>
              <p> {{item.text}} </p>
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
      about_items: [
        {
          id: 1,
          image: require("~/assets/images/about1.svg"),
          title: `Structure of PIU`,
          text: `We are project implementation group of World Bank "Modernization of the National innovative system of Uzbekistan" project.`,
        },
        {
          id: 2,
          image: require("~/assets/images/about2.svg"),
          title: `International Expert Board`,
          text: `We are the International Expert Board`,
        },
        {
          id: 3,
          image: require("~/assets/images/about3.svg"),
          title: `Suggestions and complaints`,
          text: `Only registered persons can leave their suggestions and complaints`,
        },
      ],
    };
  },
};
</script>

<style>
</style>