import net from "net";

const client = net.createConnection({
  port: 3000,
  host: "localhost",
});

client.addListener("data", (data) => {
  console.info(`Recive data ${data.toString()}`);
});

setInterval(() => {
  client.write("Elham\r\n");
}, 2000);
