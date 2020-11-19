// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.name) {
   document.title = to.name
  }
  next()
 })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
