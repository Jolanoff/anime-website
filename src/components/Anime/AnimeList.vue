<template>
    <div>
        <div class="space"></div>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="didget">
                        <h3>Anime</h3>
                    </div>
                </div>
                <div class="col">
                </div>
                <div class="col">
                </div>
            </div>
        </div>
        <div class="container d-flex flex-wrap mt-2 mb-2 justify-content-center">
            <AnimeItem v-for="Anime in AnimeList" :key="Anime" :Anime="Anime" />
        </div>
        <paginate v-model="page" :page-count="500" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
            :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'" class="d-flex justify-content-center">
        </paginate>
    </div>
</template>

<script>

import axios from 'axios';
import Paginate from 'vuejs-paginate-next';
import AnimeItem from './Items/AnimeItem.vue';


export default {
    data: function () {
        return {
            AnimeList: [],

        };
    },
    async created() {
        const returenddata = await axios.get("https://api.jikan.moe/v4/anime?q&limit=24&page=");
        this.AnimeList = returenddata.data.data;
    },
    methods: {
        async clickCallback(pageNum) {
            const returenddata = await axios.get("https://api.jikan.moe/v4/anime?q&limit=24&page=" + pageNum);
            this.AnimeList = returenddata.data.data;
        }
    },



    components: { AnimeItem, paginate: Paginate, }
}
</script>
<style>
.page-item {
    color: bisque;
    
}
.page-item{
 
}
</style>