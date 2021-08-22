export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GARLINT',
    htmlAttrs: {
      lang: 'en',
    },
<<<<<<< Updated upstream
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      { rel: 'stylesheet', href: 'css/styles.css' },
      { rel: 'stylesheet', href: 'css/colors.css' },
      { rel: 'stylesheet', href: 'css/plugins/animation.css' },
      { rel: 'stylesheet', href: 'css/plugins/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'css/plugins/date-picker.css' },
      { rel: 'stylesheet', href: 'css/plugins/dropzone.css' },
      { rel: 'stylesheet', href: 'css/plugins/flaticon.css' },
      { rel: 'stylesheet', href: 'css/plugins/font-awesome.css' },
      { rel: 'stylesheet', href: 'css/plugins/iconfont.css' },
      { rel: 'stylesheet', href: 'css/plugins/ion.rangeSlider.min.css' },
      { rel: 'stylesheet', href: 'css/plugins/light-box.css' },
      { rel: 'stylesheet', href: 'css/plugins/line-icons.css' },
      { rel: 'stylesheet', href: 'css/plugins/magnifypopup.css' },
      { rel: 'stylesheet', href: 'css/plugins/morris.css' },
      { rel: 'stylesheet', href: 'css/plugins/slick-theme.css' },
      { rel: 'stylesheet', href: 'css/plugins/slick.css' },
      { rel: 'stylesheet', href: 'css/plugins/themify.css' },
=======
    head: {
        title: 'hai-tutor',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/css/styles.css' },
            { rel: 'stylesheet', href: '/css/colors.css' },
            { rel: 'stylesheet', href: '/css/plugins/animation.css' },
            { rel: 'stylesheet', href: '/css/plugins/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/css/plugins/date-picker.css' },
            { rel: 'stylesheet', href: '/css/plugins/dropzone.css' },
            { rel: 'stylesheet', href: '/css/plugins/flaticon.css' },
            { rel: 'stylesheet', href: '/css/plugins/font-awesome.css' },
            { rel: 'stylesheet', href: '/css/plugins/iconfont.css' },
            { rel: 'stylesheet', href: '/css/plugins/ion.rangeSlider.min.css' },
            { rel: 'stylesheet', href: '/css/plugins/light-box.css' },
            { rel: 'stylesheet', href: '/css/plugins/line-icons.css' },
            { rel: 'stylesheet', href: '/css/plugins/magnifypopup.css' },
            { rel: 'stylesheet', href: '/css/plugins/morris.css' },
            { rel: 'stylesheet', href: '/css/plugins/slick-theme.css' },
            { rel: 'stylesheet', href: '/css/plugins/slick.css' },
            { rel: 'stylesheet', href: '/css/plugins/themify.css' }
        ],
        script: [
            { src: 'js/dropzone.js' },
            { src: 'js/jquery.min.js' },
            { src: 'js/metisMenu.min.js' },
            { src: 'js/moment.min.js' },
            { src: 'js/popper.min.js' },
            { src: 'js/bootstrap.min.js' },
            { src: 'js/slick.js' },
            { src: 'js/jquery.counterup.min.js' },
            { src: 'js/counterup.min.js' },
            { src: 'js/custom.js' },
        ]
    },

    // Global CSS: https://go   .nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/error-handling' },
        { src: '~/plugins/storage' },
        // { src: '~/plugins/axios' },
>>>>>>> Stashed changes
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        type: 'text/javascript',
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        type: 'text/javascript',
      },
      // { src: 'js/dropzone.js' },
      // { src: 'js/jquery.min.js' },
      // { src: 'js/metisMenu.min.js' },
      // { src: 'js/moment.min.js' },
      // { src: 'js/popper.min.js' },
    ],
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
    { rel: 'stylesheet', href: 'css/styles.css' },
    { rel: 'stylesheet', href: 'css/colors.css' },
    { rel: 'stylesheet', href: 'css/plugins/animation.css' },
    { rel: 'stylesheet', href: 'css/plugins/bootstrap.min.css' },
    { rel: 'stylesheet', href: 'css/plugins/date-picker.css' },
    { rel: 'stylesheet', href: 'css/plugins/dropzone.css' },
    { rel: 'stylesheet', href: 'css/plugins/flaticon.css' },
    { rel: 'stylesheet', href: 'css/plugins/font-awesome.css' },
    { rel: 'stylesheet', href: 'css/plugins/iconfont.css' },
    { rel: 'stylesheet', href: 'css/plugins/ion.rangeSlider.min.css' },
    { rel: 'stylesheet', href: 'css/plugins/light-box.css' },
    { rel: 'stylesheet', href: 'css/plugins/line-icons.css' },
    { rel: 'stylesheet', href: 'css/plugins/magnifypopup.css' },
    { rel: 'stylesheet', href: 'css/plugins/morris.css' },
    { rel: 'stylesheet', href: 'css/plugins/slick-theme.css' },
    { rel: 'stylesheet', href: 'css/plugins/slick.css' },
    { rel: 'stylesheet', href: 'css/plugins/themify.css' },
  ],
  // Global CSS: https://go   .nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/error-handling' },
    { src: '~/plugins/storage' },
    { src: '~/plugins/nuxt-swiper-plugin.js', mode: 'client' },
    // { src: '~/plugins/axios' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
