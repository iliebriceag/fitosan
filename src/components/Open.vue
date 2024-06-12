<template>
    <Title />
    <div class="inscrieri">
        <div class="body-1">
            <div class="container">
                <div class="card">

                    <h4 class="text-secondary text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h4>
                    <p class="text-center text-secondary">.
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card {
    background-color: white;
    color: #333;
    border: none;
    border-radius: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 30px;
}

.body-1 {
    padding-bottom: 30px;
    padding-top: 30px;
}

@media only screen and (max-width: 512px) {
    .card {
        padding: 30px 10px 30px 10px;
    }
}
</style>

<script>
import Title from "../components/Title.vue"

export default {
    components: {
        Title,
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        }
    },
}
</script>