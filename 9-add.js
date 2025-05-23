let argument = process.argv.slice(2)
let num1 = Number(argument[0]);
let num2 = Number(argument[1])

function add(num1, num2) {
  return num1 + num2;
}
if (isNaN(num1) || isNaN(num2)) {
    console.log(NaN);
} else {
    console.log(add(num1, num2));
}
