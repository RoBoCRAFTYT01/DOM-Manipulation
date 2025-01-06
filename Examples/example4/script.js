// Change the image source when the button is clicked ( Element 4 )

const img = document.getElementById("img"); // Get the image element
let btn2 = document.getElementById("btn2"); // Get the button element

btn2.onclick = function () {
    img.src = "../../photo/image-2.gif"; // Update the image source
};

/*
** A method is a function associated with an object.
** Here, we use the 'onclick' method to assign a click event to the button.
** You can replace 'onclick' with other events like 'onchange', 'onmouseover', etc.
*/