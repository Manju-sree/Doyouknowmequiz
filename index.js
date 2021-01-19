//packages
const chalk = require('chalk');
var readlineSync = require('readline-sync');
//welcome message
console.log(chalk.green.bgYellow('Welcome to Best Buddy quiz!!!'));
console.log(" ");
var userName = readlineSync.question('Please Enter your name: ');
console.log(" ");
console.log(chalk.greenBright("Welcome ") + chalk.bold.yellow(userName) + chalk.bold.yellow("!") +
    chalk.magentaBright('\n let see, How well Do You Know Me?'));
console.log(" ");
readlineSync.question(chalk.cyanBright("Press any key to begin to play fun quiz.... "));
console.log(" ");

var score = 0;

var quizQuestions = [{
        question: "What is my name? ",
        answer: "Manjushree"
    },
    {
        question: "Which state do I live? ",
        answer: "Karnataka"
    },
    {
        question: "Which is my favourite color? ",
        answer: "Green"
    },
    {
        question: "when is my Birthday? ",
        answer: "January"
    },
    {
        question: "Which is my favorite movie? ",
        answer: "KGF"
    }
]

function playQuiz(question, answer) {
    var inputAns = readlineSync.question(question);
    if (inputAns.toLowerCase() === answer.toLowerCase()) {
        console.log(chalk.yellowBright('Congrats!!'), 'you are correct.. \n');
        score++;
    } else {
        console.log(chalk.yellow('Sorry:('), 'you are wrong... \n');
        score;
    }
}

for (var i = 0; i < quizQuestions.length; i++) {
    var currquestionOne = quizQuestions[i];
    playQuiz(currquestionOne.question, currquestionOne.answer);
}

console.log('');
console.log('You scored : ' + score);
console.log('');

var corrAnswers = [
    "1: Manjushree",
    "2: Karnataka",
    "3: Green",
    "4: January",
    "5: KGF"

]
if (score <= 1) {

    var knowAns = readlineSync.question(chalk.red("Do you want to know the correct answer? yes/no "));
    if (knowAns === "yes") {
        for (var i = 0; i < corrAnswers.length; i++) {
            console.log(corrAnswers[i]);

        }
        console.log(chalk.bold.yellow('Thanks for playing Fun Quiz!!!'));
    } else {
        console.log(chalk.bold.yellow('Thanks for playing Fun Quiz!!!'));
    }
} else {
    console.log(chalk.bold.yellow('Thanks for playing Fun Quiz!!!'));
}