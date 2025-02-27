const hamburgerMenu = () => {
    const hamburgerBtn = document.querySelector('.header__hamburger'),
          header = document.querySelector('.header'),
          overlay = document.querySelector('.overlay');

    hamburgerBtn.addEventListener('click', () => {
        header.classList.toggle('is-open');

        if (header.classList.contains('is-open')) {
            document.body.style.overflow = 'hidden';
            overlay.style.display = 'block';
            header.style.overflow = 'visible';
        } else {
            document.body.style.overflow = '';
            overlay.style.display = 'none';
            header.style.overflow = 'hidden';
        }
    });
}

export default hamburgerMenu;
