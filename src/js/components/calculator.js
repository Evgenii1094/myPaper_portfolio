const calculator = () => {
    const setDefaultValues = () => {
        const resultElement = document.querySelector(".calculator__result");
        const academicLevelItem = document.querySelector("[data-selected-type='academicLevel']");
        const urgencyItem = document.querySelector("[data-selected-type='urgency']");

        const defaultValues = {
            typeOfWork: 15,
            academicLevel: 1,
            urgency: 1.17,
        };

        academicLevelItem.textContent = "High School";
        urgencyItem.textContent = "15+ days";

        const result = calculateResult(defaultValues);
        resultElement.textContent = `$${result.toFixed(2)}`;
    };

    const customSelect = () => {
        const customSelects = document.querySelectorAll(".calculator__custom-select");
        const resultElement = document.querySelector(".calculator__result");

        let selectedValues = {
            typeOfWork: 15,
            academicLevel: 1,
            urgency: 1.17,
        };

        customSelects.forEach((select) => {
            const selectedItem = select.querySelector(".calculator__selected-item");
            const dropdown = select.querySelector(".calculator__dropdown");
            const options = dropdown.querySelectorAll(".calculator__option");

            selectedItem.addEventListener("click", () => {
                dropdown.classList.toggle("is-open");
            });

            document.addEventListener("click", (e) => {
                if (!select.contains(e.target)) {
                    dropdown.classList.remove("is-open");
                }
            });

            options.forEach((option) => {
                option.addEventListener("click", () => {
                    const type = selectedItem.getAttribute("data-selected-type");
                    const value = parseFloat(option.getAttribute("data-value"));
                    selectedValues[type] = value;

                    const result = calculateResult(selectedValues);
                    resultElement.textContent = `$${result.toFixed(2)}`;

                    selectedItem.textContent = option.textContent;

                    dropdown.classList.remove("is-open");
                });
            });
        });
    };

    const calculateResult = (values) => {
        const result = Object.values(values).reduce((acc, value) => acc * value, 1) / 3;
        return result;
    };

    setDefaultValues();
    customSelect();

    const setDefaultValuesSecond = () => {
        const resultElement = document.querySelector(".is-second .calculator__result");
        const academicLevelItem = document.querySelector(".is-second [data-selected-type='academicLevel']");
        const urgencyItem = document.querySelector(".is-second [data-selected-type='urgency']");

        const defaultValues = {
            typeOfWork: 10,
            academicLevel: 1,
            urgency: 1.17,
        };

        academicLevelItem.textContent = "High School";
        urgencyItem.textContent = "15+ days";

        const result = calculateResultSecond(defaultValues);
        resultElement.textContent = `$${result.toFixed(2)}`;
    };

    const customSelectSecond = () => {
        const customSelects = document.querySelectorAll(".calculator__custom-select-second");
        const resultElement = document.querySelector(".is-second .calculator__result");

        let selectedValues = {
            typeOfWork: 10,
            academicLevel: 1,
            urgency: 1.17,
        };

        customSelects.forEach((select) => {
            const selectedItem = select.querySelector(".calculator__selected-item-second");
            const dropdown = select.querySelector(".calculator__dropdown-second");
            const options = dropdown.querySelectorAll(".calculator__option-second");

            selectedItem.addEventListener("click", () => {
                dropdown.classList.toggle("is-open");
            });

            document.addEventListener("click", (e) => {
                if (!select.contains(e.target)) {
                    dropdown.classList.remove("is-open");
                }
            });

            options.forEach((option) => {
                option.addEventListener("click", () => {
                    const type = selectedItem.getAttribute("data-selected-type");
                    const value = parseFloat(option.getAttribute("data-value"));
                    selectedValues[type] = value;

                    const result = calculateResultSecond(selectedValues);
                    resultElement.textContent = `$${result.toFixed(2)}`;

                    selectedItem.textContent = option.textContent;

                    dropdown.classList.remove("is-open");
                });
            });
        });
    };

    const calculateResultSecond = (values) => {
        const result = Object.values(values).reduce((acc, value) => acc * value, 1) / 3;
        return result;
    };

    setDefaultValuesSecond();
    customSelectSecond();
};

export default calculator;
