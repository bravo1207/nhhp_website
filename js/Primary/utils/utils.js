/**
 * utils.js - Utility functions for North Houston Horse Park website
 * Last updated: 2024-08-24 14:08 - Cache Bust
 */

/**
 * Throttle function to limit how often a function is called
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

/**
 * Debounce function to prevent a function from being called until after a certain amount of time has passed
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

/**
 * Get an element by ID
 * @param {string} id - Element ID
 * @returns {HTMLElement|null} The element or null if not found
 */
function getById(id) {
  return document.getElementById(id);
}

/**
 * Get elements by selector
 * @param {string} selector - CSS selector
 * @param {HTMLElement} [parent=document] - Parent element to search within
 * @returns {NodeList} List of matching elements
 */
function getAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

/**
 * Add event listener to element(s)
 * @param {HTMLElement|NodeList} elements - Element or list of elements
 * @param {string} event - Event name
 * @param {Function} callback - Event handler function
 */
function addEvent(elements, event, callback) {
  if (elements instanceof NodeList) {
    elements.forEach(el => el.addEventListener(event, callback));
  } else {
    elements.addEventListener(event, callback);
  }
}
