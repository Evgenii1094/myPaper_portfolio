const dropdown = (wrapperSelector, questionSelector, answerSelector, wrapperOpen = false) => {
    const wrapper = document.querySelectorAll(wrapperSelector),
        question = document.querySelectorAll(questionSelector),
        answer = document.querySelectorAll(answerSelector);

    if (wrapperOpen) {
        wrapper[0].classList.add('is-open');
        answer[0].style.maxHeight = answer[0].scrollHeight + 'px';
    }

    question.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (wrapper[i].classList.contains('is-open') || wrapper[i].classList.contains('is-active')) {
                wrapper[i].classList.remove('is-open');
                wrapper[i].classList.remove('is-active');
                answer[i].style.maxHeight = '0';
            } else {
                wrapper.forEach((item, i) => {
                    if (item.classList.contains('is-open') || item.classList.contains('is-active')) {
                        item.classList.remove('is-open');
                        item.classList.remove('is-active');
                        answer[i].style.maxHeight = '0';
                    }
                });
                wrapper[i].classList.add('is-open');
                answer[i].style.maxHeight = answer[i].scrollHeight + 'px';
            }
        });
    });
}

export default dropdown;
