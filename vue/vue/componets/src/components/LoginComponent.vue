<template>

<form @submit.prevent="$emit('login',name)">
<label for="name">Name:</label><br>
<input type="text" id="name" v-model="name">
<button type="submit">submit</button>
</form>
</template>
<script setup>
import {ref} from 'vue';
let name =ref('')

</script>
<style scoped>

</style>