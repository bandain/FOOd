const hamburgerContainer = document.querySelector('.hamburgerContainer');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const ul = document.querySelector('ul');

hamburgerContainer.addEventListener('click', () => {
    
    if(hamburgerContainer.classList.contains('active')) {
        line2.style.opacity = 1;
        line1.classList.remove('rotatePlus');
        line3.classList.remove('rotateMinus')
        hamburgerContainer.classList.remove('active');
        ul.classList.remove('column');

    } else {
        line2.style.opacity = 0;
        line1.classList.add('rotatePlus');
        line3.classList.add('rotateMinus')
        hamburgerContainer.classList.add('active');
        ul.classList.add('column');
    }

})