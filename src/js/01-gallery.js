// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryItemsTable = galleryItems.map(({preview , original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');


const galleryMain = document.querySelector('.gallery');

galleryMain.insertAdjacentHTML('beforeend', galleryItemsTable);


const hendlerClickOnImg = (e) => {
    // preventDefault
        e.preventDefault();}

 galleryMain.addEventListener('click', hendlerClickOnImg)

 let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});



