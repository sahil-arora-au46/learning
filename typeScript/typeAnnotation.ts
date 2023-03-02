// simple annotation on variables
let age : number = 28
// age type is number we can't assign string 
age = "28"
//error Type 'string' is not assignable to type 'number'
let isOnline : boolean = true;
// isOnline annotation is boolean
isOnline = "true"
//error Type 'string' is not assignable to type 'boolean'
// function parameters annotation 
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  greet("Maddison", Date());
//   as date() return string
//   error Argument of type 'string' is not 
//   assignable to parameter of type 'Date'

let userAge = "28"
// here TypeScript can even just infer (or “figure out”) 
// the types for us even if we omit them.
userAge = 28
//error Type 'number' is not assignable to type 'string'.
