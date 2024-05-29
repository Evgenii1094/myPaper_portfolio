const tabsPlusButton = (tabsSelector, contentSelector, parentSelector, buttonSelector) => {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(contentSelector),
        tabsParent = document.querySelector(parentSelector);

    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('is-hide');
            item.classList.remove('is-show');
        });

        tabs.forEach(item => {
            item.classList.remove('is-active');
        });
    };

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('is-show');
        tabsContent[i].classList.remove('is-hide');
        tabs[i].classList.add('is-active');
    };

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('js-tab-link')) {
            const tabIndex = target.getAttribute('data-tab-index');
            hideTabContent();
            showTabContent(tabIndex);
        }
    });

    if (buttonSelector) {
        const buttons = document.querySelectorAll(buttonSelector);

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tabIndex = e.target.getAttribute('data-tab-index');
                hideTabContent();
                showTabContent(tabIndex);
            });
        });
    }

    hideTabContent();
    showTabContent();
};

export default tabsPlusButton;
