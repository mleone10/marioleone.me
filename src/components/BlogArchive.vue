<template>
        <div>
                <ul>
                        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
                </ul>
        </div>
</template>

<script>
export default {
        name: 'BlogArchive',
        data () {
                return {
                        posts: []
                }
        },
        mounted () {
                this.axios
                .get("https://margarine.marioleone.me/posts")
                .then(response => {
                        this.posts = response.data.posts
                })
        }
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
