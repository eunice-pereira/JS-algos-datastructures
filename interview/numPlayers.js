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

function numPlayers(scores) {
  // sort scores descending order
  let sortedScores = scores.sort((a, b) => b - a);
  let rank = 1;
  console.log(sortedScores);

  // assign rank to scores
  for (let i = 0; i <= sortedScores.length; i++) {
    //check if duplicate score exists
    if (sortedScores[i]) {
      rank++;
    }
    console.log(rank);
  }

  // equal scores have equal ranks

  // next lower score ranks based on position of list (1 based index)

  // ranks that are <= k
  return rank;
  // return count of n players that ranked <= k
  // return Object.keys(rank) <= k
}

console.log(numPlayers([50, 50, 25, 100]));
