//Object.getPrototypeOf() returns the prototype of an object.
console.log(Object.getPrototypeOf([])===Array.prototype)

// Object.create 

//You can use Object.create to create an object with a specific prototype.


let list = {

_taskList :[], // private property, to make private use suffix _

add: function (task)  {
 return this._taskList.push(task)
},
remove: function (){
    return this._taskList.shift();
},
totalTasks(line){
    console.log( `In ${this.type} you have ${this._taskList.length}`)
}

}

let todoList = Object.create(list)
todoList.type = "Todolist";
todoList.add("read about classes ")
todoList.totalTasks()
let wishList = Object.create(list)
wishList.type = "wishList"