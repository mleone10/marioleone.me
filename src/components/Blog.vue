<template>
        <div class="blog">
                <ul>
                        <li><router-link to="/">Entry 1</router-link></li>
                        <li>Entry 2</li>
                        <li>Entry 3</li>
                </ul>
        </div>
</template>

<script>
export default {
        name: 'Blog',
}
</script>

<style scoped>
ul {
        padding-left: 1.4em;
}

li {
        font-size: 1.2em;
        margin: 1em 0em;
        font-family: 'Roboto', sans-serif;
}

a {
        text-decoration: none;
        color: #FFF6E9;
}

@media only screen and (min-width:900px) {
        ul {
                margin: unset;
                padding-left: 1em;
        }

        li {
                font-size: 0.5em;
        }
}
</style>
