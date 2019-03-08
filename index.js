var y = Math.floor(Math.random() * 100 + 1);

var guess = 0;
var guessfield = document.getElementById("guessField");
var guessTextOutput = document.getElementById("guessText");

var resultText = document.getElementById("result");
var historyList = document.getElementById("historyID")
var repeatId = document.getElementById("repeat")
var myArray = new Array()

var timer = document.getElementById('clock');
var timeLeft = 30;
var timerId = setInterval(countdown, 1000);

var submittButton = document.getElementById('submitguess');
var historyText = document.getElementById("historyID");


document.getElementById('startOver').onclick = function() {
	timeLeft = 30;
	historyText.innerHTML = " "; 
	resultText.innerHTML = " ";
	guessTextOutput.innerHTML = "Guess remaining:  ";
	resultTime = 0;
}

submittButton.onclick = function() {
	var x = document.getElementById("guessField").value;
	if (guess < 10) 
	{
		if (x > 0 && x < 101)
		{	
			guess++;

			checkRepeat(x);

			if (x == y) 
			{
				document.body.style.backgroundColor = "blue";
				alert("Congratulations!! You guessed it right in " + guess + " guesses");

			} else if (x > y) {
				historyText.innerHTML += '<p>'+ x + " (too high)" + '</p>';
				guessTextOutput.innerHTML = "Guess remaining: " + (10 - guess); 
				resultText.innerHTML = "Sorry! Try a smaller number";
				guessfield.value = " ";
			} else {
				historyText.innerHTML += '<p>'+ x + " (too low)" + '</p>';
				guessTextOutput.innerHTML = "Guess remaining: " + (10 - guess); 
				resultText.innerHTML = "Sorry! Try a bigger number";
				guessfield.value = " "; 
			}
			myArray.push(x);
			console.log(myArray);
		}
	} else {
		document.getElementById("guessText").innerHTML = "You have used all 10 guesses";
	}
}

function checkRepeat(number) {
	for (var i = 0; i < myArray.length; i++)
	{
		if (i > 0) {
			if (number == myArray[i]) 
			{
				repeatId.innerHTML = "You have typed this number! Try another one";
			} else {
				repeatId.innerHTML = " ";	
			}
		}
	}
}

function countdown() {
	if (timeLeft == 0) 
	{
        clearTimeout(timerId);
        timer.innerHTML = "Time's up! Press restart to start over";
      } else {
        timer.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        if (submittButton.addEventListener('click', function() {
        	timeLeft = 30;
        }));
      }
}
