const showSentence = document.querySelector("#showSentence");
const speed = document.querySelector("#speed");
const sentence = ["I", "am", "going", "to", "be", "a", "pro", "developer"];
let index = 0;
let intervalId;

function startInterval(delay) {
    clearInterval(intervalId);
    index = 0;
    showSentence.textContent = "";
    intervalId = setInterval(() => {
        showSentence.textContent += sentence[index] + " ";
        index++;
        if (index === sentence.length) {
            clearInterval(intervalId);
        }
    }, delay);
}

startInterval(200);

speed.addEventListener("input", () => {
    const delays = {1: 200, 2: 150, 3: 100, 4: 50, 5: 10};
    startInterval(delays[speed.value] || 200);
});