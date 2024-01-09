alert("Hello welcome to the food application!!!");
alert('let"s create a account!!!');

let username = prompt("Please enter to username!!!");
let password = prompt("Please enter to password!!!");
alert("Thank you!! Your account has been created!");

var reUserName = prompt("Please re-enter your username!!");
var rePassWord = prompt("Please re-enter your password!!");

while (reUserName !== username) {
  reUserName = prompt("Wrong your username please try again!!");
}

while (rePassWord !== password) {
  reUserName = prompt("Wrong your password please try again!!");
}

alert("You are connected!!!");

var balance = 10;
alert("Your current balance is " + balance + " dollars");
let question1 = prompt("Would you like to add money to your balance?");

if (question1 === "Yes" || question1 === "yes") {
  let question2 = prompt("How much would you like to add money?");
  question2 = parseInt(question2);
  balance = balance + question2;
  alert("Your new balance is " + balance + " dollars");
} else {
  alert("Great!!");
}
