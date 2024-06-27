<template>
    <div class="container-fluid">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 prom-cards mb-4">

            <div class="col p-1 animate fadeInUp one-four" v-for="product in data.visiblePromProducts" :key="product.id"
                :product="product">
                <div class="prom" v-if="data.visiblePromProducts.length > 0">
                    <span class="prom-danger p-1"><i class="bi bi-star-fill me-1"></i><small
                            class="me-2"><strong>REDUCERE</strong></small></span>
                    <img :src="product.image" alt="img" class="prom-img">
                    <div class="details">
                        <h5 class="card-title p-1"><small>{{ product.name }}</small></h5>
                        <span class="price">Preț: <strong><del>{{ product.price }}</del></strong><strong
                                class="text-danger ms-2">{{ product.prom }}</strong> Ron</span><br />

                        <p class="card-text p-1 text-muted"><small>{{ product.description }}</small></p>

                        <button v-if="product.stock > 0" @click="data.addToCart(product), data.decrementStock(product)"
                            class="my-btn">
                            <i class="bi bi-cart2 me-2"></i><small>Adaugă în
                                coș</small>
                        </button>
                        <div v-else>
                            <button class="disabled">
                                <i class="bi bi-cart2 me-2"></i><small>Indisponibil</small>
                            </button>
                            <div class="overlay">
                                <div class="center">
                                    <button type="button" class="btn my-btn" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"><i class="bi bi-cart2 me-2"></i><small>Anunță-mă
                                            când
                                            este în
                                            stock</small>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <button class="more d-flex justify-content-center align-items-center"
            @click="data.productsPromVisible += data.step"
            v-if="data.productsPromVisible < data.products.length"><small>Vezi mai multe</small></button>
    </div>
</template>



<style scoped>
.prom {
    position: relative;
    min-height: 300px;
}

.prom-cards {
    margin-top: -30vh;
}

.prom-cards .prom {
    background-color: whitesmoke;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: black;
    border: none;
    border-radius: 20px;
    padding-bottom: 10px;
}

.prom-cards .card-text {
    height: 55px;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    font-family: sans-serif;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

.prom .price {
    margin-left: 4px;
}

.prom .details {
    padding: 5px;
}

.prom-img {
    width: 100%;
    border-top-right-radius: 20px;
    height: 250px;
}

@media only screen and (max-width: 576px) {

    .prom-img {
        height: 150px;
    }

    .prom-cards .card-text {
        font-size: .8rem;
        height: 45px;
    }

    .prom-cards .card-title {
        font-size: 1rem;
    }

    .prom-cards .price {
        font-size: .9rem;
    }

    .my-btn {
        font-size: .8rem;
    }

    .disabled {
        font-size: .8rem;
        padding: 5px 10px;
    }

}


.prom-danger {
    position: absolute;
    background-color: rgb(220 53 69);
    color: white;
    border-bottom-right-radius: 30px;
}

.my-btn {
    color: white;
    background-color: var(--primaryColor);
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
}

.my-btn:hover {
    background-color: #30694bd3;
}

.disabled {
    text-decoration: none;
    color: white;
    background-color: gray;
    cursor: no-drop;
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: .3s ease;
    background-color: rgba(0, 0, 0, 0.575);
    border-top-left-radius: 0px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
}

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

<!-- <script>
import { useShoppingStore } from '../stores'

export default {
    
    data() {
        return {
            displayPropProduct: true
        }
    },
    // created() {
    //     if (product.prom !== null) {
    //         this.displayPropProduct = true;
    //     }
    // }
}
</script> -->

<script setup>
import { useShoppingStore } from '../stores'
//get props
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
//get store
const data = useShoppingStore();
</script>