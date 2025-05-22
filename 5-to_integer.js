let argument = process.argv;


if (!isNaN(Number(argument[2]))) {
    console.log(`My number: ${Number(argument[2])}`);
}
else {
    console.log("Not a number")
}

