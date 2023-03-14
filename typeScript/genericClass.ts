class Container<T,U>{
    name:T;
    age:U;
    mobile:U
    constructor(...arg:[T,U,U]){
        this.name = arg[0] as T;
        this.age  = arg[1] as U;
        this.mobile = arg[2] as U
    }
}
let user = new Container<string,number>("sahil",23,4566)