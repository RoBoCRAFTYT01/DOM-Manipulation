// Event Click and Toggle Text Content ( Element 3 )

let text2 = document.getElementById("change2"); // Get the text element
let btn = document.getElementById("btn"); // Get the button element

btn.addEventListener("click", () => { 
    // addEventListener is a method to attach events like 'click', 'change', etc.

    var CurrentText = "Change this text with Button"; // Define the original text

    if (text2.innerHTML === CurrentText) {
        text2.innerHTML = "text was changed"; // Update text when condition matches
    } else {
        text2.innerHTML = CurrentText; // Revert text to the original
    }
});
