<template>
        <div class="app">
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
        </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
        name: 'app',
        components: {
                Header,
                Body,
                Footer
        }
}
</script>

<style>
html {
        background-color: #313924;
        color: #FFF6E9;
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
}

.app {
        max-width: 70rem;
        margin: auto;
        padding: 0rem 1rem;
}

@media only screen and (min-width:900px) {
        html {
                font-size: 40px;
        }

        .app {
                max-width: 22em;
        }
}
</style>
