const toggle = document.querySelector('#toggle-switch');
const body = document.querySelector('body');


toggle.addEventListener( 'change', function() {

    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
      
});