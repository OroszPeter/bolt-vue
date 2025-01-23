<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

      <nav>
        <RouterLink to="/">Termékek</RouterLink> |
        <RouterLink to="/new-product">Új termék</RouterLink> |
        <RouterLink to="/cart">Kosár</RouterLink> |
      </nav>

  <RouterView />
</template>

<style scoped>

</style>
