import { outerAddFunction } from "./importfunction.js";
const add = outerAddFunction();
const result = add(5, 7);
console.log("Result:", result); 