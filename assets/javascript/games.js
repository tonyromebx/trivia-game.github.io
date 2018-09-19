
// Create Timer

var timer = 30;
var countDownTimer = setInterval(function(){
	timer--;
	$(".timerNumber").text(timer);
	if(timer <= 0)
		openOveraly();		
},1000);

var myQuestions = [
	{
	question: "Who was Curtis Blows first DJ",
	answers: {
		a: 'A.J.',
		b: 'Joseph Simmons',
		c: 'Jam Master Jay'
	},
	correctAnswer: 'b'
	},
	{
	question: "What was Snoop Dogs first Group",
	answers: {
		a: '213',
		b: 'Dog Pound',
		c: 'Death Row'
	},
	correctAnswer: 'a'
	},
	{
	question: "Which name is not an alias of Sean Combs",
	answers: {
		a: 'Puff Daddy',
		b: 'P Diddy',
		c: 'Puff John'
	},
	correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){

		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<div>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</div>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){

		var answerContainers = quizContainer.querySelectorAll('.answers');

		var userAnswer = '';
		var numCorrect = 0;

		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			if(userAnswer===questions[i].correctAnswer){

				numCorrect++;
			}
			
		}

		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}

	var modal = document.getElementById('myModal');
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];

	function openOveraly() {
	    modal.style.display = "block";
	}

	span.onclick = function() {
	    modal.style.display = "none";
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}