const knife = document.querySelector(".knife-container img");
const startButton = document.querySelector(".start-button");
let reactionTime;

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  knife.style.display = "block";
  const startTime = Date.now();
  knife.addEventListener("click", () => {
    reactionTime = Date.now() - startTime;
    alert(`Your reaction time was ${reactionTime}ms!`);
    resetGame();
  });
  setTimeout(() => {
    alert("Too slow! Try again.");
    resetGame();
  }, 3000);
});

function resetGame() {
  knife.style.display = "none";
  startButton.style.display = "block";
}