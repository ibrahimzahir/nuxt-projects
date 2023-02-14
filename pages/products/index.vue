<template>
    <div class="container mx-auto p-4 flex justify-between">
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products"  :key="product.title">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>

const { data: products } = await useFetch('https://fakestoreapi.com/products')

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>
</style>