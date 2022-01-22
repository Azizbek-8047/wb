<template>
  <div class="pages pages-leadership all-direction">
    <AppBanner :title="'News'" :subtitle="'News'" />
    <div class="news-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-12">
            <div class="news-view">
              <div class="nuxt-view-print">
                <h2> {{getCurrentPost.title}} </h2>
                <div class="news-view-date">
                  <span>{{getCurrentPost.date}}, {{getCurrentPost.time}}</span>
                  <span>|</span>
                  <span><i class="icon-view"></i>0</span>
                </div>
                <div class="new-view-image">
                  <img :src="getCurrentPost.image" alt="" />
                </div>
                <div class="news-view-content">
                  <p>
                   {{getCurrentPost.short_content}}
                  </p>
                </div>
              </div>
              <div class="news-share">
                <div class="news-social">
                  <h4>Share:</h4>
                  <ul>
                    <li>
                      <a href="#!"
                        ><img src="~/assets/images/telegram2.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#!"
                        ><img src="~/assets/images/instagram2.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#!"
                        ><img src="~/assets/images/facebook2.svg" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#!"
                        ><img src="~/assets/images/twitter2.svg" alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
                <div class="new-printer">
                  <i class="icon-printer"></i>
                  <h4>Print</h4>
                </div>
              </div>
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
  fetch({store, params}) {
    store.commit('news/getCurrnetPost',params.slug)
  },
  // mounted() {
  //   console.log(this.$route.params.slug),
  //   console.log(this.getCurrentPost)
  // },
  computed: {
       ...mapGetters("news", ["getCurrentPost"]),
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

.nuxt-view-print h2 {
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: #001d42;
  margin: 0 0 16px 0;
}

.nuxt-view-print .news-view-date {
  margin: 0 0 24px 0;
}

.nuxt-view-print .news-view-date span {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;
  color: #a5a5a4;
}

.new-view-image {
  height: 546px;
  margin: 0 0 16px 0;
}

.new-view-image img {
  width: 100%;
  height: 100%;
}

.nuxt-view-print .news-view-content p {
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #001d42;
}

.nuxt-view-print .news-view-content p:not(:last-child) {
  padding: 0 0 24px 0;
}

.news-share {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px 0 0 0;

}

.news-share .news-social {
  display: flex;
  align-items: center;
}

.news-share .news-social h4 {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #05278d;
  padding: 0 16px 0 0;
  margin: 0;
}

.news-share .news-social ul {
  display: flex;
  align-items: center;
  margin: 0;
}

.news-share .news-social ul li:not(:last-child) {
  margin: 0 8px 0 0;
}

.news-share .news-social ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(24, 150, 252, 0.08);
  border-radius: 8px;
  height: 32px;
  width: 32px;
  cursor: pointer;
}

.news-share .new-printer {
  display: flex;
  align-items: center;
}

.news-share .new-printer i {
  margin-right: 8px;
  color: #05278d;
  display: flex;
  font-size: 18px;
}

.news-share .new-printer h4 {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  color: #05278d;
  margin: 0;
  padding: 0;
}
</style>