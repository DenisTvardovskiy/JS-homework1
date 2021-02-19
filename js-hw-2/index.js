
//Завдання 2 Конвертер валют
// const CONVERT = {
//     USD: 1,
//     EUR: 1.21,
//     BRT: 62.66,
//     GOLD: 57.26,
//     UAH: 0.036,
// }
// let result = 0


// toConvert = prompt("Enter convert amount")
// convertIn = prompt("Convert to: \n1.USD \n2.EUR \n3.BRT \n4.GOLD \n just enter a number of desire curency");
// if(Number(toConvert) && toConvert>=0){
//     toConvertInUSD = Math.round((toConvert* CONVERT.UAH)*100)/100
//     if(convertIn == "USD" || convertIn=="1"){
//         result = toConvertInUSD
//         alert("You will get "+result+"$")
//     } else if(convertIn == "EUR" || convertIn=="2"){
//         result = Math.round((toConvertInUSD/ CONVERT.EUR)*100)/100
//         alert("You will get "+result+"€")
//     }else if(convertIn == "BRT" || convertIn=="3"){
//         result = Math.round((toConvertInUSD/ CONVERT.BRT)*100)/100
//         alert("You will get "+result+" barrels")
//     }else if(convertIn == "GOLD" || convertIn=="4"){
//         result = Math.round((toConvertInUSD/ CONVERT.GOLD)*100)/100
//         alert("You will get "+result+"g of Gold")
//     }
        
// } else{
//     alert("Please enter positive digits only")
// }

//Завдання 3

// let orderValue = prompt("Enter Order Sum")
// let finalPrice
// if(Number(orderValue) && orderValue>0){
//     if(orderValue < 500){
//         finalPrice = orderValue*0.99
//         alert("Thank you for your order!\nTotal: "+finalPrice+"\nDiscount: 1%\nFinal price: "+finalPrice)
//     } else if(orderValue > 500 && orderValue < 1000){
//         finalPrice = orderValue*0.95
//         alert("Thank you for your order!\nTotal: "+finalPrice+"\nDiscount: 5%\nFinal price: "+finalPrice)
//     }else if(orderValue > 1000 ){
//         finalPrice = orderValue*0.90
//         alert("Thank you for your order!\nTotal: "+finalPrice+"\nDiscount: 10%\nFinal price: "+finalPrice+"\nBonus: 200uah gift card")
//     }
// }


// Завдання 4

// let result = 0;

// task = prompt("5+1")
// if (task == "6") {
//     result++
// }
// task = prompt("4+1")
// if (task == "5") {
//     result++
// }
// task = prompt("2+1")
// if (task == "3") {
//     result++
// }
// task = prompt("5+6")
// if (task == "11") {
//     result++
// }
// task = prompt("0+1")
// if (task == "1") {
//     result++
// }

// if(result==5){
//     alert("Вітаю ви відповіли на всі запитання вірно\nВаш результат: 5 + 1(Бонус)")
// }else{
//     alert("Ви відповіли на ("+result+"/5) вірно.")
// }


// Завдання 5
// let num = prompt("Enter 3-digit number")
// let result = 0;
// if(num[0]==num[1]){
//     result++
// }
// if(num[0]==num[2]){
//     result++
// }
// if(num[1]==num[2]){
//     result++
// }

// if(result>0){
//     alert("Your number has digits that repeat")
// }

//Завдання 6

// let x = prompt("Enter any button from 1 to =")

// if(x == '1'){
//     alert("!")
// }
// if(x == '2'){
//     alert("@")
// }
// if(x == '3'){
//     alert("#")
// }
// if(x == '4'){
//     alert("$")
// }
// if(x == '5'){
//     alert("%")
// }
// if(x == '6'){
//     alert("^")
// }
// if(x == '7'){
//     alert("&")
// }
// if(x == '8'){
//     alert("*")
// }
// if(x == '9'){
//     alert("(")
// }
// if(x == '0'){
//     alert(")")
// }
// if(x == '-'){
//     alert("_")
// }
// if(x == '='){
//     alert("+")
// }
