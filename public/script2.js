function func1() {

let age = document.getElementById("age").value;
let maxAge = document.getElementById("maxAge").value;
let numPerDay = document.getElementById("numPerDay").value;
let snackType = document.getElementById("snackType").value;
let totalRequired = (Number(numPerDay) * 365) * (Number(maxAge) - Number(age));
document.getElementById("resultHere2").innerHTML = `You will need ${totalRequired} ${snackType} to last you until the ripe old age of ${maxAge}`;

}