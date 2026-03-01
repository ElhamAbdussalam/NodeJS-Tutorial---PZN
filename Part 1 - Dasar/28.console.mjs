import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("28.console.mjs.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello world");
log.error("Ups");

const person = {
  name: "Elham",
  age: 20,
};

log.table(person);
