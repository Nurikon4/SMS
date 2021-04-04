
const img = document.querySelector('.navbar__list-img')
const nameList = document.querySelector('.navbar__list-name')

const navbar = document.querySelector('.navbar__popup')
const navbarBox = document.querySelector('.navbar__popup-box')

const deleteBtn = document.querySelectorAll('.task__remove')
const deleteButton = document.querySelector('.delete')
const yes = document.querySelector('.delete__yes')
const no = document.querySelector('.delete__no')

const plus = document.querySelector('.plus__button')
const task = document.querySelector('.task-create')
const closeModal = document.querySelector('.task-create__close')

const body = document.querySelector('body')
const main = document.querySelector('.main-content')


img.addEventListener('click', () => {
    navbar.classList.remove("hidden");
});

nameList.addEventListener('click', () => {
    navbar.classList.remove("hidden");

});

document.addEventListener("click", (e) => {
    if (e.target !== navbarBox && e.target !== nameList && e.target !== img) {
        navbar.classList.add("hidden");
    }
});

plus.addEventListener('click', (e) => {
    e.preventDefault();
    task.classList.remove('hidden');
    body.style.overflowY = "hidden";
    main.classList.add('blur')
})

closeModal.addEventListener('click', () => {
    task.classList.add('hidden');
    body.style.overflowY = "";
    main.classList.remove('blur')
})

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
        deleteButton.classList.remove('hidden');
        body.style.overflowY = "hidden";
        main.classList.add('blur')
    })
}

yes.addEventListener('click', () => {
    deleteButton.classList.add('hidden');
    body.style.overflowY = "";
    main.classList.remove('blur')
})

no.addEventListener('click', () => {
    deleteButton.classList.add('hidden');
    body.style.overflowY = "";
    main.classList.remove('blur')
})