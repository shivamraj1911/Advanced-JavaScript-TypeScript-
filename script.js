script.js
 // ES6 + MASTERY(With Real Execution and Results)

 // let and const
let a = 10;
a = 20;
const b = 30;
//b=40; error
console.log(a);
 console.log(b);



 // Arrow Function

 const add =(x,y)=>x+y;
 console.log(add(15,25));


 //Template Literals

 let name = "Rahul";
 let age = 22;

 console.log(`My name is ${name} and age is ${age}`);


 //Destructuring(object Destructring)

 const student = {name:"Aman", marks:85};
 const{name, marks}=student;

 console.log(name,marks);


 // Array Destructuring

 const numbers = [10,20,30,40]
 const[x,y,z]=numbers;
 console.log(x,y,z);


 //Spread Operator

 const a1=[1,2,3];
 const a2=[...a1,4,5];
 console.log(a2);


 // Rest Operator

 function sum(...nums)
 {return nums.reduce((a,b)=>a+b);}

 console.log(sum(10,20,30,40,));


 // Class Example

 class person{
 constructor(name,age){
 this.name=name;
 this.age=age;
 }
 info(){
 return`${this.name} is ${this.age} years old`;
 }
 }

 const p1=new person("suraj",25);
 console.log(p1.info());


 // Promise & async/await

 function getNumber(){
 return new Promise(resolve =>{
 resolve(50);
 });
 }

 async function showResult() {
 const value = await getNumber();
 console.log(value*2);
 }

 showResult();


