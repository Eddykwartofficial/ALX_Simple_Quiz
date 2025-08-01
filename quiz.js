// Function to check if the user's answer is correct
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";
    
    // Step 2: Get the user's selected answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if user has selected an answer
    if (!selectedRadio) {
        // If no answer is selected, prompt the user to select one
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
        return;
    }
    
    // Get the value of the selected radio button
    const userAnswer = selectedRadio.value;
    
    // Step 3: Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // User's answer is correct
        document.getElementById('feedback').textContent = "Correct! Well done.";
        document.getElementById('feedback').style.color = "green";
    } else {
        // User's answer is incorrect
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        document.getElementById('feedback').style.color = "red";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);