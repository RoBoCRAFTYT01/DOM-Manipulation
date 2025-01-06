// How to add and remove elements in the DOM (Element 8)

// Select the buttons and container element
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const container = document.getElementById('container');

// Add an event listener to the "Add Element" button
addButton.addEventListener('click', () => {
    // Create a new div element
    const newDiv = document.createElement('div');

    // Add a class to the new div for styling or identification
    newDiv.classList.add('new-container');

    // Set the HTML content of the new div
    newDiv.innerHTML = `
        <h1>test</h1>
        <p>my description i will add it</p>
        <button>join</button>
    `;

    // Append the new div to the container element
    container.appendChild(newDiv);
});

// Add an event listener to the "Remove Element" button
removeButton.addEventListener('click', () => {
    // Get the last child element of the container
    const lastElement = container.lastElementChild;

    // If the container has any children, remove the last one
    if (lastElement) {
        container.removeChild(lastElement);
    }
});
