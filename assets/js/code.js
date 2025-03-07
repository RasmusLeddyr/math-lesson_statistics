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

  // Update frekvens bar graph
  const FrekBars = document.querySelector(".frek-bars");
  FrekBars.innerHTML = "";
  Divs.forEach((div) => {
    const FrekElement = div.querySelector(".frekvens");
    const Observation = div.querySelector(".observation");
    const Bar = document.createElement("div");
    if (FrekElement) {
      Bar.style.height = FrekElement.textContent;
      FrekBars.appendChild(Bar);
      Bar.textContent = Observation.textContent;
    }
  });

  // Update summeret frekvens bar graph
  const SumBars = document.querySelector(".sum-bars");
  SumBars.innerHTML = "";
  Divs.forEach((div) => {
    const SumFrekElement = div.querySelector(".summeret-frekvens");
    const Observation = div.querySelector(".observation");
    const Bar = document.createElement("div");
    if (SumFrekElement) {
      Bar.style.height = SumFrekElement.textContent;
      SumBars.appendChild(Bar);
      Bar.textContent = Observation.textContent;
    }
  });
}

// Update on input change
const HypInputs = document.querySelectorAll(".stats .hyppighed");
HypInputs.forEach((input) => {
  input.addEventListener("input", update);
});

// Update when the page loads
update();
