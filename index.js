function reverseString(word) {
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  // Write your algorithm here
  //revsere the word
  reversedWord = reverseString(word);

  //return word is the same or not the same as its reversed version, return true or false
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  If the word is the same when reversed, return true.
  if (word === reversedword){   /(mom === mom)
    return true
  else
    return false  
  } 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting : true");
  console.log("=>", isPalindrome('a'));

  console.log("Expecting : true");
  console.log("=>", isPalindrome('abba'));

  console.log("Expecting : true");
  console.log("=>", isPalindrome(''));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting : false");
  console.log("=>", isPalindrome('hello'));
}

module.exports = isPalindrome;
