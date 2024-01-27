const score0 = document.getElementById('score--0');
const score1=document.getElementById('score--1');
const currentscore0 = document.getElementById('current--0');
const currentscore1=document.getElementById('current--1');
const dice=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
// its same 

// variables
let current, score, active;
let playing=true;
const WINNING_SCORE=10;

// function 

const init=() =>{
    score0.textContent=score1.textContent=0;
    currentscore0.textContent=currentscore1.textContent=0;
    current=0;
    score=[0, 0];
    playing=true;
    active=0;

    dice.classList.add('hidden');
    document.querySelector('#name--0').textContent="Player 1";
    document.querySelector(`#name--1`).textContent="Player 2";
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--lose');
    player1.classList.remove('player--winner');
    player0.classList.remove('player--lose');
}

const swtichPlayer= () => {
    document.getElementById(`current--${active}`).textContent=0;
    current=0;
    active=active===0 ? 1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    dice.classList.add('hidden');
}

const addToScore= () => {
    score[active]+=current;
    current=0;
    document.getElementById(`score--${active}`).textContent=score[active];
    dice.classList.add('hidden');
}

// envent
init();

btnRoll.addEventListener('click', () => {
    if(playing) {
        const diceValue = Math.trunc(Math.random() * 6)+1;

        dice.classList.remove('hidden');
        dice.src=`dice-${diceValue}.png`;
    
        if(diceValue !==1) {
            current+=diceValue;
            document.getElementById(`current--${active}`).textContent=current;
        }
        else {
            // switch to next player
            swtichPlayer();
        }
    }
})


btnHold.addEventListener('click', () => {
    addToScore();
    if(playing) {
        if (score[active] >= WINNING_SCORE) {
            playing=false;
            document.querySelector(`.player--${active}`).classList.toggle('player--winner');
            document.querySelector(`#name--${active}`).textContent="You win⭐";
            document.querySelector(`.player--${active===1?0:1}`).classList.toggle('player--lose');
            document.querySelector(`#name--${active===1?0:1}`).textContent="You lose⭕";
            dice.classList.add('hidden');
    } else {
        swtichPlayer();
    }
}
});

btnNew.addEventListener('click', init);
