import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import axios from "axios"

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return {
            products: [],
            cartItems: [],
            message: true,
            table: false,
            productsVisible: 8,
            productsPromVisible: 4,
            step: 4,
            numberProductsVisible: false,
        }
    },
    getters: {
        countCartItems() {
            return this.cartItems.length;
        },
        getCartItems() {
            return this.cartItems;
        },
        visibleProducts() {
            return this.products.filter(x => !x.prom).slice(0, this.productsVisible)
        },
        visiblePromProducts() {
            return this.products.filter(x => x.prom).slice(0, this.productsPromVisible);
        },
    },
    actions: {
        async fetchProducts() {
            try {
                const data = await axios.get('http://localhost:3000/api/products')
                this.products = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;



                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Produsul dvs. a fost actualizat',
                    showConfirmButton: false,
                    timer: 500
                });
            } else {
                item.quantity = 1;
                this.cartItems.push(item);
                this.table = true;
                this.message = false;
                this.numberProductsVisible = true;

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Produsul dvs. a fost salvat',
                    showConfirmButton: false,
                    timer: 500
                });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;


                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Produsul dvs. a fost actualizat',
                    showConfirmButton: false,
                    timer: 500
                });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity -= 1;
                if (this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Produsul dvs. a fost actualizat',
                    showConfirmButton: false,
                    timer: 500
                });
            }
        },
        decrementStock(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].stock -= 1;
                if (this.cartItems[index].stock === -1) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Produsul dvs. a fost eliminat',
                showConfirmButton: false,
                timer: 500
            });
        },

    },
})