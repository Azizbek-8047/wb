<template>
  <div class="pages pages-leadership all-direction">
    <AppBanner :title="'Structure of PIU'" :subtitle="'Structure of PIU'" />
    <div class="piu-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="row">
              <div v-for="person in persons" :key="person.id" class="col-lg-12">
                <div class="leadership-card">
                  <div class="leadership-card-image">
                    <img :src="person.img" alt="Not Found" />
                  </div>
                  <div class="leadership-card-info">
                    <h3>{{ person.name }}</h3>
                    <p>{{ person.text }}</p>
                    <a href="#!">{{ person.email }}</a>
                    <a href="#!">{{ person.phone }}</a>
                  </div>
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
        {
          img: require("~/assets/images/image2.jpg"),
          name: "Raxmanova Nurzada Urinbekovna",
          text: "Financial specialist / accountant",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
        {
          img: require("~/assets/images/image3.jpg"),
          name: "Utemuratov Maxset Maratovich",
          text: "Procurement specialist",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
        {
          img: require("~/assets/images/image4.png"),
          name: "Sattarova Regina Seradjedinovna",
          text: "Coordinator for Innovation activities",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
        {
          img: require("~/assets/images/image-5.jpg"),
          name: "Khikmatullaev Timur Shukhratulla ugli",
          text: "Grant Manager",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
        {
          img: require("~/assets/images/image6.jpg"),
          name: "Rakhimberdiev Bakhrom Ismailovich",
          text: "Monitoring and Evaluation Specialist",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
        {
          img: require("~/assets/images/default.png"),
          name: "Kamalova Gulbahar Reimbergenovna",
          text: "Sociologist",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
        {
          img: require("~/assets/images/default.png"),
          name: "Mamatkulov Bakhromsher Alijonovich",
          text: "Ecologist",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
        {
          img: require("~/assets/images/image7.jpg"),
          name: "Alimjonov Shohjahon Utkirbekovich",
          text: "Office Manager-translator",
          email: "munis@mininnovation.uz",
          phone: "+998 97 170 67 84",
        },
      ],
    };
  },
};
</script>

<style>
.piu-wrapper {
  padding: 80px 0 120px;
}

.piu-wrapper .row .col-lg-12 {
  padding: 12px;
}

.piu-wrapper .row .col-lg-12:first-child {
  padding-top: 0;
}

.leadership-card {
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.leadership-card-image {
  max-width: 190px;
  flex: 0 0 190px;
  height: 230px;
  margin-right: 16px;
  cursor: pointer;
}

.leadership-card-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: top;
  object-position: top;
}

.leadership-card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.leadership-card-info h3 {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #05278d;
  margin-bottom: 8px;
}

.leadership-card-info p {
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #001d42;
  margin-bottom: 8px;
}

.leadership-card-info a {
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #05278d;
  margin-bottom: 8px;
  text-decoration: none;
}
</style>