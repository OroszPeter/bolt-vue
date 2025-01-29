import {defineStore} from "pinia";
import {ref, computed} from "vue";
import {useProductsStore} from "./products";

export const useCartStore = defineStore("cart", () => {   
    const cart = ref([]);

    const addToCart = (product) => {
        const item = cart.value.find((c) => c.id === product.id);
        if (item) {
            item.quantity++;
        } else {
            cart.value.push({ ...product, quantity: 1 });
        }
    };


    const clearCart = () => {
        const productsStore =  useProductsStore();

        cart.value.forEach((cartItem) => {
            const product = productsStore.products.find((p) => p.id === cartItem.id);
            if (product) {
                product.stock += cartItem.quantity;
            }
        });
        cart.value = [];
    };

    const total = computed(() =>{
        return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });

    return {cart, addToCart, clearCart, total};
});