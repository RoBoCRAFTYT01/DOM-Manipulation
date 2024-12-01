var text, text2, text3, btn, btn2; // var

//innerHTML ( Element 1 )

text = document.getElementById("text");

text.textContent = "Hello World";

// function OnClick ( Element 2 )

text = document.getElementById("change1");

function change() {
    text.innerHTML = "text was changed";
};

// Event Click and Return it ( Element 3 )

text2 = document.getElementById("change2");
btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    var CurrentText = "Change this text with Button";

    if (text2.innerHTML === CurrentText) {
        text2.innerHTML = "text was changed";
    } else {
        text2.innerHTML = CurrentText;
    };
});

// Change image src ( Element 4 )

const img = document.getElementById("img");
btn2 = document.getElementById("btn2");

btn2.onclick = function () {
    img.src = "./photo/image-2.gif";
};


// ( .set, .get, .remove, .toggle, .has )Attribute(s) ( Element 5 )


/*

.hasAttribute(name): Returns true if the attribute exists, otherwise false.
.setAttribute(name, value): Adds or updates an attribute on the element.
.getAttribute(name): Retrieves the value of the attribute.
.removeAttribute(name): Completely removes the attribute from the element.
.toggleAttribute(name): Adds the attribute if it doesn't exist, and removes it if it does.

*/

const button = document.querySelector('.btn1');
text3 = document.getElementById("info");


button.addEventListener('click', function () {
    if (button.hasAttribute('data-info')) {
        const info = button.getAttribute('data-info');

        text3.innerHTML = info;
        console.log(true);
    } else {
        var info = button.setAttribute('data-info', "This is some extra information!");
        info = button.getAttribute('data-info');
        text3.innerHTML = info;

        console.log(false);
    };
});



// Js can change style like Css ? ( Element 6 )


const red = document.getElementById("toBlue");

red.style.color = "red";

const blue = document.getElementById("ClickToBlue");

function changeColor() {
    blue.style.color = "red";
};


// more option in js to work with css ( Element 7 )

const togg = document.getElementById("toggle");
let state = true

function returnColor() {

    if(state) {
        togg.classList.add("change");
        state = false;
    } else {
        togg.classList.remove("change");
        state = true;
    }

    // togg.classList.toggle("change"); <-- this another way to make toggle button
};


// how to add and remove element ? ( Element 8 )


const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const container = document.getElementById('container');

addButton.addEventListener('click', () => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('new-container');

    newDiv.innerHTML = `
        <h1>test</h1>
        <p>my description i will add it</p>
        <button>join</button>
    `;

    container.appendChild(newDiv);
});

removeButton.addEventListener('click', () => {
    const lastElement = container.lastElementChild;

    if (lastElement) {
        container.removeChild(lastElement);
    }
});