<template>
<input type ="test" :value="modelValue"
 @input="emitEvent" />
</template>
<script setup>
import { defineProps,defineEmits} from 'vue';
let props = defineProps({
modelValue : String,
modelModifiers:{
    default:()=>({})
}
});
const emit = defineEmits(['update:modelValue','modelModifiers'])

function emitEvent(event){
let value = event.target.value;
if(props.modelModifiers.capitalize){
    value = value.charAt(0).toUpperCase() + value.slice(1)
}
emit('update:modelValue',value)
}
</script>