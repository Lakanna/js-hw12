function createMarcup({ hits, totalHits }) {
  return hits
    .map(
      ({
        tags,
        comments,
        likes,
        downloads,
        views,
        largeImageURL,
        webformatURL,
      }) => {
        return `
        <li class="card-container">
           <a href="${largeImageURL}" class="img-container">
             <img src="${webformatURL}" alt="${tags}" class="card-img">
           </a>
           <ul class="info-container">
             <li class="card-info">Comments<span class="bold">${comments}</span></li>
             <li class="card-info">Likes<span class="bold"> ${likes}</span></li>
             <li class="card-info">Downloads<span class="bold"> ${downloads}</span></li>
             <li class="card-info">Views<span class="bold"> ${views}</span></li>
           </ul>
      </li>`;
      }
    )
    .join('');
}

export default createMarcup;
