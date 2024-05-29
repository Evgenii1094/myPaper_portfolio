const form = () => {
    const feedbackForm = document.querySelector('#feedbackForm');
    const contactName = document.querySelector('#contact-name');
    const contactEmail = document.querySelector('#contact-email');
    const contactComment = document.querySelector('#contact-comment');
    const overlay = document.querySelector('.overlay');

    feedbackForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = contactName.value.trim();
        const mail = contactEmail.value.trim();
        const message = contactComment.value.trim();

        if (name === '' || mail === '' || message === '' || mail.indexOf('@') === -1) {
            return;
        }

        try {
            const rating = getRating();
            await sendFeedback({ name, mail, message, rating });

            showSuccessMessage();
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            showErrorMessage();
        }
    });

    async function sendFeedback(data) {
        const url = '/send.php';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to send feedback');
        }
    }

    function showSuccessMessage() {
        toggleOverlay(true);
        document.querySelector('.send-success').style.display = 'block';
        document.querySelector('.send-result__success-close').addEventListener('click', function () {
            toggleOverlay(false);
            document.querySelector('.send-success').style.display = 'none';
            resetForm();
        });
    }

    function showErrorMessage() {
        toggleOverlay(true);
        document.querySelector('.send-error').style.display = 'block';
        document.querySelector('.send-result__error-close').addEventListener('click', function () {
            toggleOverlay(false);
            document.querySelector('.send-error').style.display = 'none';
        });
    }

    function toggleOverlay(show) {
        document.body.style.overflow = show ? 'hidden' : 'visible';
        overlay.style.display = show ? 'block' : 'none';
    }

    function getRating() {
        return document.querySelectorAll('.js-star.is-active').length;
    }

    function resetForm() {
        contactName.value = '';
        contactEmail.value = '';
        contactComment.value = '';

        document.querySelectorAll('.js-star').forEach(star => star.classList.remove('is-active'));
    }
};

export default form;
