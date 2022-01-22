<template>
  <div class="pages-banner">
    <div class="pages-banner-wrapper">
      <div class="container">
        <div class="pages-inner-wrapper">
          <h2>{{ title }}</h2>
          <ul>
            <li><a href="#!">Home</a></li>
            <li>
              <a href="#!"><span>/</span> {{ subtitle }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return "News";
      },
    },
    subtitle: {
      type: String,
      default() {
        return "News";
      },
    },
  },
};
</script>

<style scoped>
.pages-banner {
  max-width: 1720px;
  width: 100%;
  margin: 0 auto;
}

.pages-banner-wrapper {
  background: linear-gradient(
      90deg,
      rgba(0, 29, 66, 0.9),
      rgba(0, 29, 66, 0.24)
    ),
    url("~/assets/images/pages-banner.jpg");
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  padding: 0 16px;
}

.pages-inner-wrapper {
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pages-inner-wrapper h2 {
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #fff;
  margin-bottom: 16px;
}

.pages-inner-wrapper ul {
  display: flex;
  list-style: none;
  outline: none;
  padding: 0;
  margin: 0;
}

.pages-inner-wrapper ul li {
  display: flex;
  align-items: center;
}

.pages-inner-wrapper ul li a {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.pages-inner-wrapper ul li a span {
  margin: 0 3px;
}
</style>