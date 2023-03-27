<template>
    <div @click.stop="print('hi from top',$event)">
    <SecondEle />
    </div>
    </template>
    <script setup>
    import SecondEle from "./SecondEle.vue";
    let print = (msg)=>{
        console.log(msg)
    }
    </script>
    <style scoped>
    div{
        width: 300px;
        height: 300px;
        border:1px solid black;
        /* background-color: black; */
        position:relative;
    }
    </style>