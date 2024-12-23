var name1 , name2 ,name3,name4, name5;
name1= "shanto";
name2 ="mainul";
name3= "fahim";
name4 = "joy";
name5 = "pranta";
// document.write(name5);

var names = new Array(5);
names[0] = "Anis";
names[1] = "Fahim";
names[2] = "Joy";
names[3] = "Mainul";
names[4] = "Shanto";
document.write(names[2]);
document.write( "<br> "+names[4]);
console.log(names);

var names = ["Kayes" ,"Kaosar","Tonmoy","Raju","alamin"];
names.push("Jorina Biby");
console.log(names);
names.pop();
console.log(names);

var country1 = ["<br>"+"Bangladesh","Pakisthan"];
var country2 =["Napal","Vutan"];
var countay = country1.concat(country2);
document.write(countay);



