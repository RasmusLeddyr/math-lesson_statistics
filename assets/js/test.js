// Function to update the frequency-sum values based on input values
function update() {
  const Divs = document.querySelectorAll(".stats div");
  let SumHyp = 0;

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
  Divs.forEach((div) => {
    const HypElement = div.querySelector(".hyppighed");
    const FrekElement = div.querySelector(".frekvens");
    const SumFrekElement = div.querySelector(".summeret-frekvens");

    if (HypElement && FrekElement) {
      const Hyp = parseFloat(HypElement.value);
      if (!isNaN(Hyp)) {
        SumHypNew += Hyp;
        FrekElement.textContent = (Hyp / SumHyp) * 100 + "%";
        SumFrekElement.textContent = (SumHypNew / SumHyp) * 100 + "%";
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
