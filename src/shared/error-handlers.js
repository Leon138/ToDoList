
export const showErrorNotification = error => {
  const notification = document.createElement('div');
  const body = document.getElementsByTagName('body')[0];
  notification.innerText = error.response.data.error.message;
  notification.className = 'error-notification';
  body.append(notification);
  setTimeout( () => notification.style.display = 'none', 3000);
}
