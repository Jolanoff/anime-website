<template>
  <div>
    <router-link :to="`/manga/${Manga.mal_id}`">
      <div class="cards">
        <figure class="card">
          <img :src="Manga.images.jpg.image_url" />
          <figcaption>{{ Manga.title }}</figcaption>
        </figure>
      </div>
    </router-link>


  </div>
</template>

<script>


export default {
  props: {
    Manga: {
      required: true,
    },
  },



};
</script>
<style>

</style>