import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return {
            products: [
                {
                    id: 1,
                    name: 'Rosii',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 700,
                    image: 'https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg',
                    stock: 1,
                    prom: 30
                },
                {
                    id: 2,
                    name: 'Castraveti',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 400,
                    image: 'https://cdn.pixabay.com/photo/2016/08/03/01/09/carrot-1565597_1280.jpg',
                    stock: 2,
                    prom: null
                },
                {
                    id: 3,
                    name: 'Ardei',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 1200,
                    image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg',
                    stock: 12,
                    prom: 20
                },
                {
                    id: 4,
                    name: 'Varza',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 900,
                    image: 'https://cdn.pixabay.com/photo/2016/11/29/13/42/zucchinis-1869941_1280.jpg',
                    stock: 22,
                    prom: null
                },
                {
                    id: 5,
                    name: 'Rosii roze',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 700,
                    image: 'https://cdn.pixabay.com/photo/2016/08/03/01/09/carrot-1565597_1280.jpg',
                    stock: 1,
                    prom: 21
                },
                {
                    id: 6,
                    name: 'Castraveti bulgaresti',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 400,
                    image: 'https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg',
                    stock: 1,
                    prom: null
                },
                {
                    id: 7,
                    name: 'Ardei gras',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 1200,
                    image: 'https://cdn.pixabay.com/photo/2018/05/29/23/05/beetroot-3440339_1280.jpg',
                    stock: 12,
                    prom: null
                },
                {
                    id: 8,
                    name: 'Varza rosie',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 900,
                    image: 'https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_960_720.jpg',
                    stock: 22,
                    prom: 220
                },
                {
                    id: 9,
                    name: 'Rosii grecesti',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 700,
                    image: 'https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_960_720.jpg',
                    stock: 3,
                    prom: null
                },
                {
                    id: 10,
                    name: 'Castraveti lungi',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 400,
                    image: 'https://cdn.pixabay.com/photo/2021/02/02/21/44/kale-5975540_1280.jpg',
                    stock: 2,
                    prom: 230
                },
                {
                    id: 11,
                    name: 'Ardei capia',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 1200,
                    image: 'https://cdn.pixabay.com/photo/2016/10/03/21/06/pumpkins-1712841_1280.jpg',
                    stock: 12,
                    prom: null
                },
                {
                    id: 12,
                    name: 'Varza',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 900,
                    image: 'https://cdn.pixabay.com/photo/2023/12/28/15/22/potatoes-8474361_960_720.jpg',
                    stock: 0,
                    prom: null
                },
                {
                    id: 13,
                    name: 'Rosii',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 700,
                    image: 'https://cdn.pixabay.com/photo/2019/05/29/19/04/tomatoes-4238247_1280.jpg',
                    stock: 3,
                    prom: null
                },
                {
                    id: 14,
                    name: 'Castraveti',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 400,
                    image: 'https://cdn.pixabay.com/photo/2018/08/09/11/02/artichokes-3594246_1280.jpg',
                    stock: 31,
                    prom: null
                },
                {
                    id: 15,
                    name: 'Ardei',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 1200,
                    image: 'https://cdn.pixabay.com/photo/2020/07/06/16/32/tomatoes-5377571_1280.jpg',
                    stock: 0,
                    prom: null
                },
                {
                    id: 16,
                    name: 'Varza',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
                    price: 900,
                    image: 'https://cdn.pixabay.com/photo/2014/09/30/15/25/peppers-467270_1280.jpg',
                    stock: 21,
                    prom: 200
                },
            ],
            cartItems: [],
            message: true,
            table: false,
            productsVisible: 8,
            productsPromVisible: 4,
            step: 4,
            numberProductsVisible: false,
            // count: 1
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
            return this.products.filter(x => x.prom).slice(0, this.productsPromVisible)
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
                
                this.count++;


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