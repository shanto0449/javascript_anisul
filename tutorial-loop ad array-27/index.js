// var num = [10 , 20 , 30 , 40, 50];
// var sum =0;
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);

// for(var i=0 ; i<5 ; i++){
//     document.write(num[i]);
//     sum = sum + num[i];
// }
// console.log(sum);


var num = new Array();
for(var i= 0; i<5; i++){
    num[i] = parseInt(prompt("Enter a Number : "));
}

var sum = 0;
for(var i=0 ; i<5 ; i++){
    console.log(num[i]);

    sum = sum + num[i];
}

console.log("sum = " +sum);