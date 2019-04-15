import data from '../assets/data/carousel-data.json';
import '../sass/main.scss';
import Glide from '@glidejs/glide';


data.carousel.forEach((carouselItem, index)  => {
    let bullet = bulletTemplate(index);
    let template = itemCarouselTemplate(carouselItem);
    renderCarouselItem(template, '.glide__slides');
    renderCarouselItem(bullet, '.glide__bullets');
});

function itemCarouselTemplate(carouselItem){
    let template = `
    <div class="glide__slide">
        <figure>
            <img src="${carouselItem.image}" />
        </figure>
        <p class="slide__text grid">${carouselItem.text}</p>
    </div>`;
    return template;
}

function bulletTemplate(index) {
    let template = `<button class="glide__bullet" data-glide-dir="=${index}"></button>`;
    return template;
}

function renderCarouselItem(carouselItem, container){
    const $container = document.querySelector(container);
    $container.innerHTML += carouselItem;
}

function initializeCarousel(){
    const glide = new Glide('.glide').mount();
}

initializeCarousel();

const $hamburguer = document.querySelector('.header__hamburguer');
const $header = document.querySelector('.header');
$hamburguer.addEventListener('click', event => {
    $header.classList.toggle('open-menu');
});

const $menuItem = document.querySelectorAll('.nav__item');
$menuItem.forEach(item => {
    item.addEventListener('click', event => {
        let clickedItem = event.currentTarget;
        const sublist = clickedItem.querySelector('.nav__sublist');
        sublist.classList.toggle('open-submenu');
    });
});