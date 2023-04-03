<template>
<!-- <input :value="modelValue" 
@input="$emit('update:modelValue',$event.target.value)" 
/> -->
<input :value="fName" 
@input="$emit('update:fName',$event.target.value)" />
<input :value="lName" 
@input="$emit('update:lName',$event.target.value)" />
</template>
<script setup>
import { defineProps,defineEmits } from 'vue';
// defineProps(["modelValue"]);
// defineEmits(["update:modelValue"])
defineProps(["fName","lName"]);
defineEmits(["update:fName","update:lName"]);
</script>