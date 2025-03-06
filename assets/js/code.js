// Update website
function update() {
  const Divs = document.querySelectorAll(".stats div");
  let SumHyp = 0;

  // Update "Summeret Hyppighed"
  Divs.forEach((div) => {
    const HypElement = div.querySelector(".hyppighed");
    const SumHypElement = div.querySelector(".summeret-hyppighed");

    if (HypElement && SumHypElement) {
      const Hyp = parseFloat(HypElement.value);
      if (!isNaN(Hyp)) {
        SumHyp += Hyp;
        SumHypElement.textContent = SumHyp;
      }
    }
  });

  let SumHypNew = 0;

  // Update "Frekvens" & "Summeret Frekvens"
  Divs.forEach((div) => {
    const HypElement = div.querySelector(".hyppighed");
    const FrekElement = div.querySelector(".frekvens");
    const SumFrekElement = div.querySelector(".summeret-frekvens");

    if (HypElement && FrekElement) {
      const Hyp = parseFloat(HypElement.value);
      if (!isNaN(Hyp)) {
        SumHypNew += Hyp;
        FrekElement.textContent = ((Hyp / SumHyp) * 100).toFixed(2) + "%";
        SumFrekElement.textContent =
          ((SumHypNew / SumHyp) * 100).toFixed(2) + "%";
      }
    }
  });

  // Update the bar graph
  const bars = document.querySelector(".bars");
  bars.innerHTML = ""; // Clear existing bars

  Divs.forEach((div) => {
    const FrekElement = div.querySelector(".frekvens");
    const bar = document.createElement("div");

    if (FrekElement) {
      const sumFrek = parseFloat(FrekElement.textContent.replace("%", ""));
      if (!isNaN(sumFrek)) {
        bar.style.height = sumFrek + "%"; // Set height based on Summeret Frekvens
        bars.appendChild(bar);
      }
    }
  });
}

// Listen for input changes to update values dynamically
const HypInputs = document.querySelectorAll(".stats .hyppighed");
HypInputs.forEach((input) => {
  input.addEventListener("input", update);
});

// Initial update when the page loads
update();
