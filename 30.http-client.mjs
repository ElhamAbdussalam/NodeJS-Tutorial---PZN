import https from "https";

const endpoint = "https://eoxafntcna99kyu.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Recive data : ${data.toString()}`);
    });
  },
);

const body = JSON.stringify({
  name: "Elham",
  age: 20,
});

request.write(body);
request.end();
