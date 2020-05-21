window.onload = () => {
    const images = document.querySelectorAll('.block-image-container')
    const mainTitle = document.querySelector('.main-title')

    const onImageClick = (image) => {
        image.classList.toggle('block-image-preview')
    }
    const checkMainTitle = () => {
        const sY = window.window.scrollY;
        if (sY > 0) {
            mainTitle.classList.add('main-title-sticky')
        } else {
            mainTitle.classList.remove('main-title-sticky')
        }
    }

    checkMainTitle()

    images.forEach(image => {
        image.addEventListener('click', onImageClick.bind(null, image.querySelector('.block-image-container-bg')))
    })
    window.onscroll = checkMainTitle
}


