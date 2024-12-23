  console.clear();
  function highestScore(scores){
    let max = scores[0];
    for(let x=1; x<scores.length; x++){
        if (max < scores[x]){
            max=scores[x];
        }

    }
    return max;
  }

  let scores = [21, 28, 1,88,15 ];
var maxScore = highestScore(scores);
console.log(maxScore);