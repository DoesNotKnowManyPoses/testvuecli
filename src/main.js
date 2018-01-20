// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import './testVue.css'
import VueLazyLoad from 'vue-lazyload'
import menuvue from './nested-list.js'
import headervue from './history-list.js'
import sliderecommendcardvue from './slide-recommend-card.js'
import previewadvocatevue from './preview-advocate.js'
import editablenav from './editable-nav.js'
import livepanelvue from './live-panel.js'

Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
    error:'./static/error.jpg',
    loading:'./static/loading.jpg'
})
/* eslint-disable no-new */

/* header vue */

/* nested menu list vue */

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
headervue()
menuvue()
sliderecommendcardvue()
previewadvocatevue()
editablenav()
livepanelvue()
