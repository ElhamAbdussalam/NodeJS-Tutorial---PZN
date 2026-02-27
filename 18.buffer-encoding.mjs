const buffer = Buffer.from("Hello World");

console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("SGVsbG8gV29ybGQ=", "base64");
console.info(bufferBase64.toString("utf-8"));
