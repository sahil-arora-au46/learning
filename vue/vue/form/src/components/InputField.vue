<template>
<form @submit.prevent>
<label for= " name">Name:</label>
<input type="text" id="name" v-model.trim="formData.name" maxlength="40"><span style="margin-left: 5px;">{{ formData.name.length }}/40</span><br><br><br>
<label for="email" maxLength="50">E-mail:</label>
<input type="text" id="email" placeholder="Enter your E-mail.." v-model="formData.eMail"><span style="margin-left: 5px;">{{ formData.eMail.length }}/50</span><br><br><br>
<label > Want to learn :-</label> <br><br>
<input type="checkbox" value="Java" v-model="formData.courses"> Java
<input type="checkbox" value="JavaScript" v-model="formData.courses"> JavaSript
<input type="checkbox" value="Pyython" v-model="formData.courses"> Python
<input type="checkbox" value="Ruby" v-model="formData.courses"> Ruby<br><br>



<br><br>
<label for="msg">Why You Want To Learn :-</label><br>
<textarea  id="msg" cols="30" rows="10" maxlength="300" v-model="formData.message"></textarea>
<span>{{ formData.message.length }}/300</span><br>
<button @click="sub">Submit</button>
</form>

<h1>{{ formData }}</h1>
</template>
<script setup>
import {reactive} from 'vue'
let formData = reactive({
  name:"",
  eMail:"",
  courses:[],
  message:""
})
let sub = ()=>{
    console.log(formData)
}

</script>
<style scoped>
input[type="checkbox"]{

}
</style>