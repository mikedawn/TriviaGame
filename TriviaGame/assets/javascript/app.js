 
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

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showQuestions(questions, quizContainer) {
		
		var output = [];
		var answers;

		
		for (var i = 0; i < questions.length; i++) {

			
			answers = [];

			
			for (letter in questions[i].answers) {

				
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

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer) {

		
		var answerContainers = quizContainer.querySelectorAll('.answers');

		
		var userAnswer = '';
		var numCorrect = 0;

		
		for (var i = 0; i < questions.length; i++) {

			
			userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

		
			if (userAnswer === questions[i].correctAnswer) {
				
				numCorrect++;

				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else {
				
				answerContainers[i].style.color = 'red';
			}
		}

	
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function () {
		showResults(questions, quizContainer, resultsContainer);
	}

}