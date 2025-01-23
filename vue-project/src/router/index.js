import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import NewProductView from '../views/NewProductView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'products', component: ProductsView},
    {path: '/new-product', name: 'newProduct', component: NewProductView},
    {path: '/cart', name: 'cart', component: CartView}
  ],
})

export default router
