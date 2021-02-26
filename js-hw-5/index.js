const HOUR = 360
const MINUTES = 60


//Task 1

function cube(num) {
    return Math.pow(num,3)
}

console.log(cube(3))


//Task 2

function devo(a,b,c) {
    return (a+b)/c
}

console.log(devo(1,2,3))

//Task 3

function day(num) {
    switch (num) {
        case 1:
            return "Понеділок"
            break;
        case 2:
            return "Вівторок"
            break;
        case 3:
            return "Середа"
            break;
        case 4:
            return "Четвер"
            break;
        case 5:
            return "П'ятниця"
            break;
        case 6:
            return "Субота"
            break;
        case 7:
            return "Неділя"
            break;
    }
}

console.log(day(7))


//Task 4

function factorial(num) {
    let factor = 1
    for(let i=0;i<num; i++){
        factor*=num-i
    }
    return(num == 0 ? 1: factor)
    
}

console.log(factorial(0))

//Task 5

function sec(h,m,s) {
    let result = 0;
    
    if(h){
        result = (h*HOUR)
    }
    if(h && m){
        result = (h*HOUR)+(m*MINUTES)
    }
    if(h && m && s){
        result = (h*HOUR)+(m*MINUTES)+s
    }


    
    return result
}


console.log(sec(1,2,50))

// Task 6

function converter(time) {
    let h = 0
    let m = 0
    let s = 0
    if(time >= 24*HOUR ){
        return "Більше ніж одна доба"
    }else{
        h = Math.trunc(time/HOUR)
        m = Math.trunc((time-(h*HOUR))/MINUTES)
        s = time - h*HOUR - m*MINUTES
        return h+"h "+ m +"min "+s+"sec"
    }
}

console.log(converter(500))