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
      // Aquí puedes agregar la lógica para validar el login, por ejemplo, enviando los datos al servidor
    });
  });
  