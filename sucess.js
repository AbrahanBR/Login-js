function sginup(event) {
    
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarsenha = document.getElementById("confirmarsenha").value;

    if(senha !== confirmarsenha){
        document.getElementById("error").innerHTML = `<div class="alert alert-danger" role="alert">The Passwords don't match</div>`
        return false
    }

    const user = {
        username,
        email,
        senha
    }

    const users = JSON.parse(localStorage.getItem("register")) || [];
    users.push(user);
    localStorage.setItem("register", JSON.stringify(users));

    window.location.href="index.html?created";

    return false;
}