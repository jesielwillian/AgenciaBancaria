// Cadastro
const user = [];
document.getElementById('register-submit').addEventListener('click', function (e) {
    e.preventDefault();
    // Obter email do usuário
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    console.log(userEmail);
    // Obter senha do usuário
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    // Verifique a autenticação de email e senha
    if (user.indexOf(userEmail) == -1 && userEmail != '' && userPassword != '') {
        user.push(userEmail, userPassword);
        console.log(user);
        alert('Você se registrou com sucesso!')
        // localStorage.setItem('userEmail', JSON.stringify(userEmail));
        // window.location.href = 'banking.html';
    }
    else if (userEmail == '') {
        alert('O campo de email é obrigatório!')
    }
    else if (userPassword == '') {
        alert('O campo de senha é obrigatório!')
    }
    else {
        alert('Você já se cadastrou!')
    }

});


// Login
document.getElementById('login-submit').addEventListener('click', function (e) {
    e.preventDefault();
    // Obter o email do usuário
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    // Obter a senha do usuário
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    // Verifique a autenticação de email e senha
    if (((user.indexOf(userEmail)) != -1) && ((user.indexOf(userPassword)) != -1)) {
        localStorage.setItem('userEmail', JSON.stringify(userEmail));
        window.location.href = 'banking.html';
    }
    // if (userEmail == 'jesielwillian@gmail.com' && userPassword == '123') {
    //     localStorage.setItem('userEmail', JSON.stringify(userEmail));
    //     window.location.href = 'banking.html';
    // }
    else if (userEmail == '') {
        alert('O campo de email é obrigatório!')
    }
    else if (userPassword == '') {
        alert('O campo de senha é obrigatório!')
    }
    else {
        alert('Falha na autenticação! Por favor, tente novamente com a conta existente.')
    }

});

if (localStorage.getItem('userEmail') != null) {
    window.location.href = 'banking.html'
}