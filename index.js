console.log("Welcome to String Challenges");

//Reverse a string inplace
let str1 = "Saurabh";
let result1 = "";

for (let i = str1.length - 1; i >= 0; i--) {
  result1 = result1 + str1[i];
}
// console.log(result1);

function reverseString(str) {
  let final = str.split("");
  for (let i = 0; i < parseInt(final.length / 2); i++) {
    let temp = final[i];
    final[i] = final[final.length - 1 - i];
    final[final.length - 1 - i] = temp;
  }
  return final.join("");
}
// console.log(reverseString(str1));

function reverseString3(str) {
  let final = str.split("");
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    let temp = final[i];
    final[i] = final[j];
    final[j] = temp;
    i++;
    j--;
  }
  return final.join("");
}
// console.log(reverseString3(str1));

//----------------------------------------------------
//How do you print duplicate characters from a string

let str2 = "javascript";
let result2 = {};

function duplicateCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    if (result2[str[i]]) {
      result2[str[i]] = result2[str[i]] + 1;
      console.log("Characters that is available more than once", str[i]);
    } else {
      result2[str[i]] = 1;
    }
  }
  return result2;
}

// console.log(duplicateCharacter(str2));

//---------------------------------------------------------

let str3 = "saurabh";
let str4 = "saurbha";

function sortAndLowercase(str) {
  return str.toLowerCase().split("").sort().join("");
}
function anangram(str1, str2) {
  if (str1 && str2) {
    let text1 = sortAndLowercase(str1);
    let text2 = sortAndLowercase(str2);
    if (text1 === text2) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

// console.log(anangram(str3, str4));

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};
  for (let char of str1) {
    count[char] = count[char] ? count[char] + 1 : 1;
  }

  for (let char2 of str2) {
    if (count[char2]) {
      count[char2] = count[char2] - 1;
    } else {
      return false;
    }
  }
  // for (let key in count) {
  //   if (count[key] !== 0) {
  //     return false;
  //   }
  // }

  return true;
}

// console.log(isAnagram(str3, str4));

//--------------------------------------------------------------------------------
//Reverse a string using recursion

function reverseStringUsingRecursion(source) {
  if (source.length === 0) {
    return "";
  }
  let lastIndex = source.length - 1;
  let lastChar = source.substring(lastIndex);
  let subS = source.substring(0, lastIndex);
  return lastChar + reverseStringUsingRecursion(subS);
}

// console.log(reverseStringUsingRecursion("saurabh", ""));

//----------------------------------------------------------------------------------
//How do you check a string contains only number

function checkString(str) {
  return /^\d+$/.test(str);
}
// console.log(checkString("455"));

//---------------------------------------------------------------------------------
//Duplicate characters in string

function duplicateCharacter(str) {
  let duplicate = {};
  let characters = {};
  for (let char of str) {
    if (characters[char]) {
      characters[char] = characters[char] + 1;
      duplicate[char] = char;
    } else {
      characters[char] = 1;
    }
  }
  return duplicate;
}

// console.log(duplicateCharacter("saurabh"));

//------------------------------------------------------------------------------------
//Count a number of vowel and consonants in string

function vowelConsonantCount(str) {
  const text = str.toLowerCase();
  let vowel = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let consonantCount = 0;
  for (let char of text) {
    if (vowel.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  return [vowelCount, consonantCount];
}

// console.log(vowelConsonantCount("saurabh"));

//---------------------------------------------------------------------------------------
//Occurance of characters in string

function charCount(str) {
  if (!str) {
    return {};
  }
  let count = {};

  for (let char of str) {
    if (count[char]) {
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  }
  return count;
}
// console.log(charCount("saurabh"));

//--------------------------------------------------------------------------------------
//Print first non repeated occurance of character in string

function firstNonrepeating(str) {
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      console.log(char, "is first non-repeating character in string");
      return char;
    }
  }

  return false;
}

// console.log(firstNonrepeating("saurabh"));

//----------------------------------------------------------------------------------------
//Reverse chararacters of words in given sentence without using any library;

let sentence = "hare krishna hare krishna hare krishna";

function reverseWord(word) {
  let result = "";
  for (let i = word.length - 1; i >= 0; i--) {
    result = result + word[i];
  }
  return result;
}

function reverseWordsSentence(sentence) {
  let arr = sentence.split(" ");
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = reverseWord(arr[i]);
  }
  console.log(resultArr);
  return resultArr.join(" ");
}
// console.log(reverseWordsSentence(sentence));

//---------------------------------------------------------------------------------------
// Reverse words in given sentence

function reverseWordS(sentence) {
  let arr = sentence.split(" ");
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    result = result + arr[i] + " ";
  }
  console.log(result);
}
// console.log(reverseWordS(sentence));

//---------------------------------------------------------------------------------------
//Check strings are rotation of each other

//method1
function rotationCheckByKMP(str1, str2) {
  let concatedStr = str1 + str1;
  console.log(concatedStr);
  console.log(concatedStr.includes(str2));
}

// console.log(rotationCheckByKMP("saurabh", "urabhsa"));

//method2
function rotationCheck(str1, str2) {
  let tempStr = str1;
  let len = str1.length;
  for (let i = 0; i < str1.length; i++) {
    let firstChar = tempStr[0];
    let subString = tempStr.substring(1, len);
    tempStr = subString + firstChar;
    if (tempStr === str2) {
      return true;
    }
  }
}

// console.log(rotationCheck("saurabh", "urabhsa"));

//-------------------------------------------------------------------------------------
//Check string is palindrome

function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("saas"));
// console.log(isPalindrome("aabcbaa"));
// console.log(isPalindrome("jisbhgsh"));

//----------------------------------------------------------------------------------------
//Remove duplicate characters from string

function removeDuplicateChar(str) {
  let set = new Set([...str]);
  let result = "";
  for (let char of set) {
    result = result + char;
  }
  return result;
}
// console.log(removeDuplicateChar("saurabhkumar"));

function removeDuplicateChar2(str) {
  let obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
  let result = "";
  for (let key in obj) {
    result = result + key;
  }
  return result;
}

// console.log(removeDuplicateChar2("saurabhkumar"));

//-----------------------------------------------------------------------------------------
// Maximum occuring character in given string

function maximumCharacter(str) {
  let obj = {};
  let char = "";
  let max = 0;
  for (let char of str) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
      char = key;
    }
  }

  console.log("Maximum occured character is", char, max);
  return char;
}

// console.log(maximumCharacter("saurabhkumar"));

//---------------------------------------------------------------------------------
//Remove given characters from string

function removeCharFromSring(string, char) {
  let strArr = string.split("");
  let result = "";
  for (let j = 0; j < strArr.length; j++) {
    if (strArr[j] != char) {
      result = result + strArr[j];
    }
  }
  return result;
}

// console.log(removeCharFromSring("saurabh", "a"));

//----------------------------------------------------------------------------------
