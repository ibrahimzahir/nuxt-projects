<template>
    <div>
        <p>{{id}}</p>
    </div>
</template>

<script setup>
const {id} = useRoute().params

definePageMeta({
        layout: 'products'
    }) 
</script>
