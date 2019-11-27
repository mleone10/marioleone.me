<template>
        <header class="header">Mario Leone</header>
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
        margin: 1em 0em;
        color: #959896;
        font-size: 2.5em;
}

@media only screen and (min-width:900px) {
        .header {
                text-align: left;
                font-size: 1.5em;
        }
}
</style>
