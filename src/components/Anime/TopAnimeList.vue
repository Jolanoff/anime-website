<template>
    <div class="space"></div>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="didget">
                        <h3>Top Anime</h3>
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


</template>

<script>

import axios from 'axios';
import AnimeItem from './Items/AnimeItem.vue';
export default {
    data: function () {
        return {
            AnimeList: [],
        };
    },
    async created() {
        const returenddata = await axios.get("https://api.jikan.moe/v4/top/anime?q&limit=24");
        this.AnimeList = returenddata.data.data;
        console.log(returenddata);
    },
    components: { AnimeItem }
}
</script>
<style>
h1 {
    font-weight: 600;
    color: white;
    text-align: center;
}

h6 {
    font-weight: 600;
    color: white;
    text-align: center;
}
</style>