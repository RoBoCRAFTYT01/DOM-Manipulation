// More options in JS to work with CSS (Element 7)

// Select the element with id 'toggle'
const togg = document.getElementById("toggle");

// A flag to track the state of the color
let state = true;

// Function to toggle the color of the element
function returnColor() {


    // way one

    if (state) {
        // Add the 'change' class to the element, changing its color
        togg.classList.add("change");
        state = false; // Set state to false (color has changed)
    } else {
        // Remove the 'change' class, reverting the color
        togg.classList.remove("change");
        state = true; // Set state back to true (color reverted)
    }

    // Alternative method: toggling the class directly without checking state


    // way two 

    
    // togg.classList.toggle("change"); <-- This is another way to toggle the button
};
