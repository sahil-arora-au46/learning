<template>
  <h1>{{ count }}</h1>
  <!-- <ChildComponent @parentFunc = "increase" /> -->
  <LoginComponent @login="profile" v-show="onLogin" />
  <ProfileCmponent :user-name="userName" v-show="loginedFlag"/>
</template>

<script setup>
// import ChildComponent from './components/ChildComponent.vue';
import { ref, defineEmits } from 'vue';
import LoginComponent from "./components/LoginComponent.vue";
import ProfileCmponent from "./components/ProfileCmponent.vue"
let loginedFlag = ref(false);
let onLogin = ref(true)
let count = ref(0)
let userName =ref("")
// let increase = ()=>{
//   count.value++
// }
// let userArr = ['a','b','c']
// let emit = defineEmits(
//   {
//    login:({name})=>{
//     if(name === "a"||name="b"||name="c"){

//       return true
//     }
//     else{
//       // onLogin=false;
//       return false
//     }
//    }
// },
// )
let profile = (name) => {
  console.log(name)
  emit("login",{name})
  console.log("yaha se")
  if (name === "a"|"b"|"c") {
    loginedFlag.value = true
    onLogin.value=false;
    userName = name
    return true
  }
  else {
    
    return false
  }
  

  
}
const emit = defineEmits(["login"])
</script> 
