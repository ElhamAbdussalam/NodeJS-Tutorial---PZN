import fs from "fs";

const buffer = fs.readFileSync("9.file-system.mjs");

console.info(buffer.toString());

fs.writeFileSync("temp.text", "hello world");
