import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const loadMoreBtn = document.querySelector(".load-more");
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
    const markup = images
        .map(img => `
        <li class="gallery-card">
            <a href="${img.largeImageURL}">
                <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
            </a>
        </li>
    `).join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("is-visible");
}

export function hideLoader() {
  loader.classList.remove("is-visible");
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove("hidden");
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add("hidden");
}