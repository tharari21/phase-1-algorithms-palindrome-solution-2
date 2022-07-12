function isPalindrome(word) {
  // Write your algorithm here
  // Iterate over first half of the word
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letters we're iterating over with the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
    return true;
  }
  // If any are not equal return false
  // If we reach the middle and didnt return false, return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
