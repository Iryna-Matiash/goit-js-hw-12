import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
let lightbox = new SimpleLightbox(".gallery a");

export function displayImages(images, currentPage) {
    if (currentPage === 1) {
        clearGallery();
    }

    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="img-card">
            <a href="${largeImageURL}">
                <img 
                    src="${webformatURL}" 
                    alt="${tags}" 
                    data-source="${largeImageURL}" 
                />
            </a>
            <div class="image-info">
                <p><strong>Likes:</strong> ${likes}</p>
                <p><strong>Views:</strong> ${views}</p>
                <p><strong>Comments:</strong> ${comments}</p>
                <p><strong>Downloads:</strong> ${downloads}</p>
            </div>
        </li>`).join("");

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}


