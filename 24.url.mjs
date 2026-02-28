import { URL } from "url";

const pzn = new URL("https://elhamabdussalam.vercel.app/home?name=elham");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);
