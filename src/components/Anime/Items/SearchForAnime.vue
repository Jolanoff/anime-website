<template>
    <div>
<input class="Search-box"  placeholder="search for anime"  type="search" id="Search-box" required v-model="searchForAnime" @change="onChange" @keyup="onChange">
    </div>
</template>

<script>
    export default {
        computed:{},
        data(){
            return{
                searchForAnime:"",
            };
        },
        methods:{
            onChange(){
                this.$emit("search", this.searchForAnime);
            }
        }
    }
</script>

<style>

</style>