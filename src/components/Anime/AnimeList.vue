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
                    <SearchForAnime @search="handleSearch"/>
                </div>
            </div>
        </div>
        <div class="container d-flex flex-wrap mt-2 mb-2 justify-content-center">
            <AnimeItem v-for="Anime in AnimeList" :key="Anime" :Anime="Anime" />
        </div>
        <paginate v-model="page" :page-count="500" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
            :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'"
            class="d-flex justify-content-center">
        </paginate>
    </div>
</template>

<script>

import axios from 'axios';

import Paginate from 'vuejs-paginate-next';
import AnimeItem from './Items/AnimeItem.vue';
import SearchForAnime from './Items/SearchForAnime.vue';


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
        },
        async handleSearch(value){
            const returenddata = await axios.get("https://api.jikan.moe/v4/anime?q=" + value);
            this.AnimeList = returenddata.data.data;
        }
       
    },
    
    components: { AnimeItem, paginate: Paginate, SearchForAnime },
    
}
</script>
<style>
.pagination {
    --bs-pagination-padding-x: 0.75rem;
    --bs-pagination-padding-y: 0.375rem;
    --bs-pagination-font-size: 1rem;
    --bs-pagination-color: #000000;
    --bs-pagination-bg: #029dbc;
    --bs-pagination-border-width: 1px;
    --bs-pagination-border-color: #029dbc;
    --bs-pagination-border-radius: 5rem;
    --bs-pagination-hover-color: #000000;
    --bs-pagination-hover-bg: #02778f;
    --bs-pagination-hover-border-color: #02778f;
    --bs-pagination-focus-color: black;
    --bs-pagination-focus-bg: #004b5a;
    --bs-pagination-focus-box-shadow: 0 0 0 0.25remrgba(13, 110, 253, 0.25);
    --bs-pagination-active-color: #fff;
    --bs-pagination-active-bg: #02778f;
    --bs-pagination-active-border-color: #02778f;
    --bs-pagination-disabled-color: #ffffff;
    --bs-pagination-disabled-bg: #02778f;
    --bs-pagination-disabled-border-color: #02778f;
    display: flex;
    padding-left: 0;
    list-style: none;

}
</style>