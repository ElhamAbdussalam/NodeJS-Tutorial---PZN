import dns from "dns/promises";

const ip = await dns.lookup("elhamabdussalam.vercel.app");
console.info(ip);
