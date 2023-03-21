<template>
<table>
  <tr>
    <th v-for="name in names" v-bind:key="name"></th>
  </tr>
  <tr v-for="name in names" v-bind:key="name">
    <td v-for="name in names" v-bind:key="name" v-text="name"></td>
  </tr>
</table>
</template>

<script>


export default {
  name: 'App',
  data() {
    return{
     names:['a','b','c','d']
     
    }
  }
}
</script>


