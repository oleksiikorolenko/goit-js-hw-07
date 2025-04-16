const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

textInput.addEventListener("input", () => {
    const trimmedValue = textInput.value.trim();
    textOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue})
