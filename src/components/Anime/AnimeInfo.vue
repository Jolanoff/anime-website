<template>
    <div>
       
        <h1>{{apidata.title}}</h1>
        
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
        const returenddata = await axios.get("https://api.jikan.moe/v4/anime/" + this.$route.params.id + "/full");
        this.apidata = returenddata.data.data
        console.log(returenddata);

    },

}

</script>

<style>
</style>