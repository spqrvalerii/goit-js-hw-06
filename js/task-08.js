const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

    if (email.value === '' || password.value === '') {
      return alert('Всі поля повинні бути заповнені!')
    }
  
  const userDataObj = {
    email: email.value,
    password: password.value,
  }
    
  console.log(userDataObj);
  event.currentTarget.reset();
};
