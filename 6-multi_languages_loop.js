const args = process.argv.slice(2);
const lines = ["C is fun", "Python is cool", "Javascript is amazing"];

for (let i = 0; i < args.length; i++) {
  lines.push(args[i]);
}

for (let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
}
