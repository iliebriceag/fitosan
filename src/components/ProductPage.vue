<template>
<img :src="product.image" class="card-img-top" alt="..." />
            <span class="price"><strong>{{ product.price }}</strong> Ron
            </span>
</template>


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