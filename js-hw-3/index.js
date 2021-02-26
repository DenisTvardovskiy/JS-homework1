//Завдання 1 

// let sum =0;
// for(let i=1;i<101;i++){
//     sum+=i
// }
// alert(sum)

//Завдання 2

// let arr = [1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//Завдання 3

// let arr = [-1,22,3,44,5]
// let max = Math.max(arr)
// 

// console.log(max)

// Завдання 4

// let nums = []
// let negative = 0
// let positive = 0
// let zero =0
// for(let i=0;i<8;i++){
//     let num = prompt("("+i+"/8)")
//     if(num ==0){
//         zero++;
//     }else if(num<0){
//         negative++;
//     }else if(num>0){
//         positive++;
//     }
//     nums.push(num)
// }



// alert("Numbers: "+nums+"\nPositive: "+positive+"\nNegative: "+negative+"\nZeros: "+zero)

// Завдання 5

// const NUM = 8;

// for(let i=1;i<10;i++){
//     console.log("8 * "+i+" = "+(NUM*i))
// }

//Завдання 6
// let arr = [2,5,9,15,0,4]
// for(let i=0; i<arr.length;i++){
//     if(arr[i]>3 && arr[i]<10){
//         console.log(arr[i])
//     }
// }

//Завданя 7

// let result
// while(true){
//     let x = prompt("Enter first number")
//     let y = prompt("Enter second number")
//     let action = prompt("action\n*,/,+,-")

//     if(action =="*"){
//         result=x*y
//         alert(result)
//     }else if(action =="+"){
//         result=parseInt(x)+parseInt(y)
//         alert(result)
//     }else if(action =="-"){
//         result=parseInt(x)-parseInt(y)
//         alert(result)
//     }else if(action =="/"){
//         result=x/y
//         alert(result)
//     }

//     let con = prompt("Do you want to continue?\n 1.Yes\n2.No")
//     if(con == "1"){
//         continue
//     }else if(con=='2'){
//         break
//     }
// }