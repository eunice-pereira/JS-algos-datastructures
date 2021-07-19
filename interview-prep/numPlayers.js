/*
Competitive Gaming

A group of friends are playing a video game together. 
During the game, each player earns a number of points. 

At the end of a round, players who achieve at least a certain rank get to "level up" their characters 
to gain increased abilities. 

Given the scores of the players at the end of a round, how many players will be able to level up? 

Note: Players with equal scores will have equal ranks,
but the player with the next lower score will be ranked based on the position within the list of all players' scores. 

Ex. If there are four players, and three players tie for first place, their ranks are 1,1,1 and 4. 

Note: No player with a score of 0 can level up, regardless of rank. 

Example: 
n = 4, number of players 
k = 3, cut off rank for leveling up to a player's characters 
scores = [100,50,50,25]
ranks = [1,2,2,4]
Because players need to have a rank of at least 3 to level up, only the first three players qualify. 
Therefore, the answer is 3. 

input: 
k: integer denoting cutoff rank for leveling up a player's character
scores[n]: an array of integers denoting the scores of players (0  to 100)

output: 
integer: how many players are able to level up (i.e. players that meet rank or higher)

*/

function numPlayers(scores, k) {
  let i;
  if (scores && k > 0) {
    let sorted = scores.filter((score) => score >= 1).sort((a, b) => b - a);
    console.log(sorted);

    let ranks = sorted.map((value) => sorted.indexOf(value) + 1);
    console.log(ranks);

    let binarySearch = function (arr, val) {
      let start = 0;
      let end = arr.length - 1;

      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] <= val) return true; 
        else if (arr[mid] < val) start = mid + 1;
        else end = mid - 1;
      }
      return false;
    };

    if (binarySearch(ranks, k) && k <= ranks.length) {
      console.log(ranks);
      let levelUp = ranks.filter((rank) => rank <= k);
      console.log(levelUp);
      return levelUp.length;
  
    } else return 0;
  } else return 0;
}

console.log(
  numPlayers([100, 50, 50, 25, 30, 5, 10, 99, 44, 33, 22, 11, 10, 0], 4)
);

/*
Edge cases: 
- k > 0 and k <= ranks.length (k must be valid and existing)
- score >= 1 and <= 100
*/

// ^^ binary search - hackerrank passes all tests except 7
// quicksort w/o binary search passes all except 6 and 7 (time out)

// rank - filter, map, then filter -- for loop instead? 