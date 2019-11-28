<template>
        <header class="header">
                <router-link to="/">Mario Leone</router-link>
        </header>
</template>

<script>
export default {
        name: 'Header',
}
</script>

<style scoped>
.header {
        clear: both;
        text-align: center;
        margin: 0.75em 0em 0em 0em;
}

a {
        color: #959896;
        text-decoration: none;
        font-size: 2.5em;
}

@media only screen and (min-width:900px) {
        .header {
                text-align: left;
        }

        a {
                font-size: 1.5em;
        }
}
</style>
