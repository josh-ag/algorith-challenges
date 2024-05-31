//@Search for longest word in a sentence
const LongestWord = (sen) => {
  let longestWord;
  //We use match method of regExp that return a list
  //form a pattern that strip-out whitespaces and punctuations
  sen = sen.match(/[A-Za-z0-9]+/gi);

  //compare length of each word
  //sorted in descending order
  const sorted = sen.sort((a, b) => b.length - a.length);

  //take the first/longest word from the sorted word-list
  longestWord = sorted[0];

  //return the longest word
  return longestWord;
};

//@Run func. and print output
console.info(
  LongestWord(
    "which is the best university in Nigeria to read computer science as of 2024?"
  )
);
