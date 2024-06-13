<template>

    <div class="col-lg-3 col-sm-6 mb-4">
        <div class="card">
            <img :src="product.image" class="card-img-top" alt="..." />
            <span class="price"><strong>{{ product.price }}</strong> Ron
            </span>
            <div class="card-body">
                <h5 class="card-title text-black"><small>{{ product.name }}</small></h5>
                <p class="card-text"><small>{{ product.description }}</small></p>
                <!-- <p class="card-text text-center"><small>Preț: <strong>{{ product.price }}</strong> Ron <span
                    class="me-3"></span> Stock: <strong>{{ product.stock }}</strong></small></p> -->

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
                                data-bs-target="#exampleModal"><i class="bi bi-cart2 me-2"></i><small>Anunță-mă când
                                    este în
                                    stock</small>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex">
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Emailul dvs."
                        required>
                    <button class="my-btn ms-2" @click="sendMailSuccess()" data-bs-dismiss="modal"
                        aria-label="Close"><small>Trimite</small></button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    methods: {
        sendMailSuccess() {
            alert("Mail trimis cu succes!")
        }
    }
}
</script>
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

<style scoped>
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

.card-text {
    height: 50px;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    font-family: sans-serif;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card {
    display: block;
    background-color: whitesmoke;
    color: rgb(150, 150, 150);
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    position: relative;
    border: none;
}

.card .price {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--primaryColor);
    color: white;
    padding: 5px 15px 5px 20px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 5px;
}

.card:hover {
    box-shadow: var(--primaryColor) 0px 5px 15px;
}

.card img {
    display: block;
    margin: auto;
    height: 250px;
    /* de sters dupa stabilire dimensiune in back  */
}

.modal-content {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
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
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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
</style>
