const buffer = Buffer.from("Hello World");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());
