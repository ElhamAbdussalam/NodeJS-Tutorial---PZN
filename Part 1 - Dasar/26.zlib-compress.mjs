import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("26.zlib-compress.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("26.zlib-compress.mjs.txt", result);
