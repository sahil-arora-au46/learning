<template>
<div :id="wrap" @mousemove ="coordinate" ><h2 >{{ name }}</h2></div>

</template>

<script>




export default {
  name: 'App',
  data() {
    return{
     name :"sahil"

    }
  },
  methods: {
    coordinate(event){
      let coord = `X- coord -${event.pageX},Y-coordinat ${event.pageY}`
      this.name = coord
      
    }
  }
}
</script>
<style>
div{
  background-color: #807575;
  height: 700px;
}
</style>

