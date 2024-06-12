<template>
        <Announcements />
        <PromCards />
        <Categories/>
        <ProductList />
        <Partners/>
</template>

<script>
import Announcements from '../components/Announcements.vue'
import PromCards from '../components/PromCards.vue'
import ProductList from '../components/ProductList.vue'
import Partners from '../components/Partners.vue'
import Categories from '../components/Categories.vue'





export default {
    name: 'home',
    components: {
        Announcements, PromCards, ProductList, Partners, Categories
    }
}
</script>