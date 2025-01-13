//import { hello, world } from "api";
const { hello, world } = await import("api");

console.log("esm-js:", hello, world);