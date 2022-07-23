<template>
    <div>
        
        <h1>Anime</h1>

        <div v-for="fdata in apidata" :key="fdata" class="d-flex p-2">
            <router-link :to="`/anime/${fdata.mal_id}`">
                <img :src="fdata.images.jpg.image_url" class="">
            </router-link>
            {{ fdata.title }}
        </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    data() {
        return {
            apidata: null,
        }
    },
    async created() {
        const returenddata = await axios.get("https://api.jikan.moe/v4/anime");
        this.apidata = returenddata.data.data
        console.log(returenddata);

    },



}
</script>