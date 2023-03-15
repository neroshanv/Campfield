const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

// we want to take current score is for player one and add one ot it and then update this span to have that new score.
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
//we need to track to see if we are still playing the game or not
//we need a boolean
//if anyone hits the winning score, if anybody hits five in our case
let isGameOver = false;


p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        // score stops incromenting since p1Score is === to winningScore and that also means the game is over
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-sucess');
            p2Display.classList.add('has-text-danger');
            p2Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
    //change the text to whatever the new score is.
    // if you click, we add one ot it and then we update that display
    p1Display.textContent = p1Score;
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        // score stops incromenting since p2Score is === to winningScore and that also means the game is over
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p2Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
    //change the text to whatever the new score is.
    // if you click, we add one ot it and then we update that display
    p2Display.textContent = p2Score;
})

// This is for when changing the score while playing so we are trying to prevent cheating
winningScoreSelect.addEventListener('change', function () {
    // (this) is referred to specific object that we are listening for in event
    // updating winningScore will be a string and we want it to be a number, so we need to turn it into a number
    // parseInt will take a string and get a number out of it
    winningScore = parseInt(this.value);
    // passing this as callback
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    // we need to update score display after we click reset button
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    // when somebody wins we need to undisable both
    p2Button.disabled = false;
    p2Button.disabled = false;
}