import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyCollectionView from "@/views/MyCollectionView";
import CardDetailsView from "@/views/CardDetailsView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/my-collection',
    name: 'myCollection',
    component: MyCollectionView
  },
  {
    path: '/card-details/:cardId',
    name: 'cardDetails',
    component: CardDetailsView
  }
]

const router = new VueRouter({
  //mode: 'history', //uncomment for remove hash mode in url : /#/
  routes
})

export default router
