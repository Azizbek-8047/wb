<template>
  <div class="lang">
    <div class="lang-selected">
      <span> {{ selected.title }}</span>
      <i class="icon-angle-down"></i>
    </div>
    <div class="lang-options">
      <nuxt-link
        :to="switchLocalePath(lang.value)"
        class="lang-options-item"
        v-for="lang in langs"
        :key="lang.title"
        @click.native="chooseLang(lang.value)"
        >{{ lang.title }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Locale",
  data() {
    return {
      allLangs: {
        uz: {
          title: "O'zb",
          value: "uz",
        },
        oz: {
          title: "Ўзб",
          value: "oz",
        },
        ru: {
          title: "Рус",
          value: "ru",
        },
        en: {
          title: "Eng",
          value: "en",
        },
      },
      langs: {},
      selected: {},
    };
  },
  methods: {
    chooseLang(lang) {
      this.selected = this.allLangs[lang + ""];
      this.langs = { ...this.allLangs };
      delete this.langs[lang + ""];
      this.$router.go();
    },
  },
  mounted() {
    this.selected = this.allLangs[this.$i18n.locale];
    this.langs = { ...this.allLangs };
    delete this.langs[this.$i18n.locale];
  },
};
</script>

<style scoped>

.lang {
  width: auto;
  z-index: 0;
  position: relative;
  cursor: pointer;
}
.lang-selected span {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.lang-selected {
  width: auto;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.lang-selected i {
  font-size: 7px;
  margin-left: 6.41px;
  color: white;
  display: flex;
}

.lang-options {
  position: absolute;
  box-sizing: border-box;
  background: white;
  box-shadow: 0px 2px 15px rgb(59 69 83 / 8%);
  padding: 5px 15px;
  left: 50%;
  transform: translate(-50%, 15px);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.lang:hover .lang-options {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0px);
}
.lang-options-item {
  border-bottom: 1px dashed #ededed;
  box-sizing: border-box;
  padding: 0;
  width: 90px;
  color: #393c40;
  font-size: 16px;
  display: block;
  padding: 5px 0;
}
.locale:last-child {
  border: none;
}
.locale:hover {
  color: #007791;
}
</style>
