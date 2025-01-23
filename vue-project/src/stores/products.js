import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
    const products = ref([
        {id: 1, name: 'Alma', price: 500, stock: 10, unit: "db" },
        {id: 2, name: 'Tojás', price: 200, stock: 5, unit: "doboz" },
        {id: 3, name: 'Liszt', price: 300, stock: 0, unit: "zacskó" }
    ])

    const addProduct = (product) => {
        product.id = products.value.length + 1;
        products.value.push(product);
    }

    const decreaseStock = (productid) => {
        const product = products.value.find((p) => p.id === productid);
        if (product && product.stock > 0) {
            product.stock--;
        }
    }
    return { products, addProduct, decreaseStock };
})