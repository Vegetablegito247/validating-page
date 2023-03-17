let bars = document.querySelector('.fa-bars');
let closex = document.querySelector('.fa-x');
let pop_modal = document.querySelector('.pop-modal');

bars.addEventListener('click', () => {
    document.querySelector('.list-item').style.display = 'block';
    pop_modal.style.display = 'block';

    pop_modal.addEventListener('click', () => {
        document.querySelector('.list-item').style.display = 'none';
        pop_modal.style.display = 'none';
    });
});

closex.addEventListener('click', () => {
    document.querySelector('.list-item').style.display = 'none';
    pop_modal.style.display = 'none';
});