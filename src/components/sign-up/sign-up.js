import { signUp } from '../../api/api-handlers';
import { setUserEmail } from '../../shared/ls-services';
import { routes } from '../../shared/constants/routes';
import { passwordValidator, emailValidator } from '../../shared/validators';

export const signUpHandler = () => {
  const signUpForm = document.querySelector('.Sign-up-form');
  const password_1 = document.getElementById('password_1');
  const password_2 = document.getElementById('password_2');
  const signUpBtn = document.querySelector('.btnSign_up');
  const emailInput = document.getElementById('email');
  const repeatPassword = document.querySelector('.Sign-up-form-repeat-password-password');
  
  signUpForm.addEventListener('submit', event => {
    event.preventDefault();

    signUp(emailInput.value, password_1.value)
      .then(response => {
        if (response) {
          const { email } = response.user;
          setUserEmail(email);
          window.location.href = routes.sign_in;
        }
      });
  });

  const formValid = {
    email: {
      isValid: false
    },
    password1: {
      isValid: false
    },
    password2: {
      isValid: false
    }
  }

  signUpBtn.setAttribute('disabled', true);

  emailInput.oninput = () => {
    emailValidator(emailInput.value) ? formValid.email.isValid = true : formValid.email.isValid = false;
    checkFormValid();
  }

  password_1.oninput = () => {
    passwordValidator(password_1.value) ? formValid.password1.isValid = true : formValid.password1.isValid = false;
    checkFormValid();
  }

  password_2.oninput = () => {
    if (formValid.password1.isValid  && (password_1.value === password_2.value)) {
      formValid.password2.isValid = true;
      signUpBtn.removeAttribute('disabled');
    } else {
      signUpBtn.setAttribute('disabled', true);
    
    }
  }

  const checkFormValid = () => {
    const isFormValid = Object.values(formValid).every(value => value.isValid);
    isFormValid ? signUpBtn.removeAttribute('disabled') : signUpBtn.setAttribute('disabled', true);
  }
  
}
