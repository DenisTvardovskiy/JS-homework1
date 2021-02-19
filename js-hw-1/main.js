


function Task1() {
    let age = prompt("Вкажіть свій вік: ");
    if(age){
        alert("Привіт мені - " + age + " років!");
    }
}

function Task2() {
    let age = prompt("Вкажіть рік свого народження: ");
    const YEAR = 2021
    if(age){
        alert("Вам - " + (YEAR-age) + " років!");
    }
}


function Task3() {
    let a = parseInt(prompt("Вкажіть довжину сторони А в трикутнику (см): "));
    let b = parseInt(prompt("Вкажіть довжину сторони B в трикутнику (см): "));
    let c = parseInt(prompt("Вкажіть довжину сторони C в трикутнику (см): "));

    const YEAR = 2021
    if(a || b ||c){
        alert("Периметр трикутника = " + (a+b+c) + " см");
    }
}

function Task4() {
    let r = parseInt(prompt("Вкажіть радіус кола (см): "));
    if(r){
        alert("Периметр трикутника = " + (Math.PI*Math.pow(r,2)) + " см2 \nПериметр трикутника = " + (Math.pow(r,2)) + "πсм2");
    }
}


function Task5() {
    const AVGSPEED = 50;
    let time = parseInt(prompt("Скільки годин ще їхати?"));

    if(time){
       alert("Залишилось проїхати -"+(time*AVGSPEED)+"км");

    }
    
}

function Task7() {
    let currBalance = document.getElementById("balance").value;
    let oilPrice = document.getElementById("price").value;

    if (currBalance || oilPrice){
        litr = currBalance / oilPrice;
        left = Math.round(((litr % 1)*oilPrice)*100)/100;
        alert("Виможете купити - "+Math.round(litr)+"л \nЗалишок на балані: "+left+" грн.");

    }
    
}