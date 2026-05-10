/*let isActive: Boolean =  true;
let decimal : Number = 213.43
let num1 :Number=23;
let color : string = "Blue"
let Fullname : string ="Sonali Khandare"

console.log (Fullname)*/

/*array
let fruits : string[] = ["apple", "pineapple", "banana"]
let quantity : number[]= [1, 2,3]

let response:any = true
let apiresponse :unknown =wrfd""

function add(num1:number, num2:number){return num1+num2}
console.log (add (2,4))*/
/*Objects
let user : { name: string, state: string, age: number ,isHungry: boolean}={
    name :"Sonali",
    state : "Pune",
    age:30,
    isHungry: true
}


let user : { name: string, state: string, age: number ,isHungry?: boolean}={
    name :"Sonali",
    state : "Pune",
    age:30,
    isHungry: true
}*/


/* type:*/

function getregtanglearea(lenght?:number,width?:number): number 
{
    if (length===undefined ||lenght ===null) length =10
    if (width === undefined ||width ===null) width =10
        return length*width

}
type APIresponse = undefined |{status:number, message:string}

function getAPIresponse() :APIresponse{
    return {status:200, message: " success"}

}
let loginapiresponse =APIresponse = getAPIresponse


interface  user {
 name :string,
    state : string,
    age:number,
    isHungry: boolean 
}

interface adminuser extends  user{
    doeshaveaccess : boolean
}

let User:user={
    name :" Sonali",
    state : "Pune",
    age:30,
    isHungry: true
}

let Newuser: adminuser={

 name :"Sonali",
    state : "Pune",
    age:30,
    isHungry: true

}