<template >
<!-- <h1 v-for="(ele,i) in users" :key="i">{{ i}} {{ ele }}</h1> -->
<!-- <li v-for="item in col" :key="item">
  {{ item }}
</li> -->
<!-- <li v-for="{ message } in items" :key="message">
  {{ message }}
</li> -->
<!-- can use of instead of in.of will wok same-->
<!-- <li v-for="{ message } of items" :key="message">
  {{ message }}
</li> -->
<!-- iterating object using v-for-->
<!-- <ul>
  <li v-for="value in myObject" :key="value">
    {{ value }}                
</ul> -->
<!-- <p v-for="n in {k:'value'}" :key="n">{{ n }}</p> -->
<ul v-for="numbers in sets" :key="numbers">
  <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
</ul>
</template>
<script setup>
import {ref} from "vue"
const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
// let arr = new Array(20)
// let users = ['a','b','c','d','e','f']
// const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
// let col = Object.keys(items.value[0])
// console.log(col)
// const myObject = reactive({
//   title: 'How to do lists in Vue',
//   author: 'Jane Doe',
//   publishedAt: '2016-04-10'
// })
</script>