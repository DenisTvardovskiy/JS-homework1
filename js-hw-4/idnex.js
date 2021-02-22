const MARKS = {
    "John": 80,
    "Bill": 77,
    "David": 68,
    "Rayan": 88,
    "Nick": 100
}

const GRADESYSTEM = {
    "f": 60,
    "d": 70,
    "c": 80,
    "b": 90,
    "a": 100
}


function taskOne(marks ,grades){
    const NAMES = Object.getOwnPropertyNames(marks)
    let convertedMarks = {}
    
    let sum = 0;
    for(let i=0;i<NAMES.length; i++){
        sum += marks[NAMES[i]]
        
        if(marks[NAMES[i]]<=grades["f"]){
            convertedMarks[NAMES[i]] =  "F";
        }else if(marks[NAMES[i]]<=grades["d"]){
            convertedMarks[NAMES[i]] =  "D";
        }else if(marks[NAMES[i]]<=grades["c"]){
            convertedMarks[NAMES[i]] =  "C";
        }else if(marks[NAMES[i]]<=grades["b"]){
            convertedMarks[NAMES[i]] =  "B";
        }else if(marks[NAMES[i]]<=grades["a"]){
            convertedMarks[NAMES[i]] =  "A";
        }
    }

    let avg = sum/NAMES.length

    
    console.log(avg)
    console.log(convertedMarks)

    
}




function TaskTwo() {
    let sum = 0;
    for(let i=0; i<1001; i++){
        if(i%3==0 && i%5==0){
            sum+=i;
            
        }
    }
    return sum;
    
}




function TaskThree() {
    let element = "* "
    let result =""
    for(let i=0;i<5; i++){
        result+= element
        console.log(result)
    }
}
console.log("-------------------Task 1-------------------")
taskOne(MARKS,GRADESYSTEM)
console.log("-------------------Task 2-------------------")
console.log(TaskTwo())
console.log("-------------------Task 3-------------------")
console.log(TaskThree())