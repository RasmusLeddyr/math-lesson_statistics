// Function to update the frequency-sum values based on input values
function update() {
  const frequencyDivs = document.querySelectorAll(".stats div");
  let Sum = 0;

  frequencyDivs.forEach((div) => {
    const frequencyInput = div.querySelector(".frequency");
    const sumElement = div.querySelector(".frequency-sum");

    // Ensure both frequency input and sum element exist
    if (frequencyInput && sumElement) {
      const frequencyValue = parseFloat(frequencyInput.value);

      // Check if frequencyValue is a valid number (not NaN)
      if (!isNaN(frequencyValue)) {
        Sum += frequencyValue; // Add the current frequency to the accumulated Sum
        sumElement.textContent = Sum; // Update the sum display for this div
      }
    }
  });
}

// Listen for input changes to update values dynamically
const frequencyInputs = document.querySelectorAll(".stats .frequency");
frequencyInputs.forEach((input) => {
  input.addEventListener("input", update);
});

// Initial update when the page loads
update();
