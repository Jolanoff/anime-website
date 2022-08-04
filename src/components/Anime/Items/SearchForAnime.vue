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
.Search-box{
    color: white;
    font-size: 25px;
    border-radius: 20px;
    border: 1px solid rgb(57, 176, 255);
    background-color: rgb(0, 22, 37);
    text-align: center;
}
.Search-box:active{
     border: 1px solid rgb(57, 176, 255);
}
</style>