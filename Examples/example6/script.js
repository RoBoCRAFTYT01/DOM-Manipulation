// JS can change styles like CSS? ( Element 6 )

// Select the element with id 'toBlue'
const red = document.getElementById("toBlue");

// Modify its style directly using JavaScript
red.style.color = "red"; // Changes the text color to red

// Select the element with id 'ClickToBlue'
const blue = document.getElementById("ClickToBlue");

// Function to change the color of the 'ClickToBlue' element
function changeColor() {
    blue.style.color = "red"; // Updates the text color to red when called
};