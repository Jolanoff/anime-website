<template>
    <div>
        <div class="content-2 space"></div>
        <div class="content-2"> 
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
        <div class="container text-center">
        <div class="row">
            <div class="col">

            </div>
            <div class="col">
                <router-link to="/TopManga"><a class="show-more">show more</a></router-link>
            </div>
            <div class="col">
            </div>
        </div>
        <div class="content-2 space"></div>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import MangaItem from '../components/Anime/Items/MangaItem.vue';
export default {
    data: function () {
        return {
            MangaList: [],
        };
    },
    async created() {
        const returenddata = await axios.get("https://api.jikan.moe/v4/top/manga?q&limit=6");
        this.MangaList = returenddata.data.data;
        console.log(returenddata);
    },
    components: { MangaItem }
}
</script>

<style>
.content-2{
    background-color: #141820;
}

</style>