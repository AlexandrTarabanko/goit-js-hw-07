import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listRef = document.querySelector(".gallery"); // Привязываю список

const createGallery = galleryItems // Создаю разметку
  .map(
    (item) => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
  )
  .join("");

listRef.innerHTML += createGallery; //Добавляю разметку

// listRef.addEventListener("click", onImageClick); // Ивент по Клику

// function onImageClick(event) {
//   event.preventDefault();
//   const isImage = event.target.classList.contains("gallery__image");
//   if (!isImage) {
//     return;
//   }                                                                    // А оказывается своего слушателя добавлять не надо было (я понял это через полтора часа)

//   let lightbox = new SimpleLightbox(".gallery a", {
//     captionDelay: 250,
//     captionsData: `alt`,
//   });
// }

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: `alt`,
});
console.log(galleryItems);
