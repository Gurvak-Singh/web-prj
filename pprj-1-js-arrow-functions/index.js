let sum = (a,b) => a + b;

let difference = (a, b) => a - b;

let division = (a, b) => a/b;

let multiplication = (a, b) => a*b;

document.getElementById("sum").innerHTML = sum(2,3);
document.getElementById("difference").innerHTML = difference(5,4);
document.getElementById("division").innerHTML = division(10,5);
document.getElementById("multiplication").innerHTML = multiplication(10,69);