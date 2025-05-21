function showArguments(...args) {
  if (args.length < 1) {
    console.log("No argument");
  } else if (args.length == 1) {
    console.log("Argument found");
  } else if (args.length > 1) {
    console.log("Arguments found");
  }
}

showArguments();
showArguments(1);
showArguments(2, 3, 4, 5);
