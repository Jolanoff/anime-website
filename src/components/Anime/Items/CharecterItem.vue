<template>
    <div>
        <img class="charecters" :src="Chare.character.images.jpg.image_url" alt="">
        <div class="char-name">{{ Chare.character.name }}</div>
        <div class="role">Role : {{ Chare.role }}</div>

    </div>
</template>

<script>
export default {
    props: {
        Chare: {
            required: true,
        },
    },

}
</script>

<style>
.charecters {
    height: 362px;
    width: 225px;
}

.char-name {
    color: rgb(57, 176, 255);
    display: flex;
    justify-content: center;


}

.charecter-card {
    margin: 1%;
}

.role {
    color: white;
    display: flex;
    justify-content: center;
    font-size: 15px;
    width: 100%;
}
</style>