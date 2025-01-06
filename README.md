# DOM-Manipulation :
This project is designed to help you learn and practice DOM (Document Object Model) manipulation in JavaScript. 
The HTML file provides various scenarios, and the JavaScript file contains code examples for common DOM tasks.


## Project Structure :

```arduino
.
|-- Don't touche
|   |-- adv.css
|   `-- adv.js
|-- Examples
|   |-- example1
|   |   |-- Element.html
|   |   `-- script.js
|   |-- example2
|   |   |-- Element.html
|   |   `-- script.js
|   |-- example3
|   |   |-- Element.html
|   |   `-- script.js
|   |-- example4
|   |   |-- Element.html
|   |   `-- script.js
|   |-- example5
|   |   |-- Element.html
|   |   `-- script.js
|   |-- example6
|   |   |-- Element.html
|   |   `-- script.js
|   |-- example7
|   |   |-- Element.html
|   |   `-- script.js
|   `-- example8
|       |-- Element.html
|       `-- script.js
|-- README.md
|-- TryWithYourSelf
|   |-- learn.css
|   |-- learn.js
|   `-- try.html
`-- photo
    |-- image-1.gif
    `-- image-2.gif
```

<br>

## Notes :

> Install VS Code and extensions like Live Server to test each code. **.** <br>
> You can try yourself in the [try.html](./learn/try.html) file in the TryWithYourSelf folder **.**

<br>

## All Example with Element :

### **Example 1:** Change Text (Element 1) **:**

```html
<h2 id="text">Initial text</h2>
```

```js
var text = document.getElementById("text");
text.textContent = "Hello World";
```

> For more details, check [Change Text Example](./Examples/example1/Element.html).

### **Example 2:** Change Text with Button (Element 2) **:**

```html
<h2 id="change1">This is the text</h2>
<button onclick="change()">Change Text</button>
```

```js
let text = document.getElementById("change1");

function change() {
    text.innerHTML = "text was changed";
};

```

> For more details, check [Button Example](./Examples/example2/Element.html).


### **Example 3:** Toggle Text (Element 3) **:**

```html
<h2 id="change2">This is the text</h2>
<button id="btn">Toggle Text</button>
```

```js
let text2 = document.getElementById("change2");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    var CurrentText = "Change this text with Button";
    text2.innerHTML = (text2.innerHTML === CurrentText) ? "text was changed" : CurrentText;
});
```

> For more details, check [Toggle Text Example](./Examples/example3/Element.html).

### **Example 4:** Change Image (Element 4) **:** 

```html
<img id="img" src="../../photo/image-1.gif" alt="Image">
<button id="btn2">Change Image</button>
```

```js
const img = document.getElementById("img");
let btn2 = document.getElementById("btn2");

btn2.onclick = function () {
    img.src = "../../photo/image-2.gif";
};
```

> For more details, check [Change Image Example](./Examples/example4/Element.html).

### **Example 5:** Work with Attributes (Element 5) **:** 

```html
<button class="btn1" data-info="This is some extra information!">Click Me</button>
<h2 id="info"></h2>
```

```js
const button = document.querySelector('.btn1');
let text3 = document.getElementById("info");

button.addEventListener('click', function () {
    const info = button.getAttribute('data-info');
    text3.innerHTML = info;
});
```

> For more details, check [Attributes Example](./Examples/example5/Element.html).

### **Example 6:** Change Style (Element 6) **:** 

```html
<h2 id="toBlue">This text will be styled</h2>
<button onclick="changeColor()">Change Color</button>
```

```js
const blue = document.getElementById("toBlue");

function changeColor() {
    blue.style.color = "red";
};
```

> For more details, check [Change Style Example](./Examples/example6/Element.html).

### **Example 7:** Toggle Class (Element 7) **:** 

```html
<h2 id="toggleClass">Text with Class</h2>
<button onclick="toggleClass()">Toggle Class</button>
```

```js
function toggleClass() {
    document.getElementById("toggleClass").classList.toggle("new-class");
};
```

> For more details, check [Toggle Class Example](./Examples/example7/Element.html).


### **Example 8:** Add and Remove Elements (Element 8) **:** 

```html
<button onclick="addElement()">Add Element</button>
<div id="container"></div>
```

```js
function addElement() {
    let div = document.createElement("div");
    div.textContent = "New element added";
    document.getElementById("container").appendChild(div);
};
```

> For more details, check [Add and Remove Elements Example](./Examples/example8/Element.html).

## Key Concepts :

**DOM Access :**

 > Use methods like `getElementById`, `querySelector`, and `getElementsByClassName` to access elements **.**

**DOM Manipulation :**

> Change text using `innerHTML` or `textContent`.
> Modify attributes using `setAttribute` and `getAttribute`.
> `Add` or `remove` CSS classes with `classList`.

**Event Handling :**

> Use `addEventListener` to bind events like `click`, `mouseover`, etc.
> Inline event handlers (e.g., onclick) can also be used but are less flexible.

**Dynamic Styling :**

> Update styles directly using `element.style.property`.

**Element Creation :**

> Use `createElement`, `appendChild`, and `removeChild` to dynamically add or remove elements.

<br>

## Resources :

### [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
### [W3school](https://www.w3schools.com/howto/)
