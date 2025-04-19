const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    const emailValue = e.target.elements.email.value.trim();
    const passwordValue = e.target.elements.password.value.trim();
    const formData = {
        email: emailValue,
        password: passwordValue,
    };
    if (emailValue ==="" || passwordValue === "") {
        alert('All form fields must be filled in');
        return;
    }

    console.log(formData);
     e.target.reset();
}

const inputs = document.querySelectorAll('.form-input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.placeholder = "Type area";
    });

    input.addEventListener('blur', () => {
        input.placeholder = "";
    });
})


