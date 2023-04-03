<template>

<h2> calling function beforemount {{ beforeMount() }}</h2>
<h1> the component is {{ compo }} </h1>
<button @click="compo=' Mounted'">Change</button>


</template>
<script setup>
import { onMounted ,ref,onUpdated} from "vue";
let compo = ref("not mounted ");
onMounted(()=>{
   
console.log("component is Mounted")
})


onUpdated(()=>{
    console.log("childupdated")
})

let beforeMount = ()=>{
    console.log("beforemount")
}


</script>