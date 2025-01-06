// textContent vs innerHTML ( Element 1 )

var text = document.getElementById("text");

// Update the text content of the element
text.textContent = "Hello World"; // Sets plain text (safer and faster)

// You can also use text.innerHTML for HTML content
// Example: text.innerHTML = "<b>Hello World</b>"; // Allows HTML tags
