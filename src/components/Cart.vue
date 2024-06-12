<template>
    <Title />
    <div class="container">
        
         <h1 v-if="data.message" class="text-center mt-5 mb-5">Coșul este gol!</h1>
        <table class="table mt-4 mb-4" v-if="data.table">
            <thead>
                <tr>
                    <th>Nume</th>
                    <th>Cantitate</th>
                    <th>Preț</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data.getCartItems" :key="item.id">
                    <td>
                        <strong>{{ item.name }}</strong>
                    </td>
                    <td>
                        <i @click="data.incrementQ(item)" class="bi bi-caret-up-fill"></i>
                        <span class="mx-2">
                            {{ item.quantity }}
                        </span>
                        <i @click="data.decrementQ(item)" class="bi bi-caret-down-fill"></i>
                    </td>
                    <td>
                        {{ item.price * item.quantity }} Ron
                    </td>
                    <td>
                        <i @click="data.removeFromCart(item)" class="bi bi-trash-fill text-danger"></i>
                    </td>
                </tr>
                <tr>
                    <th class="text-center">
                        Total
                    </th>
                    <th class="text-center">
                        <strong>{{ data.cartItems.reduce((acc, item) => acc += item.price * item.quantity,
                            0) }}</strong> Ron
                    </th>
                    <th>

                    </th>
                    <th class="text-center">

                    </th>
                </tr>
            </tbody>
        </table>
        <button v-if="data.table" class="my-btn">FINALIZEAZĂ COMANDA <i class="bi bi-chevron-compact-right ms-2"></i></button>
    </div>
</template>

<script setup>
import { useShoppingStore } from "../stores"
// get store
const data = useShoppingStore();
</script>

<script>
import Title from "../components/Title.vue"

export default {
    // data() {
    //     return {
    //         message: true,
    //         table: false
    //     }
    // },
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

<style lang="scss" scoped>
.my-btn {
    background-color: #234b35d3;
    text-decoration: none;
    color: white;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    width: 100%;
    padding: 10px 0;


    &:hover {
        background-color: green;
        color: white;
        transition: .3s;
    }
}

tr th {
    background-color: var(--primaryColor);
    color: white;
}

tr td {
    background-color: whitesmoke;
    color: #333;
}

i {
    cursor: pointer;
}
</style>