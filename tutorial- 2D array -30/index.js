function highestRunScorer(playersInfo){
    var highestScorer = playersInfo[0][0];
    var highestScorer = playersInfo[0][1];

    for(var x =1;x<playersInfo.length; x++  ){
        if(highestScorer < playersInfo[x][1]){
            highestScorer = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;

}

var playersInfo =[
    ["Asraful",95],
    ["Mizan",25],
    ["Rakib",45],
    ["lu",105],
];

 var name = highestRunScorer(playersInfo);
 console.log(name);