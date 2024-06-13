export function imgTemplate(imgs) {
  const galleryElm = document.querySelector('.gallery');
  galleryElm.innerHTML = '';

  const galleryMarkup = imgs.map((img) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}" target="_blank">
          <img class="gallery-image" 
               src="${img.webformatURL}" 
               alt="${img.tags}" 
          />
        </a>
        <div class="image-details">
          <p class="text"><b>Likes</b> ${img.likes}</p>
          <p class="text"><b>Views</b> ${img.views}</p>
          <p class="text"><b>Comments</b> ${img.comments}</p>
          <p class="text"><b>Downloads</b> ${img.downloads}</p>
        </div>
      </li>
    `;
  }).join('');
  galleryElm.insertAdjacentHTML('beforeend', galleryMarkup);
}