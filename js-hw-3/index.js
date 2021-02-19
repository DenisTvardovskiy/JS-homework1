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
// let max
// for(let i=0; i<arr.length;i++){
//     for(let j=1;j<arr.length-1;j++){
//         if(arr[i]>arr[j]){
//             max = arr[i]
//         }else{
//             i++
//         }
//     }
// }

// console.log(max)

//Завдання 4

// let nums = ""

// for(let i=0;i<8;i++){
//     let num = prompt("("+i+"/8)")
//     nums+=num
// }
// let pos = prompt("Positive numbers amount")
// let neg = prompt("Negative numbers amount")
// let zer = prompt("Zeros amount")


// alert("Numbers: "+nums+"\nPositive: "+pos+"\nNegative: "+neg+"\nZeros: "+zer)

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
//     let x = prompt()
//     let y = prompt()
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