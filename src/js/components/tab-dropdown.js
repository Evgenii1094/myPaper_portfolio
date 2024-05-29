const tabDropdown = (tabsSelector, contentSelector, parentSelector) => {
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
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('is-show');
        tabsContent[i].classList.remove('is-hide');
        tabs[i].classList.add('is-active');
    }

    const createCustomDropdown = () => {
        const dropdownContainer = document.createElement('div');
        dropdownContainer.classList.add('tab-dropdown');

        const dropdownToggle = document.createElement('div');
        dropdownToggle.classList.add('tab-dropdown__toggle');
        dropdownToggle.textContent = tabs[0].textContent;

        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('tab-dropdown__menu');

        tabs.forEach((tab, index) => {
            const dropdownItem = document.createElement('div');
            dropdownItem.classList.add('tab-dropdown__item');
            dropdownItem.textContent = tab.textContent;

            dropdownItem.addEventListener('click', () => {
                hideTabContent();
                showTabContent(index);
                dropdownToggle.textContent = tab.textContent;
                dropdownMenu.classList.remove('is-open');
            });

            dropdownMenu.appendChild(dropdownItem);
        });

        dropdownContainer.appendChild(dropdownToggle);
        dropdownContainer.appendChild(dropdownMenu);

        tabsParent.parentNode.insertBefore(dropdownContainer, tabsParent.nextSibling);

        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('is-open');
        });

        document.addEventListener('click', (e) => {
            if (!dropdownContainer.contains(e.target)) {
                dropdownMenu.classList.remove('is-open');
            }
        });
    }

    const checkWindowWidth = () => {
        const customDropdown = document.querySelector('.tab-dropdown');
    
        if (window.innerWidth <= 767) {
            if (!customDropdown) {
                createCustomDropdown();
            }
        } else {
            if (customDropdown) {
                customDropdown.remove();
            }
        }
    }    

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('js-tab-link')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();
    checkWindowWidth();

    window.addEventListener('resize', checkWindowWidth);
}

export default tabDropdown;
