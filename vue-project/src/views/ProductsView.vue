<template>
    <div>
        <h1>Products</h1>
        
            <div v-for="product in productsStore.products"
            :key="product.id">
                
            <p>{{ product.name }} - {{ product.price }} Ft ({{ product.unit }})</p>
            
            <p>Készlet: {{ product.stock }}</p>
            
            <button :disabled="product.stock === 0">{{ product.stock > 0 ? "Kosárba" : "Nincs készlet"}}</button>
        </div>
    </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();
</script>