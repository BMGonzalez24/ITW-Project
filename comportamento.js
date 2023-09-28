/* Grupo: 16, Número: 56941, Nome: Bruno Gonzalez , PL: 26 */
/* Grupo: 16, Número: 56915, Nome: Maria Santos   , PL: 26 */
/* Grupo: 16, Número: 55945, Nome: Mariana Valente, PL: 26 */

const username = document.getElementById('username')
const psw = document.getElementById('pw')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('registar', (e) => {
    let messages = []
    if (username.value === '' || username.value == null){
        messages.push('Insira um username')
    }

    if (pw.value.length <= 6) {
        messages.push('A password tem de ter mais de 6 caracteres')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' , ')
    }
    
})

// storing input registar
function store() {
    var username = document.getElementById('username');
    var pw = document.getElementById('pw');
    alert("Registado com sucesso!")
    localStorage.setItem('username', username.value);
    localStorage.setItem('pw', pw.value);
    window.open(index.html)
   
}

// verificar se dados login e registar sao iguais
function check() {

    // dados registar
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');

    // dados login
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');


    if(userName.value == storedName && userPw.value == storedPw) {
        alert('Login efetuado com sucesso');
    }else {
        alert('Password ou username incorretos');
    }
}

