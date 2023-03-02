// simple annotation on variables
let age : number = 28
// age type is number we can't assign string 
age = "28"
//error Type 'string' is not assignable to type 'number'
let isOnline : boolean = true;
// isOnline annotation is boolean
isOnline = "true"
//error Type 'string' is not assignable to type 'boolean'


let userAge = "28"
// here TypeScript can even just infer (or “figure out”) 
// the types for us even if we omit them.
userAge = 28
//error Type 'number' is not assignable to type 'string'.
// annotate array with specifictype
let numbers: number[] = [2,3,5,9] 
// above array can only contain number
numbers = [67,56,43] //no error as all elements of array are numbers
numbers = [98,34,67,"67"]
//error Type 'string' is not assignable to type 'number'
let names: string[]= ["palash","neeraj","adnaan"]
names = ["riya","piyush","divya"] //no error as all elements of array are strings
names = [98,"sneha"]
// error Type 'number' is not assignable to type 'string'
let isLoggedIn :boolean[] = [true,false]
isLoggedIn = ["true","false"]//Type 'string' is not assignable to type 'boolean'
let data : any[] = [83,"string",false]
data = [2,3,4]
data = ["str1","str2","str3"]
data = [true,false]
// here there is no error as it of any type
// for more read notes
// function parameters annotation 
function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  greet("Maddison", Date());
//   as date() return string
//   error Argument of type 'string' is not 
//   assignable to parameter of type 'Date'
//function return type annotation
//function fnName(params):return type{}
function add(x:number,y:number):number{
  return x+y 
}
//no error 
//as x+y is always be  number,x and y also of type number
function addnum(x:number,y:number):number{
  return ""
}
// error Type 'string' is not assignable to type 'number'
// as return type is number