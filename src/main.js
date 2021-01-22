import './css/index.css'

import './css/index.scss'

//import 'bootstrap/dist/css/bootstrap.css'


class Person {

    static info ={score:'12'}
    
    constructor(name,age){
        this.name = name
        this.age = age
    }

    who(){
        return this.name
    }
}

var person = new Person("john",12)

console.log(person.who());