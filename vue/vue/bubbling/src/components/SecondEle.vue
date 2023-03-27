<template>
    <div @click.stop="print('hi from middle',$event)">
    <FristEle />
    </div>
    </template>
    <script setup>
    import FristEle from "./FirstEle.vue";
    let print = (msg)=>{
        console.log(msg)
    }
    </script>
    <style scoped>
    div{
        width: 200px;
        height: 200px;
        border:1px solid black;
        /* background-color: #6d3d3d; */
        position: absolute;
        top: 50px;
    }
    </style>