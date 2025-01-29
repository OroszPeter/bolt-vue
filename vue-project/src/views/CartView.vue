<template>
    <div>
      <h1>Kosár</h1>
      <table>
        <thead>
          <tr>
            <th>Termék</th>
            <th>Egységár</th>
            <th>Mennyiség</th>
            <th>Összeg</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cart" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price }} Ft</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price * item.quantity }} Ft</td>
          </tr>
        </tbody>
      </table>
      <p>Végösszeg: {{ cartStore.total }} Ft</p>
      <button @click="clearCart">Kosár Kiürítése</button>
    </div>
  </template>
  
  <script setup>
    import { useCartStore } from '@/stores/cart';
    const cartStore = useCartStore();
    const clearCart = cartStore.clearCart;
  </script>