// javascript file for hangman game

// This array asigns the possible hangman words
var vehicleArray = ["CAR", "TRUCK", "PLANE", "BOAT"];

// Computer to generate random word from vehicleArray
var randNum = Math.floor((Math.random()*vehicleArray.length));

// Select word from vehicleArray and store its value in randVehicle
var randVehicle = vehicleArray[randNum];
// Declare several variables

// To be used to store separate characters of selected vehicle array item
var stringArray = []; 
// To overwrite stringArray with "_" characters
var dashedArray = []; 
// Stores users remaining guesses
var guessesRemaining = 10;
// Stores letters guessed by user
var lettersGuessedArray = [];

	// Loops through the length of randVehicle
	// Places each individual character in its own element of stringArray
	// Creates dashedArray of equal length, but with "_" character
	// Replaces currentWordDisp with dashedArray, printed as a string
	// using the join function
	for (var i = 0; i < randVehicle.length; i++) 
			{		
			stringArray[i] = randVehicle.charAt(i).toUpperCase();
			dashedArray[i] = "_";	
		    document.getElementById("currentWordDisp").innerHTML = dashedArray.join(" ");	
		    }	

// Begins event listener to capture keypresses upon release of key
document.onkeyup = function()
	{
		// Tests if user has used up allotted guesses
	if (guessesRemaining > 0)
		{ 	
			// Capture keyCode in keyPressed variable 
		var keyPressed = event.which || event.keyCode;
		var character = String.fromCharCode(keyPressed);
		console.log (character);
		if (lettersGuessedArray.join(" ").indexOf(character) == -1)
			{ 
			guessesRemaining--;
			if (guessesRemaining==0)
				{
					document.getElementById("gameStats").innerHTML="<h1>YOU LOSE!</h1>";
					// document.getElementById("mainText").innerHTML="YOU LOSE!";
					// document.write("YOU LOSE");
				}
			lettersGuessedArray.push(character);
			console.log(lettersGuessedArray);
			}	



		for (var i = 0; i < randVehicle.length; i++) 
			{						
				if (character == stringArray[i])
				{
					dashedArray[i]=stringArray[i];
					if (dashedArray.join(" ").indexOf("_") == -1)
					{	
						document.getElementById("gameStats").innerHTML="<h1>YOU WIN!</h1>";
						// document.getElementById("mainText").innerHTML="YOU WIN!"
						// document.write("YOU WIN")
					}
				}			
		    }

		    document.getElementById("currentWordDisp").innerHTML = dashedArray.join(" ");
			document.getElementById("guessRemainDisp").innerHTML = "Guesses Remaining: " + guessesRemaining;
			document.getElementById("lettersGuessedDisp").innerHTML = "Letters Guessed: " + lettersGuessedArray;
		} 
		
		// document.getElementById("gameStats").innerHTML="<h1>YOU LOSE!</h1>";
		// else {document.getElementById("mainText").innerHTML="YOU LOSE!"}
		// document.write("YOU LOSE")
	}

	

