import { removeToken, removeUserEmail } from '../../shared/ls-services';
import { routes } from '../../shared/constants/routes';
import { getToken } from '../../shared/ls-services';

export const loginBtn = () => {
  const loginBtn = document.getElementById('loginBtn');
  const token = getToken();

  if (token) {
    loginBtn.style.display = 'none';
  }

  loginBtn.onclick = event => {
    event.preventDefault();
    window.location.href = routes.sign_in;
  };
  
}

export const logoutBtn = () => {
  const token = getToken();
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (!token) {
    logoutBtn.style.display = 'none';
  }

  logoutBtn.onclick = () => {
    window.location.reload();
    removeToken();
    removeUserEmail();
    logoutBtn.remove();
  };

}
