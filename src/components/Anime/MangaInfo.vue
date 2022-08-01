<template>
    <div>

        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="image"><img :src="apidata.images.jpg.image_url" alt=""></div>

                </div>
                <div class="col">
                    <div class="anime-info">
                        <h6>{{apidata.title}}</h6>
                        <p>Rank: {{apidata.rank}}</p>
                        <p>Rating: {{apidata.score}} ⭐</p>
                        

                    </div>

                </div>
                
            </div>
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
        const returenddata = await axios.get("https://api.jikan.moe/v4/manga/" + this.$route.params.id + "/full");
        this.apidata = returenddata.data.data
        console.log(returenddata);

    },

}

</script>

<style>
.image {
    margin: 15%;
}
.anime-info{
    margin-top: 15%;
    color: white;
    text-align: left;
}
</style>