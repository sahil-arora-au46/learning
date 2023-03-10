function print(val:null|string|number[]):void{
    if(typeof val ==="object"){
        console.log(`val is ${typeof val}`)
    }
    else if(typeof val ==="string"){
        console.log(`val is ${typeof val}`)
    }
    else{
        console.log(`val is ${typeof val}`)
    }

}
print("user")// val is string

print(null)// val is object as typeof null is also object 
print([2,3,4])//val is object
//type guard for null
function print(val:null|string|number[]):void{
    if(val && typeof val ==="object"){//narrowed doen to number[]
        console.log(`val is ${typeof val}`)
    }
    else if(val &&typeof val ==="string"){ //narrowed doen to string 
        console.log(`val is ${typeof val}`)
    }
    else{
        console.log(`val is ${typeof val} , ${val}`)// no type guard for null
    }

}
print("user")// val is string

print(null)//val is object , null
print([2,3,4]) //val is object 
// #Equality narrowing
function print(val:null|string|number[]):void{
   if(val){// put wraper for null type gurad 
    if( typeof val ==="object"){//narrowed down to number[]
        console.log(`val is ${typeof val}`)
    }
    else if(typeof val ==="string"){ //narrowed doen to string 
        console.log(`val is ${typeof val}`)
    }
    else{
        console.log(`val is ${typeof val} , ${val}`)// no type guard for null
    }
   }
}
// #in narrowing

// we can narrow down by checking if the key is in obj 
interface Square{
    kind : "square";
    sideLength : number
}
interface Rectangle{
    kind: "rectangle";
    width:number;
    height:number
}

type shape = Square|Rectangle

function area(shape:shape):number{
if("sideLength" in shape){
    return shape.sideLength* shape.sideLength
}else return shape.width*shape.height
}
//#instanceof narrowing 
// instanceof checks wether a obj is made from a class or  is a instance of any given class

class Rectangle {
    
    constructor(length, width){
        this.length = length,
        this.width = width

    }
    area():number{
        return this.length*this.width
    }
}
class Square {
    sideLength: number
    constructor(sideLength:){
    this.sideLength = sideLength
    }
    area():number{
        return this.sideLength*this.sideLength
    }
}
class Rec{

    constructor(length:number,width:number){
        length
        width
    }
}



let rec = new Rectangle(22,33)
let sq = new Square(22)
let rec2 = new Rec(11,22)
function shapeArea(shape:Rectangle|Square):number{
if(shape instanceof Rectangle){// checking if shape is a instance of Rectangle or not 
    return shape.area()
}else return shape.area()
}
console.log(shapeArea(sq))
















