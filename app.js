const toggle = document.querySelector('#toggle-switch');

const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const gridContainer = document.querySelector('.grid-container');
const ovrvwHeader = document.querySelector('#ovrvw-header');
const cards = document.querySelectorAll('.cards');
const greyTextElements = document.querySelectorAll('.grey-text');
const horizontalRule = document.querySelector('hr');

toggle.addEventListener( 'change', function() {
    if(this.checked) {
        body.style.color = "hsl(0, 0%, 100%)";
        body.style.backgroundColor = "hsl(230, 17%, 14%)";
        ovrvwHeader.style.color = "hsl(0, 0%, 100%)";
        wrapper.style.background = "linear-gradient(to bottom,  hsl(232, 19%, 15%) 35%, transparent 35%)";
        cards.forEach((card) => {
            card.style.backgroundColor = "hsl(228, 28%, 20%)";
            card.classList.remove("cards-light");
            card.classList.add("cards-dark");
        });
        greyTextElements.forEach((element) => {
            element.style.color = "hsl(228, 34%, 66%)";
        });
        horizontalRule.style.borderColor = "hsl(228, 34%, 66%)"; 

    } else {
        body.style.color = "hsl(230, 17%, 14%)";
        body.style.backgroundColor = "hsl(0, 0%, 100%)";
        ovrvwHeader.style.color = "hsl(228, 12%, 44%)";
        wrapper.style.background = "linear-gradient(to bottom,  hsl(225, 100%, 98%) 35%, transparent 35%)";
        cards.forEach((card) => {
            card.style.backgroundColor = "hsl(227, 47%, 96%)";
            card.classList.remove("cards-dark");
            card.classList.add("cards-light");
        });
        greyTextElements.forEach((element) => {
            element.style.color = "hsl(228, 12%, 44%)";
        });
        horizontalRule.style.borderColor = "hsl(228, 12%, 44%)";

    }

});