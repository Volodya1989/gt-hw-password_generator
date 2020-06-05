// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lenghtOfPassword = prompt("Please, enter desired lenght of new generated password.");

  
  
  if (lenghtOfPassword < 8) {
    alert("Please, enter a number between 8 and 128.");
    writePassword();
  } else if (lenghtOfPassword > 128) {
    alert("Please, enter a number between 8 and 128.");
    writePassword();
  }

 

 

  //TO DO add regular expression that checks numbers only

  

  var upperCase = confirm("Click OK to confirm including uppercase characters.");
  var lowerCase = confirm("Click OK to confirm including lowercase characters.");
  var numbers = confirm("Click OK to confirm including numeric characters.");
  var spCharecters = confirm("Click OK to confirm including special characters.");

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

  var userOption = [];

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
    alert("please select at least one character type");
    // lenghtOfPassword = prompt("question");
  }

  console.log(userOption);

  var password = "";

  for (var i = 0; i < lenghtOfPassword; i++) {
    var ranNum = Math.floor(Math.random() * userOption.length);
    // console.log(ranNum);

    password += userOption[ranNum];
    // console.log(password);

    // console.log(userOption[ranNum]);
  }

  //   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
