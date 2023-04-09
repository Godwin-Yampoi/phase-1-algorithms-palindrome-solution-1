function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  const reversedStr = reverseString(str);
  return str === reversedStr;
}


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
