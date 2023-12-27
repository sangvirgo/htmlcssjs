// hien thi thanh thong bao
// alert('hi Javascript basic!!!!');

// hien thi thanh cau hoi
let userName = prompt("Please enter your name:");

if (userName !== null) {
    alert("Hello, " + userName + "!");
} else {
    alert("You clicked Cancel.");
}


//  hien thi cau hoi va ghi lai cau tra loi 

let question1 = prompt("How many coffee cups would you like?");
let question2 = prompt("How many cookies would you like?");
let question3 = prompt("How much would you like to leave as a tip?");

question1=parseInt(question1);
question2=parseInt(question2);
question3=parseInt(question3);

let coffeeMessage = (question1 === 1) ? 'coffee cup' : 'coffee cups';
let cookieMessage = (question2 === 1) ? 'cookie' : 'cookies';
let tipMessage = (question3 === 1) ? 'tip' : 'tips';

let costCoffee=15;
let costCookie=5;

let taxes=(question1*costCoffee+question2*costCookie)*0.1;
let total=(question1*costCoffee+question2*costCookie+question3)+taxes;

alert(`You have just ordered ${question1} ${coffeeMessage}, ${question2} ${cookieMessage}, and ${question3} ${tipMessage} for us. Thank you!`);
alert('Total: '+total +"$");