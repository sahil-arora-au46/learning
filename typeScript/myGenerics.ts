
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
<<<<<<< HEAD
    }
=======
    }

    // generic classes 
    class GenericNumber<NumType> {
      zeroValue: NumType;
      add: (x: NumType, y: NumType) => NumType;
    }
    let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// generic linkedlist class 
interface Node<T> {
  data: T;
  next: Node<T> | null;
}

class LinkedList<T> {
  private head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  add(data: T): void {
    const newNode = { data, next: null };
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove(data: T): void {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  size(): number {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}
>>>>>>> generic done
