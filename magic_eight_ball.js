let userName = "";

userName ? console.log(`Hello, ${userName}`) : console.log("Hello");

let userQuestion = "";

console.log(
  `Dear ${
    userName || "Béla"
  }, your question to the great oraculum ball was: ${userQuestion}`
);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "Reply hazy try again";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(`The great oraculum's answer is: ${eightBall}`);
