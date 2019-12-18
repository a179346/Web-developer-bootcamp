var btn = document.querySelector("button");
var score = document.querySelector("#score");
var time = 0;

btn.addEventListener("click", function () {
    score.textContent = (++time);
    document.body.classList.toggle("pink");
});