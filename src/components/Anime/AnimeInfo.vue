<template>
    <div>
        <div class="content">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="image"><img :src="apidata.images.jpg.image_url" alt=""></div>
                    </div>
                    <div class="col">
                        <div class="anime-info">
                            <div class="anime-tiltle">{{ apidata.title }}</div>
                            <div class="discryption">{{ apidata.synopsis }}</div>
                        </div>
                        <div class="anime-dis">
                            <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div>Rank : {{ apidata.rank }}</div>
                                </div>
                                <div class="col">
                                    <div>Episodes : {{ apidata.episodes }}</div>
                                </div>
                                <div class="col">
                                    <div>Rating : {{ apidata.score }}⭐</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-2">
            <div class="content-2 space"></div>
            <h1>Characters</h1>
            <div class="container d-flex flex-wrap  justify-content-center ">
                <CharecterItem v-for="Chare in CharList" :key="Chare" :Chare="Chare" class="charecter-card" />
            </div>
        </div>
    </div>
</template>
<script>


import axios from 'axios';
import CharecterItem from './Items/CharecterItem.vue';

export default {
    data() {
        return {
            apidata: null,
            CharList: [],
        };
    },
    async created() {
        const returenddata = await axios.get("https://api.jikan.moe/v4/anime/" + this.$route.params.id + "/full");
        this.apidata = returenddata.data.data;
        console.log(returenddata);

        const GetCharecters = await axios.get("https://api.jikan.moe/v4/anime/" + this.$route.params.id + "/characters");
        this.CharList = GetCharecters.data.data;
        console.log(GetCharecters);
    },
    components: { CharecterItem }
}

</script>

<style>
.discryption {
    font-size: 15px;
    font-weight: 100;

}

.image {
    margin: 15%;
}

.anime-info {
    color: white;
}

.anime-tiltle {
    font-size: 4vh;
    color: rgb(57, 176, 255);
}

.anime-dis {
    margin-top: 5%;
    display: flex;
    color: rgb(255, 98, 98);
}
</style>