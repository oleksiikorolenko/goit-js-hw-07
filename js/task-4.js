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


