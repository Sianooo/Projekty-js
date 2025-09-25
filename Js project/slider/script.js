const myRange = document.querySelector("#myRange");
const howMuchIsIt = document.querySelector(".howMuchIsIt");

function updateValue() {
  const val = myRange.value;
  howMuchIsIt.textContent = val;

  const sliderWidth = myRange.offsetWidth;
  const newPosition = (val / 100) * sliderWidth;

  howMuchIsIt.style.left = `${newPosition}px`;
}

myRange.addEventListener("input", updateValue);
updateValue();
