<template>
<button @click="show =!show">
    hi from button
</button>
<AsyncComp v-if="show"  />
</template>
<script setup>
import { defineAsyncComponent, ref } from 'vue';
let show = ref(false);
const AsyncComp = defineAsyncComponent(() => 
import('./AsyncComp.vue'))
</script>
<style scoped></style>