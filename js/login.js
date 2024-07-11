/* validacion login js */
document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const submit = document.getElementById('submit');
    
    submit.addEventListener('click', (e) => {
      e.preventDefault();
      const data = {
        username: username.value,
        password: password.value,
      };
      console.log(data);
      
    });
  });
  

  