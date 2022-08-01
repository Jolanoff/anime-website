import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import axios from 'axios'
import Paginate from "vuejs-paginate-next";
import VueAxios from 'vue-axios'
import MainPage from './MainPage.vue'
import AnimeList from './components/Anime/AnimeList.vue'
import MangaList from './components/Anime/MangaList.vue'
import AnimeInfo from './components/Anime/AnimeInfo.vue'
import MangaInfo from './components/Anime/MangaInfo.vue'
import TopAnimeList from './components/Anime/TopAnimeList.vue'
import TopMangaList from './components/Anime/TopMangaList.vue'

const routes = [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/Anime",
      name: "AnimeList",
      component: AnimeList,
    },
    {
      path: "/Anime:page",
      name: "AnimePagination",
      component: AnimeList,
    },
    {
      path: "/Manga",
      name: "MangaList",
      component: MangaList,
    },
    {
      path: "/TopAnime",
      name: "TopAnime",
      component: TopAnimeList,
    },
    {
      path: "/TopManga",
      name: "TopManga",
      component: TopMangaList,
    },
    {
      path: "/anime/:id",
      name: "anime",
      component: AnimeInfo,
    },
    {
      path: "/manga/:id",
      name: "manga",
      component: MangaInfo,
    },

    
    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App)
.use(router)
.use(Paginate)
.use(VueAxios, axios)
.mount('#app')
