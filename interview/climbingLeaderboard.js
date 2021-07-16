// Climbing the Leaderboard - Harckerrank

/* Alice is playing an arcade game and wants to climb to the top of the leaderboard and track her ranking.
The game uses Dense Ranking. 
- Player with highest score is ranked number 1. 
- Players who have equal scores receive same ranking number. 
- Next player receive immediately following ranking number. 

Ex. Players scores = [100,90,90,80]. 
Ranking = [1,2,2,3]
Alice's socres are [70,80,105], so her rankings are [4,3,1]

Result should return integer arrray where each element represents Alice's rank after jth game. \

*/
// scores: [10,50,40,20,10]
// alice: [5,25,50,120]

function climbingLeaderboard(scores, alice) {
  const resArr = [];
  // new Set from scores - no dupes, only unique values
  const arr = [...new Set(scores)];
  console.log(arr)
  // start from end of array assuming
  let res = arr.length - 1;

  // for each of alice's scores
  for (const score of alice) {
    while (res >= 0) {
      if (score >= arr[res]) res--;
      else {
        resArr.push(res + 2);
        break;
      }
    }
    if (res < 0) resArr.push(1);
  }
  return resArr;
}

console.log(climbingLeaderboard([10, 50, 40, 20, 10], [5, 25, 50, 120]));
