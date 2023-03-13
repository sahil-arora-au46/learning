
function compute<T>(a:T,b:T):T{
    if(typeof a ==="string"&& typeof b === "string") {
        return a+b as T;
    }
    if(typeof a ==="number"&& typeof b === "number") {
        return a+b as T;
    }
    return a
  }

  let num = compute<number>(3,5)// generic interface

//   interface MyFn<Type> {
//     (arg: Type): Type;
//   }
  
//   function genIntFn(arg: number): number {
//     return arg;
//   }
  
//   let myFn: MyFn<number> = genIntFn;
  
//   console.log(myFn(42)); 

//   interface MyFn<Type> {
//     (arg: Type): Type;
//   }
  
//   let myFn: MyFn<number> = function(arg: number): number {
//     return arg;
//   };
  
//   console.log(myFn(42)); 
interface MyFn<Type1, Type2> {
    (arg1: Type1, arg2: Type2): Type2;
  }
  
  let myFn: MyFn<number, string> = function(arg1: number, arg2: string): string {
    let result 
    return result as typeof arg2 
  };
  
  console.log(myFn(42, 'hello'));
  function twoSum(arr:number[],target:number):number[]{

    const res :number[] = []
    for(let j=0;j<arr.length;j++){
        for(let w=j+1;w<arr.length;w++){
           
            if((arr[j]+arr[w])===target){
                res.push(j,w)
                break;
            }
        }
    
    }
    return res
    }