<script setup>
import {ref} from 'vue'
const num = ref({count:0})
setInterval(() => {
    num.value.count++
}, (1000));


</script>
<template>
<h1>{{ num }}</h1>
</template>
<style scoped>

</style>