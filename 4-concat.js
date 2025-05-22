let argument = process.argv;

if (argument.length < 3) {
    console.log("0 argument")
}
 else if (argument.length == 3){
    console.log(`1 argument: ${argument[2]}`)
}
else
    console.log(`2 arguments: ${argument[2]} ${argument[3]}`);
