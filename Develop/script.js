
//Created by Volodymyr Pertyrsya__06/05/20

// Assignment Code
var generateBtn = document.querySelector("#generate");
var userOption = [];

// Write password to the #password input
function generatePassword() {
  var lenghtOfPassword = prompt(
    "Please, enter desired lenght of new generated password."
  );

  // add regular expression that checks numbers only

  var numericRegExp = /^[0-9]+$/;
  var lengthValid =
    numericRegExp.test(lenghtOfPassword) &&
    lenghtOfPassword >= 8 &&
    lenghtOfPassword <= 128;

  if (!lengthValid) {
    alert("Please, enter a number between 8 and 128.");
    return generatePassword();
  }

  //checks if user wants other character type
  var upperCase = confirm(
    "Click OK to confirm including uppercase characters."
  );
  var lowerCase = confirm(
    "Click OK to confirm including lowercase characters."
  );
  var numbers = confirm("Click OK to confirm including numeric characters.");
  var spCharecters = confirm(
    "Click OK to confirm including special characters."
  );
  var upperLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "~",
    "`",
    "|",
    "}",
    "{",
    "[",
    "]",
    ":",
    ";",
    "?",
    ">",
    "<",
    ",",
    ".",
    "/",
    "-",
    "=",
  ];

  //reser user options to empty array
  userOption = [];

  if (upperCase) {
    userOption = userOption.concat(upperLetters);
  }

  if (lowerCase) {
    userOption = userOption.concat(lowerLetters);
  }

  if (numbers) {
    userOption = userOption.concat(num);
  }

  if (spCharecters) {
    userOption = userOption.concat(characters);
  }

  if (userOption.length === 0) {
    alert("Please, select at least one type of characters.");
    return generatePassword();
  }

  // generating password
  var password = "";

  for (var i = 0; i < lenghtOfPassword; i++) {
    var ranNum = Math.floor(Math.random() * userOption.length);

    password += userOption[ranNum];
  }

  // passing password to writePassword function
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
