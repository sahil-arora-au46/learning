<template>
<!-- <CustomInput v-model="msg" /> -->

<!-- <CustomInput v-model:fName="firstName" v-model:lName="lastName" /> {{ firstName}} ,{{ lastName }}  -->
<customModifier v-model.capitalize ="input" />
</template>
<script setup>
// import CustomInput from './components/VModelCompo.vue';
import customModifier from './components/ModelModifiers.vue'
import {ref} from 'vue';
let input = ref("")
// let firstName = ref("harsh");
// let lastName = ref("kumar")
</script>
