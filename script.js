const menu = document.querySelector('#menu');

const fnav = document.querySelector('#fnav');

const close = document.querySelector('#fclose');


menu.addEventListener('click', function(){
    fnav.style.left = '0'
});

close.addEventListener('click', function(){
    fnav.style.left = '-100%'
});
