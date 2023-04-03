<template>
<h1>{{ testObj }}</h1>
</template>
<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    testObj:String
})
// props.testObj = { lastName:"sharma"}
// props.testObj.firstNmae = "umar"
// props.testObj = 'shiv'

console.log(props.testObj)
</script>

<style scoped>

</style>