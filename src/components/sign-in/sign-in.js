import { signIn } from '../../api/api-handlers';
import { setToken } from '../../shared/ls-services';
import { routes } from '../../shared/constants/routes';
import { passwordValidator, emailValidator } from '../../shared/validators';

export const signInHandler = () => {
  const signInForm = document.querySelector('.Sign-in-form');
  const signInBtn = document.querySelector('.btnSign_in');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const formValid = {
    email: {
      isValid: false
    },
    password: {
      isValid: false
    }
  }

  signInBtn.setAttribute('disabled', true);

  signInForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    signIn(email, password).then( responce => {
      if (responce) {
        const { idToken: token } = responce.data;
        setToken(token);
        window.location.href = routes.home;
      }

    });

  });

  passwordInput.oninput = () => {
    if (passwordValidator(passwordInput.value)) {
      formValid.password.isValid = true;
    } else {
      formValid.password.isValid = false;
    }

    checkFormValid();
  }

  emailInput.oninput = () => {
    if (emailValidator(emailInput.value)) {
      formValid.email.isValid = true;
    } else {
      formValid.email.isValid = false;
    }

    checkFormValid();
  }
  
  const checkFormValid = () => {
    const isFormValid = Object.values(formValid).every(value => value.isValid);
    isFormValid ? signInBtn.removeAttribute('disabled'): signInBtn.setAttribute('disabled', true);
  }

}
