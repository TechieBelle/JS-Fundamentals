let argument = process.argv;

if (argument.length < 3) {
    console.log("0 argument")
}
 else if (argument.length == 3){
    console.log(argument[2])
}
else
    console.log(`${argument[2]} is ${argument[3]} `);
