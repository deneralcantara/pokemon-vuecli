import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CardDetails from '../views/CardDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/card/:id', 
    component: CardDetails, 
    name: 'card-details', 
  }
]

const router = new VueRouter({
  routes
})

export default router
