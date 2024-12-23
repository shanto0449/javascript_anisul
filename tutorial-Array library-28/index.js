var names = ["Rukaia", "Fatema","Anju","Joty"];
console.log(names);

// Shift opposit of pop
names.shift();
console.log(names);

// unshift opposite of push
names.unshift("Shanto");
console.log(names);

//splice add array

names.splice(2,0, "Karim","Rahim");
console.log(names);

//solice remove array
names.splice(3,4);
console.log(names);

//slice array mul array poryborton korena
var newArray = names.slice(1);
console.log(newArray);
console.log(names);

var sorteNames = names.sort();
names.reverse();
console.log(sorteNames);

// Number sorting
var numbers = [20, 5, 25, 45,1];
numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers);