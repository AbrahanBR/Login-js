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

    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8",         
        dataType: "json",
        success: () => window.location.href="index.html?created",
        failure: (err) => console.error(err)
    })


    return false;
}