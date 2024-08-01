import getImages from './js/pixabay-api';

import createMarcup from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elements = {
  searhForm: document.querySelector('.js-form'),
  imgList: document.querySelector('.js-img-list'),
};

elements.searhForm.addEventListener('submit', handlerImgSearch);

async function handlerImgSearch(evn) {
  evn.preventDefault();

  const imgForSearch = evn.currentTarget.elements.search.value;
  console.log(imgForSearch);
  const data = getImages(imgForSearch);
  data
    .then(respons => {
      if (respons.length === 0) {
        console.log('There is no content');
      }
      elements.imgList.insertAdjacentHTML('beforeend', createMarcup(respons));
      let gallery = new SimpleLightbox('.image-list a');
    })
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));

  console.log('in handler', data);
}
