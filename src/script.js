import { addTask } from './shared/tasks';
import { getNameList } from './shared/list';
import { routes, paths } from './shared/constants/routes';
import { signInHandler } from './components/sign-in/sign-in';
import { signUpHandler } from './components/sign-up/sign-up';
import { loginBtn, logoutBtn } from './components/profile/profile';
import './styles/styles.scss';

window.onload = () => {
  const pathname = Object.values(paths).find( path => path === window.location.pathname );

  switch(pathname) {
    case paths.home:
      loginBtn();
      logoutBtn();
      getNameList();
      addTask();
      break;
    case paths.sign_in:
      signInHandler();
      break;
    case paths.sign_up:
      signUpHandler();
      break;
    case paths.recovery:
      default:
      break;
  }

}
