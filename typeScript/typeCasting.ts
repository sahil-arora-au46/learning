const myValue: any = "hello world";
const strLength: number = (myValue as string).length;// changed type any to string
// const strLength: number = (<string>myValue).length; //Casting with <>
console.log(strLength); // outputs 11


let input = document.querySelector('input["type="text"]') ;
console.log(input.value); // error:Property 'value' does not exist on type 'Element'
//as in above input: Element | null ,Property 'value' does not exist on type 'Element'
let input1 = document.querySelector('input["type="text"]') as HTMLInputElement; // as HTMLInputElement specifying type by type casting 

console.log(input1.value); 
// second way 

console.log((input1 as HTMLInputElement).value)


interface User {
    name : string;
    email:string;
    gender : "Male"|"Female"|"Trans";
}

interface UserData extends User {
    age:number;
    add : string 
}

interface Employee extends UserData {
 salary : string
}

let user:UserData = {
    name : "username",
    email:"u@u.com",
    gender: "Male",
    age:78,
    add: "delhi"

}
// let tempUser = user as Employee

let tempUser = <Employee>user //Casting with <>




type testStructure  {
name: "string";
age:number
}
let user : testStructure = {
    n : ""
}