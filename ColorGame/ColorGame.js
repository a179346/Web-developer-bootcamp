var squares = document.querySelectorAll(".square");
var missSpan = document.querySelector("#miss");
var messageSpan = document.querySelector("#message");
var resetBtn = document.getElementById("reset");

const EasyCnt = 3;
const HardCnt = 6;

var CorrectRGB;
var squareCnt = HardCnt;
var missCnt = 0;
var isGameOver = false;

initial();

function initial() {

    resetBtn.addEventListener("click", reset);

    setupModeBtns();

    setupSquares();

    reset();

}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            let select = this.style.backgroundColor;
            if (select === "transparent" || isGameOver) {
                return;
            }
            if (select === CorrectRGB) {
                gameOver();
            }
            else {
                this.style.backgroundColor = "transparent";
                missCnt++;
                missSpan.textContent = missCnt;
                messageSpan.textContent = "Try again";
            }
        });
    }
}

function setupModeBtns() {
    var modeBtns = document.getElementsByClassName("mode");

    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                squareCnt = EasyCnt;
            }
            else {
                squareCnt = HardCnt;
            }
            reset();
        });
    }
}

function gameOver() {
    messageSpan.textContent = "Correct!";
    isGameOver = true;
    for (let i = 0; i < squareCnt; i++) {
        squares[i].style.backgroundColor = CorrectRGB;
    }
    resetBtn.textContent = "Play again?"
}

function getRandom(min, max) {
    var range = max - min + 1;
    return Math.floor((Math.random() * range) + min);
}

function getRandomRGB() {
    return "rgb(" + getRandom(0, 255) + ", " + getRandom(0, 255) + ", " + getRandom(0, 255) + ")";
}

function reset() {
    for (var i = 0; i < squares.length; i++) {
        if (i < squareCnt) {
            squares[i].style.backgroundColor = getRandomRGB();
        }
        else {
            squares[i].style.backgroundColor = "transparent";
        }
    }
    setCorrect(getRandom(0, squareCnt - 1));
    missCnt = 0;
    missSpan.textContent = missCnt;
    isGameOver = false;
    resetBtn.textContent = "New Game"
    messageSpan.textContent = "";
}

function setCorrect(index) {
    CorrectRGB = squares[index].style.backgroundColor;
    document.getElementById("answer").textContent = squares[index].style.backgroundColor;
}