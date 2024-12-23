var number = Number(prompt("Enter a number"));
// if(number>0){
//     console.log("Positive");
// }
// else{
//     console.log("Nagative");
// }

// var result = number > 0 ? "posative" : "Nagative"
// console.log(result);

// number > 0 ? console.log("positive") : console.log("Nagative");

var result = number > 0 ? "posative": number<0 ? "Nagative" : "Zero";
console.log(result)