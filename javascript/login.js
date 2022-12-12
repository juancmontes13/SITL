const email = document.getElementById('email');
const password = document.getElementById('password');
const buttonLogin = document.getElementById('buttonLogin');

const usuario1 = {
    email: 'quotes@safecoverageinsurance.com', 
    password: 'user123'
    };

buttonLogin.addEventListener('click', (ev) => {
    ev.preventDefault()
    const data = {
        email: email.value,
        password: password.value,
    }
    console.log(data);
    if(JSON.stringify(data) === JSON.stringify(usuario1) ){
        window.location = "access.html";
        

    } else{
        alert('info incorrecta')
    };
    
})






