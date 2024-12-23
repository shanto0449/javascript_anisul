// var marks = prompt("Enter Your Maeks = ");

// if(marks >= 80)
//    document.write("A+") ;
// else if(marks >=70)
// document.write("A");
// else if(marks >=60)
//     document.write("A-");
// else if(marks >=50)
//     document.write("B");
// else if(marks >=40)
//     document.write("C");
// else if(marks >=33)
//     document.write("D");
// else
// document.write("Fail");

// var marks = prompt("Enter Your Maeks = ");
// if(marks >100 || marks < 0 )
//     document.write("Invalid Marks") ;
// else if(marks >= 80 && marks<=100)
//     document.write("A+") ;
//  else if(marks >=70 && marks<=79)
//  document.write("A");
//  else if(marks >=60 && marks<=69)
//      document.write("A-");
//  else if(marks >=50 && marks<=59)
//      document.write("B");
//  else if(marks >=40 && marks<=49)
//      document.write("C");
//  else if(marks >=33 && marks<=39)
//      document.write("D");
//  else
//  document.write("Fail");

// var num1 = prompt("Enter num1 : ");
// var num2 = prompt("Enter num2 : ");
// var num3 = prompt("Enter num3 : ");

// if (num1 > num2 && num1>num3)
//     document.write("Large number = "+num1);
//  else if (num2 > num1 && num2>num3)
//     document.write("Large number = "+num2);
// else 
//     document.write("Large number = "+num3);

var letter = prompt("Enter a letter : ");

var letter =letter.toLowerCase();
if(letter == "a"||letter == "e"||letter == "i"||letter == "o"||letter == "u")
    document.write("Vowel");
else
document.write("Consonant");