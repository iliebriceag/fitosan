<template>
    <h1 class="text-center p-2">Produse</h1>
    <div class="container-fluid">
        <div className='row my-4'>
            <ProductListItem v-for="product in data.visibleProducts" :key="product.id" :product="product" />
        </div>
    </div>
    <button href="#" class="more d-flex justify-content-center align-items-center" @click="data.productsVisible += data.step" v-if="data.productsVisible < data.products.length"><small>Vezi mai multe</small></button>
</template>

<script setup>
import ProductListItem from './ProductListItem.vue'
import { useShoppingStore } from '../stores'

//get products from store
const data = useShoppingStore();
</script>

<style>
.more {
    display: block;
    margin: auto;
    border: 2px solid var(--primaryColor);
    background-color: white;
    color: var(--primaryColor);
    text-decoration: none;
    border-radius: 30px;
    width: 200px;
    height: 40px;
}

.more:hover {
    background-color: var(--primaryColor);
    color: white;
    transition: all .3s;
}
</style>