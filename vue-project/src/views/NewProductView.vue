<template>
    <div>
      <h1>Új Termék Hozzáadása</h1>
      <form @submit.prevent="addProduct">
        <div>
          <label for="name">Név: </label>
          <input id="name" v-model="name" placeholder="Név" required />
        </div>
        <div>
          <label for="price">Ár: </label>
          <input id="price" v-model.number="price" type="number" placeholder="Ár" required />
        </div>
        <div>
          <label for="stock">Raktárkészlet: </label>
          <input id="stock" v-model.number="stock" type="number" placeholder="Raktárkészlet" required />
        </div>
        <div>
          <label for="unit">Kiszerelés: </label>
          <input id="unit" v-model="unit" placeholder="Kiszerelés" required />
        </div>
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  </template>

<script setup>
    import { ref } from 'vue';
    import { useProductsStore } from '@/stores/products';

    const productsStore = useProductsStore();
    const name = ref('');
    const price = ref('');
    const stock = ref('');
    const unit = ref('');

    const addProduct = () => {
        productsStore.addProduct({ name : name.value, price : price.value, stock : stock.value, unit : unit.value});
        name.value = '';
        price.value = 0;
        stock.value = 0;
        unit.value = '';
    }
</script>