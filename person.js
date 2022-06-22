//person detail
class Detail{
    constructor(name,age,gender){ 
        this.name=name;
        this.gender=gender
        this.age=age;
    }
    person(){
        console.log(`name:${this.name}`)
        console.log(`gender:${this.gender}`)
        console.log(`age:${this.age}`)
       }
}
class Person extends Detail{
    // constructor(name,age,gender){
    // super(name,age,gender)
    // }

    constructor(name,age,gender,password){
        super(name,age,gender)
        this.password=password
    }
    person(){
        console.log(`name:${this.name}`)
        console.log(`gender:${this.gender}`)
        console.log(`age:${this.age}`)
        console.log(`password:${this.password}`)

       }
    
    }
class Password extends Detail{
    
}
let password= Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);
let arr=[{name:"Abc",age:"12",gender:"female",password},{name:"Abc",age:"12",gender:"female","password":password}]
let map=new Map()
//let personDetail=new Person(arr)
arr.forEach((ele,index)=> map.set(index,new Person(ele.name,ele.age,ele.gender,ele.password)))
//console.log(person)
console.log(map)