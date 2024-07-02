<template>
<div>
{{ $route.params.id }}

<div>
    {{  }}
</div>

</div>
</template>

<script setup>
import { useShoppingStore } from '../stores'
// //get props
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
//get store
const data = useShoppingStore();
</script>

