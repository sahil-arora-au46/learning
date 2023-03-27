<template>
    <div @click.stop="print('hi from inner most',$event)">
    
    </div>
    </template>
    <script setup>
    let print = (msg)=>{
        console.log(msg)
    }
    </script>
    <style scoped>
    div{
        width: 150px;
        height: 150px;
        background-color: rgb(241, 235, 235);
        position:absolute;
    }
    </style>