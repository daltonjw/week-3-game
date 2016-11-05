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
		// Convert keyCode into ASCII character and store in character
		var character = String.fromCharCode(keyPressed);
		// If the character has not already been guessed, run the following
		// lettersGuessedArray.join(" ") merges array into string
		// .indexOf(character) tries to locate the character in the string
		// If it does not exist, it yields -1 value
		if (lettersGuessedArray.join(" ").indexOf(character) == -1)
			{ 
			guessesRemaining--;
			if (guessesRemaining==0)
				{
					// Replace gameStats h1 tag with "You Lose" if guesses have run out
					document.getElementById("gameStats").innerHTML="<h1>YOU LOSE!</h1>";
				}
			// If the user still has guesses
			// Add the character to the end of lettersGuessedArray
			lettersGuessedArray.push(character);
			}	


			// Loop randVehicle.length # of times
		for (var i = 0; i < randVehicle.length; i++) 
			{	
				// Test if the character is found at all in stringArray					
				if (character == stringArray[i])
				{
					// If found, replace dashedArray ith element with the real character
					dashedArray[i]=stringArray[i];
					// If there are no more dashes in the array, you win.
					if (dashedArray.join(" ").indexOf("_") == -1)
					{	
						// Replace gameStats h1 with "You Win"
						document.getElementById("gameStats").innerHTML="<h1>YOU WIN!</h1>";
					}
				}			
		    }
		    // Replaces the html on the page after each iteration
		    document.getElementById("currentWordDisp").innerHTML = dashedArray.join(" ");
			document.getElementById("guessRemainDisp").innerHTML = "Guesses Remaining: " + guessesRemaining;
			document.getElementById("lettersGuessedDisp").innerHTML = "Letters Guessed: " + lettersGuessedArray;
		} 
		
	}

	

