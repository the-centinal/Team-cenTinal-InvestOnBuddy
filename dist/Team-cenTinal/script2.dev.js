"use strict";

var monthly = document.querySelector("#income").value;
console.log(monthly);
var investment_option = document.querySelector("#investment_option").value;
console.log(Investment_option);
var time = document.querySelector("#year").value;
console.log(time);
var age = document.querySelector("#age").value;
console.log(age); // function nps(monthly, time) {
//         npsamount = monthly * ((1 + (10 / 1200) ** (12 * time))) / (10 / 1200);
// }
// function sip(monthly, time) {
//         sipamount = monthly * (((1 + (15 / 1200)) ** (12 * time)) - 1) * ((1 + (15 / 1200)) / (15 / 1200));
//         document.write("Total Investment:-");
//         document.write(monthly * 12 * time);
//         document.write("Interest Earned:-");
// }
// function ppf(monthly, time) {
//         ppfamount = monthly * (((1 + (7 / 1200)) ** (12 * time)) - 1) / (7 / 1200);
// }
// function saving(monthly, time) {
//         savingamount = monthly * (((1 + (5 / 1200)) ** (12 * time)) - 1) / (5 / 1200);
//         document.write(savingamount);
// }
// if (investment_option == 1) {
//         saving(monthly, time);
// } else if (investment_option == 2) {
//         ppf(monthly, time);
// } else if (investment_option == 3) {
//         nps(monthly, time);
// } else if (investment_option == 4) {
//         sip(monthly, time);
// } else {
//         saving(monthly, time);
//         ppf(monthly, time);
//         nps(monthly, time);
//         sip(monthly, time);
// }
// document.write("Hello WOrld");