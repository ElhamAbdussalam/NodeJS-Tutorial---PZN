import fs from "fs";

const writer = fs.createWriteStream("19.stream.text");

writer.write("Hello world\n");
writer.write("Hello world\n");
writer.write("Hello world\n");
writer.end();

writer.on("finish", () => {
  const reader = fs.createReadStream("19.stream.text");

  reader.on("data", (data) => {
    console.info(data.toString());
  });
});
