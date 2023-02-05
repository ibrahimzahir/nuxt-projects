<template>
    <header class="shadow-sm bg-white">
       <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/products" class="font-bold">Nust joho</NuxtLink>
       </nav>
    </header>
    <div>
        <slot />
    </div>
    <footer>
        <ul class="flex gap-4">
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
                
            </li>
            <li>
                <NuxtLink to="/products">Products</NuxtLink>
            </li>
        </ul>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>
