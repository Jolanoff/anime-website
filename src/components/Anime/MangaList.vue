<template>
    <div>
        <div class="space"></div>
          <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="didget">
                        <h3>Manga</h3>
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
        <paginate v-model="page" :page-count="500" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
            :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'" class="d-flex justify-content-center">
        </paginate>
    </div>


</template>

<script>

import axios from 'axios';
import Paginate from 'vuejs-paginate-next';
import MangaItem from './Items/MangaItem.vue';
export default {
    data: function () {
        return {
            MangaList: [],
        };
    },
    async created() {
        const returenddata = await axios.get("https://api.jikan.moe/v4/manga?q&limit=24");
        this.MangaList = returenddata.data.data;
        console.log(returenddata);
    },
     methods: {
        async clickCallback(pageNum) {
            const returenddata = await axios.get("https://api.jikan.moe/v4/manga?q&limit=24&page=" + pageNum);
            this.MangaList = returenddata.data.data;
        }
    },



    components: { MangaItem, paginate: Paginate, }
}

</script>
<style>

</style>