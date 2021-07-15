// Create an object placeholder that will be where we group anagram words
// loop over text string
// check if the words in array contain the same letters as the new sorted words
// group all sets of anagrams
// only return back the first occurrence of word in each anagram set
// 0(n) time x space complexity

function funWithAnagrams(text) {
  // Write your code here

  if (text.length < 0) {
    return 0;
  }

  let sortText = {};
  let newText = [];

  for (let word of text) {
    let newWords = word.split('').sort().join('');
    console.log(newWords);

    if (!sortText[newWords]) {
      sortText[newWords] = Array(word);
    } else {
      sortText[newWords].push(word);
    }
  }

  for (let values in sortText) {
    let firstOccurrence = sortText[values][0];

    if (firstOccurrence) {
      newText.push(firstOccurrence);
    }
  }
  return newText.sort();
}

console.log(funWithAnagrams(['poke', 'pkoe', 'okpe', 'ekop']));
