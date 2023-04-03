<template>
<!-- <OnMounted />
<h1>{{ parentChange }}</h1>
<button @click="parentChange='parent Changed'">parent button</button> -->
<!--props-->
<!-- <Props foo="first prop"/>
<Props foo=" second prop"/> -->
<!--this will pass as string not as number-->
<!-- <props foo="34" />  -->
<!--type is string not boolean-->
<!-- <props foo="true" /> -->
<!-- to pass number/boolean/array/object  in static type also  we use v-bind to tell vue that it is a js expression -->
<!--type is number not string-->
<!-- <props :foo="34" />  -->
<!--type is string not boolean-->
<!-- <props :foo="true" /> -->
<!--pass html-->
<!--we need  plugin to pass html-->
<!-- <props :foo="<h1> pass html</h1>" error /> --> 
<!-- v-bind also use to pass dynamic data -->
<!-- Dynamically assign to the value of a variable. -->
<!-- <BlogPost :likes="post.likes" /> -->
<!-- <props :foo="{dynamic:'passing dynamic key'}.dynamic"/> -->
<!--pass object to check class validation-->
<Props :testObj="'sahil'" />
</template>

<script setup>
// import OnMounted from "./components/OnMounted.vue"
// import { onUpdated,ref } from "vue";
// let parentChange =ref("parent ")
// onUpdated(()=>{
//   console.log("parent update")
// })
// props
import Props from "./components/PropsTest.vue"


</script>
