//  let animal = {
//      type: "cat",
//      name: "Meh",
//      speed: 2,

//  }

// let keys=[]

// let newName = prompt("Enter new name")

//  function changeName(name) {
//      let prevName = animal.name
//      animal.name = name
     
//      console.log("Previous name: "+prevName+"\nNew name: "+name)
//  }
// function stats(object) {
//     for(let key in object){
//         keys.push(key+": "+object[key])
//         string = keys.join("\n")
        
//     }
//     console.log("Stats\n"+string)
// }

// function howFar(object) {
//     let length = Math.ceil(1000/(object.speed * 12))
//     console.log("Днів щоб подолати 1000км: "+length)
// }

// let obj ={
//     x: 24,
//     y:20
// }

// const area = (object) => object.x*object.y;

// const par = (object) => (object.x*2) + (object.y*2);

// const tit = (object, title) => object["name"] = title;

// const addThree = (object, z) => object["z"] = parseInt(z);

// const convert = (object) =>{ object.x= object.x/100, object.y = object.y/100;}


// convert(obj)

// console.log(area(obj))
// console.log(par(obj))
// console.log(tit(obj,"ob"))
// console.log(addThree(obj, 30))
// console.log("converted")
// console.log(obj)



//TASK 3

// let balance = 500;
// let myCart={}

// let storage = {

//     tomato: {
  
//       count: 5,
//       price: 50,
//       buy: true,
//       outOfstore: true
  
//     },
//     potato: {
  
//         count: 5,
//         price: 20,
//         buy: true,
//         outOfstore: true
    
//     },
//     apple: {
  
//         count: 5,
//         price: 60,
//         buy: true,
//         outOfstore: false
    
//     },
//     peach: {
    
//           count: 5,
//           price: 20,
//           buy: true,
//           outOfstore: false
      
//     },
//     beans: {
    
//         count: 5,
//         price: 13,
//         buy: true,
//         outOfstore: true
    
//     }
  
//   }

// function supply(store) {
//     let inStock =[]
//     let outOfStock=[]
    
//     for(i in store){
//         if (store[i].outOfstore==true) {
//             outOfStock.push(i)
//         }else{
//             inStock.push(i)
//         }
//     }
//     let stirngO = outOfStock.join("\n")
//     let stringI = inStock.join("\n")
//     let result = "In stock:\n"+stringI+"\nOut of stock:\n"+stirngO
//     return result
// }

// const cart = (cart) => cart

// function buy(storage, item) {
//     for(i in storage){
//         if(storage[i].count>0){
//             if(i==item){
//                 storage[i].count--
                
//                 if(myCart[item]>=1){
//                     myCart[item]++
//                 }else{
//                     myCart[item]=1
//                 }


//             }
//         }else{
//             console.log("Not enough items in stock.")
//         }
//     }
//     return 

// }

// const fill = (stor, item, amount) => stor[item].count += amount;

// const dep = (stor, item, amount) => stor[item].count > 0  && stor[item].count> amount ? stor[item].count -= amount: "Not enough in storage";


// function purch(list, par) {
//     for (let i in list){
//         f = 0;
        
//         f += list[i]*par[i].price;
//         console.log(f)

//     }
//     return (balance-f)>=0? balance-f : "Not enough money";
    
// }


// console.log(supply(storage))
// console.log(cart(myCart))
// console.log(buy(storage, "tomato"))
// console.log(fill(storage, "tomato", 3))
// console.log(dep(storage, "tomato", 3))
// console.log(storage)
// console.log(cart(myCart))
// console.log(purch(myCart, storage))



// Task 4

let col =  [{name: "Yura", age: 35, hobby: ["films", "games", "hiking"], type: "Admin"}, {name: "John", age: 55, hobby: ["films", "games", "hiking"], type: "user"},{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "user"}]

function admin(list) {
    let adm =[]
    for(let i =0; i<list.length;i++){
        if(list[i].type=="Admin"){
            adm.push(list[i].name)
        }
    }
    return adm
}

function avgAge(userList) {
    let ag =0
    for(let i =0; i<userList.length;i++){
        ag += userList[i].age
    }
    return Math.floor((ag/userList.length)*100)/100
}

function getHobby(userlist) {
    const aHobby =[];
    userlist.map(({hobby})=>{
        aHobby.push(...hobby);
    });
    return aHobby
}


function uniqueHobby(userList) {
    const hobbyList = getHobby(userList);
    const unique = {}
    for(let i=0; i<hobbyList.length;i++){
        unique[hobbyList[i]] = unique.hasOwnProperty(hobbyList[i]) ? unique[hobbyList[i]]+1: 1;
    }
    return "Unique hobbies:  "+Object.keys(unique).join(", ")
}




console.log(admin(col))
console.log(avgAge(col))
console.log(getHobby(col))
console.log(uniqueHobby(col))