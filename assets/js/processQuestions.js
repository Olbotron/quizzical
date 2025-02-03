// Given array
const a = ["correct", "false", "wrong", "incorrect"];

// Function to apply the Fisher-Yates Shuffle
function shuffleQuestions(unshuffledArray) {

    // Iterate over the array in reverse order
    for (let i = unshuffledArray.length - 1; i > 0; i--) {

        // Generate Random Index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements
        [unshuffledArray[i], unshuffledArray[j]] = [unshuffledArray[j], unshuffledArray[i]];
    }

    shuffledArray = unshuffledArray;
    return shuffledArray;
}

// Get the shuffled array from the function
const a1 = shuffleQuestions(a); 

// Display Shuffled array
console.log("Shuffled Array: ", a1);
//document.getElementById("answer_me_this").innerHTML = "Shuffled Array : " + a1;