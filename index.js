// index.js
import { word_to_binary } from './pkg/rust_binary_translate.js';

async function run() {
  await init();
  // Get input from the HTML input box
  const input = document.getElementById('inputWord');
  const inputWord = input.value;

  // Call the Rust function with the input
  const binaryData = word_to_binary(inputWord);

  // Convert binary data to a string
  const binaryString = binaryData.join('');
  input.value = '';

  // Display the binary data in HTML
  const outputElement = document.getElementById('output');
  outputElement.textContent = binaryString;

  console.log(`Binary Translation of "${inputWord}" is: ${binaryString}`);
}

function setup() {
  // Add an event listener to the button
  document
    .getElementById('translateButton')
    .addEventListener('click', handleClick);
}

function handleClick(event) {
  event.preventDefault();
  // Run the translate function in the wasm module
  run();
}

// Setup the event handlers
setup();
