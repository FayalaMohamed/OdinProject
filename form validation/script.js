document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const submitButton = document.getElementById("submit-button");
    const successMessage = document.getElementById("success-message");

    const fields = {
        email: {
            element: document.getElementById("email"),
            error: document.getElementById("email-error")
        },
        country: {
            element: document.getElementById("country"),
            error: document.getElementById("country-error")
        },
        zip: {
            element: document.getElementById("zip"),
            error: document.getElementById("zip-error")
        },
        password: {
            element: document.getElementById("password"),
            error: document.getElementById("password-error")
        },
        passwordConfirm: {
            element: document.getElementById("password-confirm"),
            error: document.getElementById("password-confirm-error")
        }
    };

    function validateAllFields() {
        Object.keys(fields).forEach(fieldName => {
            validateField(fieldName);
        });
    }
    validateAllFields();

    Object.keys(fields).forEach(fieldName => {
        fields[fieldName].element.addEventListener("input", (e) => {
            validateField(fieldName);
        });
    });

    submitButton.addEventListener("click", () => {
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        Object.keys(fields).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });

        if (isValid) {
            successMessage.classList.remove("hidden");
        }
    }

    function validateField(fieldName) {
        const field = fields[fieldName];
        const val = field.element.value;
        if (field.element.validity.valueMissing) {
            field.error.innerText = "This is a required field please fill it in";
            field.error.classList.remove("hidden");
            field.element.classList.add("invalid");
            return false;
        } else if (field.element.validity.typeMismatch) {
            field.error.innerText = "Value entered is not of the demanded type";
            field.error.classList.remove("hidden");
            field.element.classList.add("invalid");
            return false;
        } else {
            field.error.classList.add("hidden");
            field.element.classList.remove("invalid");


        }

        if (fieldName === "passwordConfirm") {
            return checkPasswordsMatch();
        } else if (fieldName === "zip") {
            return checkZipCodeValid();
        }
        return true;
    }

    function checkPasswordsMatch() {
        const passwordField = fields["password"];
        const passwordConfirmField = fields["passwordConfirm"];

        if (passwordConfirmField.element.value !== passwordField.element.value) {
            passwordConfirmField.error.innerText = "Does not match the password";
            passwordConfirmField.error.classList.remove("hidden");
            passwordConfirmField.element.classList.add("invalid");
            return false;

        } else {
            passwordConfirmField.error.classList.add("hidden");
            passwordConfirmField.element.classList.remove("invalid");
            return true;
        }
    }

    function checkZipCodeValid() {
        const constraints = {
            switzerland: [
                "^(CH-)?\\d{4}$",
                "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
            ],
            france: [
                "^(F-)?\\d{5}$",
                "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
            ],
            germany: [
                "^(D-)?\\d{5}$",
                "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
            ],
            netherland: [
                "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
                "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
            ],
        };
        const zipField = fields["zip"];
        const country = fields["country"].element.value;

        let constraint = "";
        if (country.toLowerCase() in constraints) {
            constraint = new RegExp(constraints[country.toLowerCase()][0], "");
        } else {
            constraint = new RegExp(constraints["france"][0], "");
        }

        if (!constraint.test(zipField.element.value)) {
            zipField.error.innerText = "Zip code does not match the country entered";
            zipField.error.classList.remove("hidden");
            zipField.element.classList.add("invalid");
            return false;
        } else {
            zipField.error.classList.add("hidden");
            zipField.element.classList.remove("invalid");
            return true;
        }

    }

});