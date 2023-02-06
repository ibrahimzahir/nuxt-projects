<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="(product) in products"  :key="product.title">
                <NuxtLink>{{product.title}} </NuxtLink>
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