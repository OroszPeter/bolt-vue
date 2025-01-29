<template>
    <div>
        <h1>Products</h1>
        
            <div v-for="product in productsStore.products"
            :key="product.id">
                
            <p>{{ product.name }} - {{ product.price }} Ft ({{ product.unit }})</p>
            
            <p>Készlet: {{ product.stock }}</p>
            
            <button @click="addToCart(product)" :disabled="product.stock === 0">{{ product.stock > 0 ? "Kosárba" : "Nincs készlet"}}</button>
        </div>
    </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';

const productsStore = useProductsStore();
const cartsStore = useCartStore();

const addToCart = (product) => {
    cartsStore.addToCart(product);
    productsStore.decreaseStock(product.id);
}
</script>