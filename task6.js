const M = 1.6;
let curentKm= document.getElementById("km");
curentKm.addEventListener("keypress", kmToMile=>{
    let convert = curentKm.value/M;
    document.getElementById('mile').value = Math.round(convert*100)/100;
});
let curentMile= document.getElementById("mile");
curentMile.addEventListener("keypress", MileToKm=>{
    let km = document.getElementById('mile').value;
    let convert = M * km;
    document.getElementById('km').value = Math.round(convert*100)/100;
});

