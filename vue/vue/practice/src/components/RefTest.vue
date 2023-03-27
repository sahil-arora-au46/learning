<script setup>
import {ref} from 'vue'
const num = ref(0)
setInterval(() => {
    num.value++
}, (1000));
let isactive = true
// let cl = ref("red")
</script>
<template>
<h1 v-bind:class="{active : isactive}" @click="isactive= false">{{ num}},hi from RefTest</h1>
</template>
<style scoped>
/* h1{
    background-color:red;
} */
.active{
    background-color: red;
}

</style>