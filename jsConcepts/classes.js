// JavaScript classes are constructor functions with a prototype property. That
// is how they work, and until 2015, that was how you had to write them.
class Rabbit {
    constructor(type) {
    this.type = type;
    }
    speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    }
    }
    let killerRabbit = new Rabbit("killer");
    let blackRabbit = new Rabbit("black");
class Student{
    constructor(name,exam){
        this.name = name,
        this.exam = exam
    }

}
// private property
class Student{
    #exam;
    constructor(name,exam){
        this.name = name,
        this.#exam = exam// private property
    }
}
class Student {
    #exam;
     constructor(name, exam) {
       this.name = name;
       this.#exam = exam; // private variable
     }
     
     get exam() {
       return this._exam;
     }
     
     set exam(newExam) {
       this._exam = newExam;
     }
   }
   
   let stu = new Student("sahil", "ssc");
   console.log(stu);//{name:"sahil"}
//    ------------------tricky que----------------------
let ages = {
};
console.log( "valueOf" in ages); // output is true 
// as value exits in prototype of object that why and prototype is itself a object 