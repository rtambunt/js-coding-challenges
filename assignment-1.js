"use strict";

// // --- Problem A ---
// const inputStr = prompt("Enter 3 inputs separated by a space (Ex. 6 6 4)");
// const inputArr = inputStr.split(" ");

// const m = Number(inputArr[0]);
// const n = Number(inputArr[1]);
// const a = Number(inputArr[2]);

// const minFlagstones = function (m, n, a) {
//   return Math.ceil(m / a) * Math.ceil(n / a);
// };

// console.log(minFlagstones(m, n, a));

// // --- Problem B ---
// const inputStr = prompt("Enter a string to capitalize");
// const capitalize = function (inputStr) {
//   return inputStr[0].toUpperCase() + inputStr.slice(1);
// };

// console.log(capitalize(inputStr));

// // --- Problem C ---
// const inputDist = Number(
//   prompt("Enter a number from 1 to 1000000 (no commas)")
// );

// const minSteps = function (distance) {
//   return distance % 5 === 0 ? distance / 5 : Math.trunc(distance / 5) + 1;
// };

// console.log(minSteps(inputDist));

// // --- Problem D ---
// const inputNum = Number(prompt(`Enter input`));

// // let luckyNums = [];
// const luckyNums = [
//   4,
//   7,
//   44,
//   47,
//   74,
//   77,
//   444,
//   447,
//   474,
//   477,
//   744,
//   747,
//   774,
//   777,
// ];

// const lucky = function (luckyNums) {
//   let isLucky = false;
//   luckyNums.forEach(function (luckyNum) {
//     if (inputNum === luckyNum || inputNum % luckyNum === 0) isLucky = true;
//   });

//   if (isLucky === true) return "YES";
//   return "NO";
// };

// console.log(lucky(luckyNums));

// // --- Problem E ---
// const inputArr = prompt(
//   "Enter 2 numbers between 1 and 16 separated by a space (Ex. 2 4)"
// ).split(" ");

// const maxDominoes = function (inputArr) {
//   const m = inputArr[0];
//   const n = inputArr[1];

//   return Math.floor((m * n) / 2);
// };

// console.log(maxDominoes(inputArr));

// // --- Problem G ---
// const kilos = Number(prompt("Enter a watermelon weight from 1 to 100 (kilos)"));

// const divEqual = function (kilos) {
//   return kilos % 2 === 0 ? "YES" : "NO"; // Allowed to return!
//   // kilos % 2 === 0 ? return "YES" : return "NO"  // NOT Allowed
// };

// console.log(divEqual(kilos));
