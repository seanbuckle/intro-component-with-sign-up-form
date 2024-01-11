// Select the form
const form = document.getElementById('form') as HTMLFormElement;

// Add event listener for the submit event
form?.addEventListener('submit', (e) => {
    // Prevent the form from submitting by default
    e.preventDefault();

    // Select the input fields
    const fname = document.getElementById('fname') as HTMLInputElement;
    const lname = document.getElementById('lname') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const pword = document.getElementById('pword') as HTMLInputElement;

    // Select the error elements
    const fnameErrorIcon = document.getElementById('fname-group') as HTMLDivElement;
    const lnameErrorIcon = document.getElementById('lname-group') as HTMLDivElement;
    const emailErrorIcon = document.getElementById('email-group') as HTMLDivElement;
    const pwordErrorIcon = document.getElementById('pword-group') as HTMLDivElement;
    const fnameError = document.getElementById('fname-error') as HTMLLabelElement;
    const lnameError = document.getElementById('lname-error') as HTMLLabelElement;
    const emailError = document.getElementById('email-error') as HTMLLabelElement;
    const pwordError = document.getElementById('pword-error') as HTMLLabelElement;

    // Perform validation
    if (!fname.value) {
        if (fnameError) {
            fnameErrorIcon.classList.add('form__input-group--error');
            fnameError.textContent = 'First name cannot be empty';
        }
    } else {
        if (fnameError) {
            fnameErrorIcon.classList.remove('form__input-group--error');
            fnameError.textContent = '';
        }
    }
    if (!lname.value) {
        if (lnameError) {
            lnameErrorIcon.classList.add('form__input-group--error');
            lnameError.textContent = 'Last name cannot be empty';
        }
    } else {
        if (lnameError) {
            lnameErrorIcon.classList.remove('form__input-group--error');
            lnameError.textContent = '';
        }
    }
    if (!email.value) {
        if (emailError) {
            emailErrorIcon.classList.add('form__input-group--error');
            emailError.textContent = 'Email cannot be empty';
        }
    } else {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailRegex.test(email.value)) {
            if (emailError) {
                emailErrorIcon.classList.add('form__input-group--error');
                emailError.textContent = 'Looks like this is not an email';
            }
        } else {
            if (emailError) {
                emailErrorIcon.classList.remove('form__input-group--error');
                emailError.textContent = '';
            }
        }
    }
    if (!pword.value) {
        if (pwordError) {
            pwordErrorIcon.classList.add('form__input-group--error');
            pwordError.textContent = 'Password cannot be empty';
        }
    } else {
        if (pwordError) {
            pwordErrorIcon.classList.remove('form__input-group--error');
            pwordError.textContent = '';
        }
    }
    return;
});