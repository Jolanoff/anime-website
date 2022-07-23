import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import MainPage from './MainPage.vue'
import AnimeInfo from './components/Anime/AnimeInfo.vue'



const routes = [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/anime/:id",
      name: "anime",
      component: AnimeInfo,
    },
    
    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App)
.use(router)
.use(VueAxios, axios)
.mount('#app')
