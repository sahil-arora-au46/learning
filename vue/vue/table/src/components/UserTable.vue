<template>
<table>
    <tr>
        <th v-for="(value,key) in user[0]" :key="key">{{ key}}</th>
    </tr>
    <tr v-for="ele in user" :key="ele">
        <td v-for="value in ele" :key="value">{{ value }}</td>
    </tr>
</table>
</template>
<script setup>
import {reactive} from "vue";
let user = reactive([{
  "id": 1,
  "first_name": "Jonathan",
  "last_name": "McOwen",
  "email": "jmcowen0@tiny.cc",
  "gender": "Male",
  "ip_address": "37.29.134.21",
  "new_key1": "186.92.83.161",
  "new_key2": "209.240.114.216",
  "new_key3": "243.92.190.148",
  "new_key4": "29.95.51.102"
}, {
  "id": 2,
  "first_name": "Ned",
  "last_name": "Caro",
  "email": "ncaro1@cbc.ca",
  "gender": "Polygender",
  "ip_address": "103.134.210.247",
  "new_key1": "119.68.242.141",
  "new_key2": "174.147.106.116",
  "new_key3": "145.121.194.74",
  "new_key4": "45.49.31.53"
}, {
  "id": 3,
  "first_name": "Nedi",
  "last_name": "Bryers",
  "email": "nbryers2@tuttocitta.it",
  "gender": "Female",
  "ip_address": "142.149.214.184",
  "new_key1": "121.114.171.36",
  "new_key2": "63.105.42.208",
  "new_key3": "169.112.159.46",
  "new_key4": "60.187.47.226"
}, {
  "id": 4,
  "first_name": "Karil",
  "last_name": "Shaylor",
  "email": "kshaylor3@apache.org",
  "gender": "Female",
  "ip_address": "107.158.70.101",
  "new_key1": "26.236.103.123",
  "new_key2": "65.117.215.126",
  "new_key3": "127.226.126.147",
  "new_key4": "177.15.91.177"
}, {
  "id": 5,
  "first_name": "Michaella",
  "last_name": "Rumbold",
  "email": "mrumbold4@cpanel.net",
  "gender": "Female",
  "ip_address": "142.131.186.1",
  "new_key1": "178.43.3.22",
  "new_key2": "184.2.105.120",
  "new_key3": "123.60.120.150",
  "new_key4": "2.225.64.67"
}, {
  "id": 6,
  "first_name": "Alden",
  "last_name": "Britland",
  "email": "abritland5@theatlantic.com",
  "gender": "Male",
  "ip_address": "2.75.107.62",
  "new_key1": "185.102.41.192",
  "new_key2": "13.33.146.4",
  "new_key3": "149.86.20.155",
  "new_key4": "11.185.243.108"
}, {
  "id": 7,
  "first_name": "Phil",
  "last_name": "Bette",
  "email": "pbette6@taobao.com",
  "gender": "Male",
  "ip_address": "114.14.23.91",
  "new_key1": "90.213.210.209",
  "new_key2": "127.12.9.72",
  "new_key3": "122.254.244.109",
  "new_key4": "79.41.192.228"
}, {
  "id": 8,
  "first_name": "Kimball",
  "last_name": "Babbe",
  "email": "kbabbe7@xinhuanet.com",
  "gender": "Male",
  "ip_address": "47.218.13.105",
  "new_key1": "226.3.146.127",
  "new_key2": "165.163.229.90",
  "new_key3": "164.247.82.184",
  "new_key4": "99.82.151.212"
}, {
  "id": 9,
  "first_name": "Verna",
  "last_name": "Francey",
  "email": "vfrancey8@typepad.com",
  "gender": "Genderfluid",
  "ip_address": "197.138.250.239",
  "new_key1": "129.248.159.78",
  "new_key2": "48.250.160.59",
  "new_key3": "55.125.54.190",
  "new_key4": "69.167.210.117"
}, {
  "id": 10,
  "first_name": "Valentino",
  "last_name": "Carletto",
  "email": "vcarletto9@facebook.com",
  "gender": "Male",
  "ip_address": "100.32.185.23",
  "new_key1": "155.10.105.57",
  "new_key2": "243.82.145.190",
  "new_key3": "229.29.4.177",
  "new_key4": "241.63.218.152"
}]
)
</script>
<style scoped>
th{
    border: 1px solid;
    margin-left: 3px;
    
}
td{
    border:1px solid black;
    
}
table{
    border:1px solid;
    border-collapse: collapse;
}
</style>