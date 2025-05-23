let argument = process.argv.slice(2)
let x = Number(argument[0])
let shape = "X"
if (isNaN(x)) {
    console.log("Missing size");
    
} else {
    for (let i = 0; i < x; i++){

        for (let j = 0; j < x; j++) {
            process.stdout.write("X");
        }
        console.log();
    }
}