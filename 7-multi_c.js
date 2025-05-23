let argument = process.argv.slice(2)
let x = argument[0]
if (isNaN(x)) {
    console.log("Missing number of occurence");
    
} else {
    for (let i = 0; i < x; i++){
        console.log("C is fun")
    }
}