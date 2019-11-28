<template>
        <div class="nav">
                <router-link to="/">Home</router-link>
                <router-link to="/blog">Blog</router-link>
        </div>
</template>

<script>
export default {
        name: 'Navbar',
}
</script>

<style scoped>
.nav {
        display: flex;
        margin: 0.3em 0em 1em 0em;
        justify-content: space-evenly;
        flex-wrap: wrap;
}

a {
        font-size: 1.75em;
        color: #D87A78;
        cursor: pointer;
        text-decoration: none;
}

a:focus {
        outline-color: #959896;
}

.nav__break {
        flex-basis: 100%;
        height: 0px;
}

@media only screen and (min-width:900px) {
        .nav {
                justify-content: space-around;
        }

        a {
                font-size: 0.75em;
        }

        .nav_break {
                display: none;
        }
}
</style>
