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
  let rank = {};
  let sortedScores = scores.sort((a, b) => b - a);
  let uniqueScores = 

  console.log(sortedScores)
  for (let i = 1; i <= sortedScores.length; i++) {
    // if score has not been set as key
    // set value to rank array at i
    if (!rank[sortedScores[i]]) {
      rank[sortedScores[i - 1]] = i;

      // check if score is already a key
      // push i to existing score
    } else if (rank[sortedScores[i - 1]]) {
      rank[sortedScores[i - 1]].push(i - 1);
    }
  }
  console.log(rank);
  // return ranks as array
  let ranks = Object.values(rank).join().split(',');
  let levelUp = ranks.filter((value) => {
    return value <= k;
  });
  return levelUp.length;
}
console.log(numPlayers([100, 50, 50, 25], 3));
