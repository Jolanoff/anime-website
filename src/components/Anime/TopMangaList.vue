<template>
    <div>

        <div class="space"></div>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="didget">
                        <h3>Top Manga</h3>
                    </div>
                </div>
                <div class="col">
                </div>
                <div class="col">
                </div>
            </div>
        </div>

        <div class="container d-flex flex-wrap mt-2 mb-2 justify-content-center">
            <MangaItem v-for="Manga in MangaList" :key="Manga" :Manga="Manga" />
        </div>
    </div>


</template>

<script>

import axios from 'axios';
import MangaItem from './Items/MangaItem.vue';
export default {
    data: function () {
        return {
            MangaList: [],
        };
    },
    async created() {
        const returenddata = await axios.get("https://api.jikan.moe/v4/top/manga?q&limit=24");
        this.MangaList = returenddata.data.data;
        console.log(returenddata);
    },
    components: { MangaItem }
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