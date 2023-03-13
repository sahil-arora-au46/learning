// for creating simple objects
// function ConstructorFunctionName(parameter1, parameter2, ...) {
//     this.property1 = parameter1;
//     this.property2 = parameter2;
//     // ...
//   }
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");
// function Coordinates(x,y){
//     this.x = x
//     this.y = y
// }

// let pt1 = new Coordinates(2,3)
//  console.log(pt1)//{x:2,y:3}
 function Coordinates(x,y){
    this.x = x
    let _y = y // private 
    this.getY = ()=>{
    return _y
    }
    this.setY =(newY)=>{
        _y = newY
        return _y
    }
    
}
let pt1 = new Coordinates(2,3)
console.log(pt1)//{x:2}
console.log(pt1.getY()) // 3
pt1.setY(9)
console.log(pt1.getY())//9



function Student(_name,_class){
this.name = _name
this.class = _class
}
