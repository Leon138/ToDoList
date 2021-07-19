import { addTask } from '../shared/tasks';
import { getNameList } from '../shared/list';
import './styles/styles.scss';

window.onload = () => {
  getNameList();
  addTask();
}
