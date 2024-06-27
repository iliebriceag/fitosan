<template>
    <div class="nr-product">
        <span class="status d-flex justify-content-center align-items-center" v-if="data.numberProductsVisible">
            {{ data.countCartItems }} </span>
        <router-link to="/cart" class="cart"><i
                class="bi bi-cart2 d-flex justify-content-center align-items-center"></i><span class="none"><small>Coș
                    cumpărături</small></span></router-link>
    </div>
</template>
<script setup>
import { useShoppingStore } from '../stores'
//get store
const data = useShoppingStore();
</script>

<style scoped>
.nr-product {
    position: relative;
}

.status {
    position: fixed;
    bottom: 40px;
    left: 200px;
    z-index: 1;
    padding: 5px;
    width: 30px;
    border-radius: 40px;
    background-color: rgb(228, 7, 7);
    color: white;
    font-size: .8rem;
}

.cart {
    position: fixed;
    left: 125px;
    color: #fff;
    padding: 13px;
    box-shadow: 1px 1px 5px #222;
    -o-box-shadow: 1px 1px 5px #222;
    -webkit-box-shadow: 1px 1px 5px #222;
    -moz-box-shadow: 1px 1px 5px #222;
    -ms-box-shadow: 1px 1px 5px #222;
    font-weight: 300;
    color: #DDD;
    cursor: pointer;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    bottom: 0;
    background-color: #008080;
    border: none;
    text-decoration: none;
    font-size: .8rem;
}

@media only screen and (max-width : 361px) {
    .none {
        display: none;
    }

    .cart {
        height: 55px;
    }

    .status {
        left: 155px;
    }
}
</style>
