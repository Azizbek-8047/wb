import ru from "./locale/ru.json";
import uz from "./locale/uz.json";
import oz from "./locale/oz.json";
import en from "./locale/en.json";
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'WorldBank-Task',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/fonts/fontawesome/css/font-awesome.min.css",
        "~/assets/fonts/inter/stylesheet.css",
        "~/assets/fonts/icomoon/style.css",
        "~/assets/css/main.css",
        "~/assets/css/media.css",
        "~/assets/css/default.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/VueAwesomeSwiper.js", mode: "client" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/i18n',
    ],
    i18n: {
        locales: [{
                code: "uz",
                name: "O'zbek"
            },
            {
                code: "oz",
                name: "Ўзбек"
            },
            {
                code: "ru",
                name: "Русский"
            },

            {
                code: "en",
                name: "English"
            }
        ],
        strategy: "prefix_except_default",
        defaultLocale: "en",
        vueI18n: {
            fallBackLocale: "en",
            messages: {
                uz: uz,
                oz: oz,
                ru: ru,
                en: en
            }
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}