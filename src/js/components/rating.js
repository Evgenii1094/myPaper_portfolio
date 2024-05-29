const rating = () => {
    const ratingContainer = document.querySelector('.js-rating');
    const stars = ratingContainer.querySelectorAll('.js-star');
    let selectedRating = 0;

    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('mouseover', function () {
            resetStars();
            highlightStars(i + 1);
        });

        stars[i].addEventListener('mouseout', function () {
            resetStars();
            highlightStars(selectedRating);
        });

        stars[i].addEventListener('click', function () {
            setRating(i + 1);
        });
    }

    function resetStars() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.remove('is-active');
        }
    }

    function highlightStars(count) {
        for (let i = 0; i < count; i++) {
            stars[i].classList.add('is-active');
        }
    }

    function setRating(count) {
        selectedRating = count;
        resetStars();
        highlightStars(count);
    }
}

export default rating;
