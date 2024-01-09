let question1 = prompt("Would you like a coffee or a tea?");
let question2 = prompt("Would you like cookie with your coffee?");

if (question1 === "coffee") {
  if (question2 === "yes" || question2 === "Yes") {
    alert("You have just ordered coffee and cookies!!");
  } else {
    alert("You just ordered coffee!!!");
  }
} else {
  if (question2 === "yes" || question2 === "Yes") {
    alert("You have just ordered tea and cookies!!");
  } else {
    alert("You just ordered tea!!!");
  }
}
