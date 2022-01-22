<template>
  <div class="pages pages-leadership all-direction">
    <AppBanner :title="'News'" :subtitle="'News'" />
    <div class="news-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-12">
            <div class="row">
              <nuxt-link
                :to="'/news/' + item.id"
                v-for="item in getCard"
                :key="item.id"
                class="col-lg-4"
                style="padding: 0 16px 12px"
              >
                <CardNews
                  type="card1"
                  :id="item.id"
                  :image="item.image"
                  :date="item.date"
                  :time="item.time"
                  :view="item.view"
                  :title="item.title"
                  :text="item.short_content"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="news-page-nav">
              <h3>News</h3>
              <ul>
                <li><a href="#!">Project status</a></li>
                <li><a href="#!">The science</a></li>
                <li><a href="#!">Innovation</a></li>
              </ul>
            </div>
            <CardSidebarBanner />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("news", ["getCard"]),
  },
  methods: {
    // currentPost(){
    //   this.$store.commit("news/getCurrnetPost")
    // }
  },
};
</script>

<style>
.news-wrapper {
  padding: 120px 0 80px;
}

.news-page-nav {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #001d42;
  padding: 0;
  margin: 0 0 16px 0;
}

.news-page-nav ul {
  width: 342px;
  height: 152px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px 59px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.news-page-nav ul li a {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-transform: capitalize;
  color: rgba(0, 51, 153, 0.56);
  transition: 0.5s;
}
.news-page-nav ul li a:hover {
  color: #05278d;
}
</style>