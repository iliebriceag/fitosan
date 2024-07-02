<template>
    <div class="container-fluid scrollmenu">
        <span class="item">Categorii</span>
        <div v-for="item in categories" :key="item.id">
            <a class="item" href="#news"><img :src="`${item.imagine}`" alt="">{{ item.categorie }}</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/api/categories')
            .then(response => {
                this.categories = response.data
            })
    },
}
</script>

<style scoped>
div.scrollmenu {
    margin: 30px 0 30px 0;
    background-color: whitesmoke;
    overflow: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
}

div.scrollmenu a {
    color: #333;
    text-align: center;
    padding: 10px 15px;
    background-color: white;
    text-decoration: none;
    border-radius: 30px;
    margin: 5px;
    display: flex;
}

div.scrollmenu a img {
    height: 25px;
    margin-right: 5px;
}

div.scrollmenu span {
    background-color: var(--primaryColor);
    display: inline-block;
    text-align: center;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
    border-radius: 30px;
}

div.scrollmenu a:hover {
    background-color: var(--primaryColor);
    color: white;
}
</style>