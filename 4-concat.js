let argument = process.argv;

if (argument.length < 3) {
    console.log("undefined ")
}
 else if (argument.length == 3){
    console.log(`${argument[2]} is undefined`)
}
else{
  console.log(` ${argument[2]} is ${argument[3]}`);
}