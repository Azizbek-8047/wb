<template>
  <div class="menu">
    <div class="menu-background">
      <img src="~/assets/images/menu-bg.jpg" alt="Not Found" />
    </div>
    <div class="container">
      <div class="menu-wrapper">
        <a>
          <i @click="closeMenu" class="icon-plus"></i>
        </a>
        <div class="row justify-content-end">
          <b-col class="col-lg-7">
            <div
              id="style-2"
              class="menu-main"
              style="
                position: relative;
                overflow-y: auto;
                height: calc(100vh - 250px);
              "
            >
              <div @click="closeMenu" class="card menu-items">
                <nuxt-link to="/piu">Состав ГРП</nuxt-link>
              </div>
              <div class="card menu-items">
                <a v-b-toggle.collapse-1 class="m-1"
                  >О проекте <i class="icon-plus"></i>
                </a>

                <b-collapse id="collapse-1">
                  <ul>
                    <li>
                      <a>Компоненты проекта</a>
                    </li>
                    <li>
                      <nuxt-link to="/about" >Управление проектом</nuxt-link>
                    </li>
                    <li>
                      <a>Нормативные документы</a>
                    </li>
                  </ul>
                </b-collapse>
              </div>
              <div class="card menu-items">
                <a v-b-toggle.collapse-2 class="m-1"
                  >Совет управления проектом <i class="icon-plus"></i>
                </a>
                <b-collapse id="collapse-2">
                  <ul>
                    <li>
                      <a>Устав совета</a>
                    </li>
                    <li>
                      <a>Состав</a>
                    </li>
                  </ul>
                </b-collapse>
              </div>
              <div @click="closeMenu" class="card menu-items">
                <nuxt-link to="/international-expert"
                  >Международный экспертный совет (МЭС)</nuxt-link
                >
              </div>
              <div class="card menu-items">
                <a v-b-toggle.collapse-4 class="m-1"
                  >Закупки <i class="icon-plus"></i>
                </a>
                <b-collapse id="collapse-4">
                  <ul>
                    <li>
                      <a>Закупка проекта</a>
                    </li>
                    <li>
                      <a>Результаты закупок</a>
                    </li>
                  </ul>
                </b-collapse>
              </div>
              <div @click="closeMenu" class="card menu-items">
                <nuxt-link to="/news" > Новости </nuxt-link>
              </div>
              <div class="card menu-items">
                <a> Объявления на гранты </a>
              </div>
              <div class="card menu-items">
                <a>Обращения граждан</a>
              </div>
              <div class="card menu-items">
                <a>Вакансии</a>
              </div>
              <div @click="closeMenu" class="card menu-items">
                <nuxt-link to="/contacts" > Контакты </nuxt-link>
              </div>
              <div class="card menu-items">
                <a> Фотогалерея</a>
              </div>
              <div class="card menu-items">
                <a>Видео галерея</a>
              </div>
            </div>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    structure: {
      type: String,
      default() {
        return "";
      },
    },
  },
  methods: {
    closeMenu() {
      this.$store.commit("auth/setNavbar", false);
    },
  },
};
</script>
<style  >
</style>