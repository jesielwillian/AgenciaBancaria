// Detalhes do usuário

const userlist = [];
var retrieved = localStorage.getItem('userEmail');
userlist.push(JSON.parse(retrieved));
console.log('User details: ', userlist);
var user = document.getElementById('userEmail');
user.innerText = JSON.parse(retrieved);

// Roteador
if (retrieved == null) {
    window.location.href = 'index.html'
}

// Sair
logout.addEventListener('click', function () {
    var removed = localStorage.removeItem('userEmail');
    var logout = document.getElementById('logout');
    logout = removed;
})

// Trata o evento de depósito e retirada

// Depositar

document.getElementById('deposit-submit').addEventListener('click', function () {
    if ((!/^[0-9]+$/.test(document.getElementById('deposit-input').value))) {
        const warning = document.getElementById('deposit-warning');
        warning.innerText = 'Por favor insira um número!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else if ((document.getElementById('deposit-input').value.length) >= 15) {
        const warning = document.getElementById('deposit-warning');
        warning.innerText = 'Insira um número com menos de 15 dígitos!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else {
        const depositInput = document.getElementById('deposit-input');
        const newDeposit = depositInput.value;

        const depositAmount = document.getElementById('deposit-amount');
        const previousDeposit = depositAmount.innerText;
        depositAmount.innerText = parseFloat(previousDeposit) + parseFloat(newDeposit);
        depositInput.value = '';

        // Saldo total
        const balance = document.getElementById('balance');
        balance.innerText = parseFloat(balance.innerText) + parseFloat(newDeposit);
    }
})

// Retirar
document.getElementById('withdraw-submit').addEventListener('click', function () {
    if ((!/^[0-9]+$/.test(document.getElementById('withdraw-input').value))) {
        const warning = document.getElementById('withdraw-warning');
        warning.innerText = 'Por favor, insira um número!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else if (parseFloat(document.getElementById('withdraw-input').value) >= parseFloat(document.getElementById('balance').innerText)) {
        const warning = document.getElementById('withdraw-warning');
        warning.innerText = 'Você não pode sacar devido ao saldo insuficiente!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else if ((document.getElementById('withdraw-input').value.length) >= 15) {
        console.log((document.getElementById('withdraw-input').value.length));
        const warning = document.getElementById('withdraw-warning');
        warning.innerText = 'Insira um número com menos de 15 dígitos!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else {
        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdraw = withdrawInput.value;

        const withdrawAmount = document.getElementById('withdraw-amount');
        const previousWithdraw = withdrawAmount.innerText;
        withdrawAmount.innerText = parseFloat(previousWithdraw) + parseFloat(newWithdraw);
        withdrawInput.value = '';

        // Saldo total
        const balance = document.getElementById('balance');
        balance.innerText = parseFloat(balance.innerText) - parseFloat(newWithdraw);
    }
})