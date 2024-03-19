function totalResult(text,exam){
    return text + exam;

}
document.getElementById("button1").addEventListener("click", (e) => {
    let result = totalResult(60,40);
    document.getElementById("btn1").innerHTML = result;
});


function calcTotalResult(food,drink){
    return food * drink;
}
document.getElementById("button2").addEventListener("click", (e) => {
    let sum = calcTotalResult(60,40);
    document.getElementById("btn2").innerHTML = sum;
});

function sumTotal(height ,weight){
    return height / weight;
}
document.getElementById("button3").addEventListener("click", (e) => {
    let mass = sumTotal(60,20);
    document.getElementById("btn3").innerHTML = mass;
});




function total(mass,acceleration){
    return mass - acceleration;

}
document.getElementById("button4").addEventListener("click", (e) => {
    let velocity = (60,20);
    document.getElementById("btn4").innerHTML = velocity;
})
