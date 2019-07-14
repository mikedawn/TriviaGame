
var myQuestions = [
	{
		question: "What NFL team has won the most Super Bowl games to date?",
		answers: {
			a: 'Patriots',
			b: 'Cowboys',
			c: 'Patriots and Steelers'
		},
		correctAnswer: 'c'
	},
	{
		question: "Which two NFL teams played in the very first Super Bowl game?",
		answers: {
			a: 'Chiefs and Packers',
			b: 'Cowboys and Giants',
			c: 'Saints and Buffalo'
		},
		correctAnswer: 'a'
	},
	{
		question: "which QB has the most super bowl rings",
		answers: {
			a: 'Dan Marino',
			b: '5Joe Montana',
			c: 'Tom Brady'
		},
		correctAnswer: 'c'
	},
	{
		question: "which QB has the most passing yards in nfl history",
		answers: {
			a: 'Brett Favre',
			b: 'Drew Brees',
			c: 'Tom Brady'
		},
		correctAnswer: 'b'
	}
];


var submitButton = $("#submitButton");
var quizContainer = $('#quiz');
var resultsContainer = $('#results');

var output = [];
showQuestions(myQuestions, quizContainer);
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
// generate quiz questions
function generateQuiz(questions, quizContainer, resultsContainer, startButton) {
	//show question



	quizContainer.html(output.join(''));
}

function showQuestions(questions, quizContainer) {
	// out answers

	var answers;


	for (var i = 0; i < questions.length; i++) {


		answers = [];


		for (letter in questions[i].answers) {

			//gives answer to question
			answers.push(
				'<label>'
				+ '<input type="radio" name="question' + i + '" value="' + letter + '">'
				+ letter + ': '
				+ questions[i].answers[letter]
				+ '</label>'
			);
		}


		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
}
function showResults() {


	var answerContainers = $('.answers');


	var userAnswer = '';
	var numCorrect = 0;


	for (var i = 0; i < myQuestions.length; i++) {


		userAnswer = $('input[name=question' + i + ']:checked').val();;
		console.log(userAnswer)

		if (userAnswer === myQuestions[i].correctAnswer) {

			numCorrect++;


			$(answerContainers[i]).css("color", "green");
		}

		else {

			$(answerContainers[i]).css("color", "red");
		}
	}


	resultsContainer.html(numCorrect + ' out of ' + myQuestions.length);
}





submitButton.on("click", showResults);


var counter = 25;
var interval = setInterval(function () {
	counter--;
	// Display 'counter' wherever you want to display it.
	if (counter <= 0) {
		clearInterval(interval);
		$('#timer').html("<h3>Times Up!</h3>");
		return;
	} else {
		$('#time').text(counter);
		console.log("Timer --> " + counter);
	}
}, 1000);





