import { galleryItems } from './gallery-items.js';
const galleryRef = document.querySelector('.gallery');

//Функция отрисовки галереи
function galleryRender(arrayOfImages) {
    const imagesArr = galleryItems.map;
    galleryItems.map(({ preview, original, description }) => {
        return (`<div class="gallery__item">
                            <a class="gallery__link" href="large-image.jpg">
                                <img
                                class="gallery__image"
                                src="${preview}"
                                data-source="${original}"
                                alt="${description}"
                                />
                            </a>
                        </div>`);
    });
    galleryRef.insertAdjacentHTML('beforeend', imagesArr.join(''));
}
galleryRender(galleryItems);

galleryRef.addEventListener('click', openOriginalImage); //Слушатель клика на галереи div
function openOriginalImage(event) {
    event.preventDefault(); // отменяем дефолтное поведение ссылок

        if (event.target.classList.contains('gallery__image')) {
        const instance = basicLightbox.create(
                        `<img src="${event.target.dataset.source}" width="800" height="600">`,
            {
                onShow: instance => {
                    window.addEventListener('keydown', onEscClick);
                },
            },
            {
                onClose: instance => {
                    window.removeEventListener('keydown', onEscClick);
                },
                },
        );
            
            function onImgClick(event) {
                event.preventDefault();
                if (event.target.nodeName !== 'IMG') {
                    return;
                }
                instance.show();
            }
        
        function onEscClick(event) {
            if (event.code === 'Escape') {
                instance.close();
                return;
            }
        }
    } else {
        alert('Мы в Вас верим, что вы сможете попасть по картинке ))))))');
    }
}