<template>
 <pre>
  {{ JSON.stringify(formValue,nul,2) }}
 </pre>
<form>
  <label >I am looking for..:</label> <br/>
  <input type="checkbox" id="math" value="Maths Classes" v-model="formValue.requirement" >
  <label for="math">Maths Classes</label>
  <input type="checkbox" id="chemistry" value="Chemistry Classes" v-model="formValue.requirement">
  <label for="chemistry">Chemistry Classes</label>
  <input type="checkbox" id="physics" value="Physics Classes" v-model="formValue.requirement">
  <label for="physics">Physics Classes"</label>
  <input type="checkbox" id="english" value="English Classes" v-model="formValue.requirement">
  <label for="english">English Classes</label>
</form>
</template>
<script>


export default{
  name : 'App',
  data(){
  return {
    formValue:{
      requirement:[]
    }
  }
  }
}
</script>