// var name = "Md Shanto Hosen";
// var age = 27;
// var cgpa = 3.92;
// var lang = ["Bengali","Hidi","English"];

// console.log(age);
function student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa =cgpa;
    this.lang =lang;
    this.display = function(){    
      console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new student("Mainul Hosen",27,3.50,["Bengali","Hidi","English"]);
var student2 = new student("Shanto Hosen",27,3.50,["Bengali","Hidi","English"]);
var student3 = new student("Fahim Hosen",27,3.50,["Bengali","Hidi","English"]);

student1.display();
student2.display();
student3.display();

// var student1 = {
//     name : "Mainul Hosen",
//     age : 27,
//     cgpa: 3.50,
//     lang: ["Bengali","Hidi","English"]
// }
// var student2 = {
//     name : "Shanto Hosen",
//     age : 27,
//     cgpa: 3.50,
//     lang: ["Bengali","Hidi","English"]
// }
// var student3 = {
//     name : "Fahim Hosen",
//     age : 27,
//     cgpa: 3.50,
//     lang: ["Bengali","Hidi","English"]
// }

// console.log(student1.name);