import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import small1 from '../img/small-image1.jpg';
import large1 from '../img/large-image1.jpg';
import small2 from '../img/small-image2.jpg';
import large2 from '../img/large-image2.jpg';
import small3 from '../img/small-image3.jpg';
import large3 from '../img/large-image3.jpg';
import small4 from '../img/small-image4.jpg';
import large4 from '../img/large-image4.jpg';
import small5 from '../img/small-image5.jpg';
import large5 from '../img/large-image5.jpg';
import small6 from '../img/small-image6.jpg';
import large6 from '../img/large-image6.jpg';
import small7 from '../img/small-image7.jpg';
import large7 from '../img/large-image7.jpg';
import small8 from '../img/small-image8.jpg';
import large8 from '../img/large-image8.jpg';
import small9 from '../img/small-image9.jpg';
import large9 from '../img/large-image9.jpg';

export const images = [
  {
    preview: small1,
    original: large1,
    description: 'Plan your project',
  },
  {
    preview: small2,
    original: large2,
    description: 'Generate ideas',
  },
  {
    preview: small3,
    original: large3,
    description: 'Save your ideas',
  },
  {
    preview: small4,
    original: large4,
    description: 'Choose a workspace',
  },
  {
    preview: small5,
    original: large5,
    description: 'Move places',
  },
  {
    preview: small6,
    original: large6,
    description: 'Gather your team',
  },
  {
    preview: small7,
    original: large7,
    description: 'Take breakes',
  },
  {
    preview: small8,
    original: large8,
    description: 'Choose good working enviroment',
  },
  {
    preview: small9,
    original: large9,
    description: 'Have team meeting',
  },
];


const galleryList = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

galleryList.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});