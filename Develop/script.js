// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lenghtOfPassword = prompt("question");
  if (lenghtOfPassword < 8) {
    alert("enter number more then ");
    // lenghtOfPassword = prompt("question");
    writePassword();
  } else if (lenghtOfPassword > 128) {
    alert("enter number less then 128");
    // lenghtOfPassword = prompt("question");
    writePassword();
  }

//   else if ( typeof lenghtOfPassword === "string" ){
//     alert("please ennter ");
//     // lenghtOfPassword = prompt("question");
//     writePassword();
//   }

  //TO DO add regular expression that checks numbers only

  var upperCase = confirm("uppercase");
  var lowerCase = confirm("lowerCase");
  var numbers = confirm("numbers");
  var spCharecters = confirm("spCharecters");

  var upperLetters = ["A", "B", "C"]; //DEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = ["a", "b", "c"]; //defghijklmnopqrstuvwxyz";
  var num = ["0", "1", "2"]; //3456789";
  var characters = ["!", "@", "#"]; //$%^&*()_+~`|}{[]:;?><,./-=";

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
    writePassword();
  }

  console.log(userOption);

  var password = "";

  for (var i = 0; i < lenghtOfPassword; i++) {
    var ranNum = Math.floor(Math.random() * userOption.length);
    console.log(ranNum);

    password += userOption[ranNum];
    console.log(password);

    // console.log(userOption[ranNum]);
  }

  //   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
