1. What is the difference between  **getElementById, getElementsByClassName, and querySelector / querySelectorAll**
   **Answer:**
   **getElementById** → finds one element by its unique id.
   **getElementsByClassName** → finds all elements with the same class and return array like object.
   **querySelector** → finds the first element that matches a CSS selector.
   **querySelectorAll** → finds all elements that match a CSS selector and return array like node list.

   ---
2. How do you  **create and insert a new element into the DOM** ?
   **Answer:**

   ```javascript
   const containerDiv = document.getElementById('container');
   const newParagraph = document.createElement('p');
   newParagraph.textContent = 'This paragraph was added dynamically with JavaScript.';
   containerDiv.appendChild(newParagraph);
   ```
   ---
3. What is **Event Bubbling** and how does it work
   **Answer:** when an event happens on an element, it first runs on that element, then moves upward through its parents.

   ---
4. What is **Event Delegation** in JavaScript? Why is it useful?
   **Answer:** instead of adding events to many child elements, you add one event listener to a parent and check which child triggered it. Useful because it saves memory and works even for new elements added later.

   ---
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   **Answer:**
   **preventDefault()** → stops the default action like stopping a form from submitting and after refresh the page.
   **stopPropagation()** → stops the event from moving up (bubbling) to parent elements.
