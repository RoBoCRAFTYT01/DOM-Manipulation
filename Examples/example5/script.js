// Working with Attributes: .set, .get, .remove, .toggle, .has ( Element 5 )

/*

.hasAttribute(name): Checks if an attribute exists, returns true/false.
.setAttribute(name, value): Adds or updates the value of an attribute.
.getAttribute(name): Retrieves the value of an attribute.
.removeAttribute(name): Removes an attribute entirely from the element.
.toggleAttribute(name): Toggles the existence of an attribute (adds if missing, removes if present).

*/

const button = document.querySelector('.btn1'); // Select the button element
const text3 = document.getElementById("info"); // Select the info element

button.addEventListener('click', function () {
    // Check if the 'data-info' attribute exists
    if (button.hasAttribute('data-info')) {
        const info = button.getAttribute('data-info'); // Get the value of 'data-info'

        text3.innerHTML = info; // Update the text content with the attribute value
        console.log(true); // Log true when the attribute exists
    } else {
        // Set a new 'data-info' attribute if it doesn't exist
        button.setAttribute('data-info', "This is some extra information!");
        const info = button.getAttribute('data-info'); // Retrieve the newly set attribute value

        text3.innerHTML = info; // Update the text content with the new value
        console.log(false); // Log false when the attribute was missing
    }
});
