//@Search for longest word in a sentence
const LongestWord = (sen) => {
  let longestWord;
  //We use match regExp pattern to strip out any punctuation and
  //match regExp method to return array
  sen = sen.match(/[A-Za-z0-9]+/gi);

  //compare length of each array item and
  //sort from the highest
  const sorted = sen.sort((a, b) => b.length - a.length);

  longestWord = sorted[0];
  //return the first item since sorted from highest
  return longestWord;
};

//@func Output:
console.info(
  LongestWord(
    "which is the best university in Nigeria to read computer science as of 2024?"
  )
);
