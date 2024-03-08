// index.js
import init, { word_to_binary } from './pkg/rust_binary_translate.js';

async function run() {
    await init();

    // Get input from the HTML input box
    const inputWord = document.getElementById('inputWord').value;

    // Call the Rust function with the input
    const binaryData = word_to_binary(inputWord);

    // Convert binary data to a string
    const binaryString = binaryData.join('');

    // Display the binary data in HTML
    const outputElement = document.getElementById('output');
    outputElement.textContent = binaryString;

    console.log('Binary Data:', binaryString);
}

// Attach the run function to the global scope for simplicity
window.run = run;
