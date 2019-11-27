<template>
        <main>
        <img class="profilePic" src="../assets/profilePic.jpeg">
        <div class="bio">
                <p class="bioSection">Hi, I'm Mario! I am a software engineer specializing in cloud computing, CI/CD strategies, and project acceleration. I currently work at Capital One in McLean, VA as a backend engineer on our consumer credit monitoring tool, <a href="http://creditwise.com" rel="noopener noreferrer" target="_blank" class="main__link">CreditWise</a>.</p>
                <p class="bioSection">When I'm not at work, I pursue a wide array of interests, including community theater, baking, and D&D. I also enjoy running, journaling, reading, and discovering all that Northern Virginia has to offer.</p>
                <p class="bioSection">If you'd like to get in touch, feel free to reach out via <a href="mailto:me@marioleone.me" class="main__link">me@marioleone.me</a>.</p>
        </div>
        </main>
</template>

<script>
export default {
        name: 'body'
}
</script>

<style scoped>
main {
        margin: 2em 0em;
}

.bioSection {
        line-height: 1.5em;
        font-size: 1.2em;
        font-family: 'Roboto', sans-serif;
}

a {
        color: #D87A78;
}

a:focus {
        outline-color: #959896;
}

.profilePic {
        display: block;
        text-align: center;
        margin: 1em 0em;
        margin: auto;
        width: 225px;
        height: 225px;
}

@media only screen and (min-width:900px) {
        main {
                display: flex;
                margin: 1em 0em;
        }

        .bioSection {
                margin-top: 0em;
                line-height: 1.3em;
                font-size: 0.5em;
        }
        
        .profilePic {
                margin: 0em 1em 0em 0em;
        }
}

</style>
