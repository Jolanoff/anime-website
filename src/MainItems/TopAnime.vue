<template>

<div>
        <div class="content space"></div>
        <div class="content"> 
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
        <div class="container text-center">
        <div class="row">
            <div class="col">

            </div>
            <div class="col">
                <router-link to="/TopAnime"><a class="show-more">show more</a></router-link>
            </div>
            <div class="col">
            </div>
        </div>
        <div class="content space"></div>
    </div>
    </div>
    </div>

</template>


<script>
import axios from 'axios';
import AnimeItem from '../components/Anime/Items/AnimeItem.vue';
export default {
    data: function () {
        return {
            AnimeList: [],
        };
    },
    async created() {
        const returenddata = await axios.get("https://api.jikan.moe/v4/top/anime?q&limit=6");
        this.AnimeList = returenddata.data.data;
        console.log(returenddata);
    },
    components: { AnimeItem }
}
</script>

<style>
.didget {
    text-align: left;
    margin-left: 16%;
    width: 100%;
}

.didget h3 {
    display: inline-block;
    margin: 0 0 15px 0;
    font-size: 20px;
    font-weight: 800;
    padding: 10px 25px;
    border-radius: 20px;
    border: 0;
    color: #fff;
    background-color: #029dbc;
}
@media (max-width: 1200px) {
    .didget{
        margin-left: 30%;
    }
}

.content {
    background-color: #181d2b;
}

.space {
    height: 20px;
}

.show-more {
    color: white;
    border: 1px solid white;
    float: center;
    padding: 6px 25px;
    transition: 0.2s;
    width: 100%;
}

.show-more:hover {
    color: #00d5ff;
    background-color: #00303a;
    border: 1px solid #029dbc;
}

.main-didget {
    margin-left: 19.4%;
}

.main-didget h3 {
    display: inline-block;
    margin: 0 0 15px 0;
    font-size: 20px;
    font-weight: 800;
    padding: 10px 25px;
    border-radius: 20px;
    border: 0;
    color: #fff;
    background-color: #029dbc;
}
</style>