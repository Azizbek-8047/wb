<template>
  <div class="pages pages-leadership all-direction">
    <AppBanner
      :title="'Международный экспертный совет (МЭС)'"
      :subtitle="'Международный экспертный совет (МЭС)'"
    />
    <div class="exprot-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-12" >
                <div class="exports-card" style="margin: 12px 0" v-for="(item, index) in exports" :key="item.id" >
                  <div class="export-card-items">
                    <div class="export-img">
                      <img :src="item.img" alt="Not Found" />
                    </div>
                    <div class="export-info">
                      <h2 class="name"> {{item.name}} </h2>
                      <p class="text">
                       {{item.about}}
                      </p>
                      <span class="from"> {{item.from}} </span>
                      <button
                      class="export-more"
                        block
                        v-b-toggle="'accordion-productdetails' + index"
                        variant="info"
                        role="tab"
                      >
                        <h3>more</h3>
                        <i class="icon-angle-down"></i>
                      </button>
                    </div>
                  </div>
                  <b-collapse
                    :id="'accordion-productdetails' + index"
                    accordion="my-accordion"
                    role="tabpanel"
                    class="collapse-info"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Modi, sunt! Exercitationem, placeat temporibus? Ipsum
                    nostrum ratione ab porro nam hic natus asperiores, iusto
                    architecto voluptate? Sed repudiandae dicta architecto
                    fugiat officiis perspiciatis beatae magnam quis, ex dolorem
                    quisquam nulla totam distinctio natus assumenda debitis
                    laborum accusantium reprehenderit voluptas adipisci saepe?
                  </b-collapse>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <AppSidebarBanner />
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
      persons: [
        {
          img: require("~/assets/images/image1.jpg"),
          name: "Azgarov Dilshodbek Azgarovich",
          text: "Project Implementation Unit Manager",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
      ],
      exports: [
          {
              img: require("~/assets/images/default.png"),
              name: 'Erbol Suleimenov',
              about: 'Expert in the field of science, technology and innovation policy, IEB Chairman',
              from: 'Kazakhstan',
          },
          {
              img: require("~/assets/images/default.png"),
              name: 'Erbol Suleimenov',
              about: 'Expert in the field of science, technology and innovation policy, IEB Chairman',
              from: 'Kazakhstan',
          },
          {
              img: require("~/assets/images/default.png"),
              name: 'Erbol Suleimenov',
              about: 'Expert in the field of science, technology and innovation policy, IEB Chairman',
              from: 'Kazakhstan',
          },
          {
              img: require("~/assets/images/default.png"),
              name: 'Erbol Suleimenov',
              about: 'Expert in the field of science, technology and innovation policy, IEB Chairman',
              from: 'Kazakhstan',
          },
          {
              img: require("~/assets/images/default.png"),
              name: 'Erbol Suleimenov',
              about: 'Expert in the field of science, technology and innovation policy, IEB Chairman',
              from: 'Kazakhstan',
          },
      ]
    };
  },
};
</script>

<style>
.exprot-wrapper {
  padding: 80px 0 120px;
}

.exprot-wrapper .row .col-lg-12 {
  padding: 12px;
}

.exprot-wrapper .row .col-lg-12:first-child {
  padding-top: 0;
}

.exports-card {
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
}

.export-card-items {
  display: flex;
  align-items: center;
  height: 230px;
}

.export-img {
  max-width: 190px;
  flex: 0 0 190px;
  height: 230px;
  margin-right: 16px;
  cursor: pointer;
}

.export-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: top;
  object-position: top;
}

.export-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.export-info .name {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #05278d;
  margin-bottom: 8px;
}

.export-info .text {
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #001d42;
  margin-bottom: 8px;
}

.export-info .from {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  color: #bdbdbd;
  margin-bottom: 8px;
}

.export-more {
    display: flex;
    align-items: center;
    background: transparent;
    outline: none;
    border: none;
}

.export-more h3 {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #05278d;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
}
.export-more i {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #05278d;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    margin-left: 4px;
    transition: 0.5s;
}
.export-more.not-collapsed i {
    transform: rotate(-180deg);
}

.collapse-info {
    padding: 16px 0;
}

</style>