<template>

<form @submit.prevent="clicked">
<label for="name">Name:</label><br>
<input type="text" id="name" v-model="name">
<button  type="submit ">submit</button>
</form>
<h1>{{ name }}</h1>
</template>
<script setup>
import {ref,defineEmits} from 'vue';
let name =ref('')
let emit = defineEmits(['login']);

function clicked(){
  emit('login',name.value) ;
    console.log("child")
}

</script>
<style scoped>

</style>