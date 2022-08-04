<template>
    <div>
        <nav class="navbar">
            <div class="container">
                <router-link to="/"> <a class="navbar-brand"><img class="logo" src="../../assets/logo.png"></a></router-link>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/Anime"><a class="nav-link" aria-current="page" href="#">ANIME</a>
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/Manga"><a class="nav-link" aria-current="page" href="#">MANGA</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    background-color: #e4e4e4;
}

.nav-link {
    color: black;
    font-weight: 1000;
}

a {
    text-decoration: none;
}
.logo{
    height: 70px;
}
</style>