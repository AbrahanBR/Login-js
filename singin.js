function alertDialog(message, status){
    document.getElementById("message-box").className = `alert py-4 alert-${status}`;
    document.getElementById("message-box").style = "opacity: 1";
    document.getElementById("message").innerHTML = message;
}


function sigin(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const senha = document.getElementById("senha").value;

    $.get("http://localhost:3000/users", (users) => {
        users.forEach((user) => {
            if(user.username === username && user.senha === senha){
                localStorage.setItem("login",JSON.stringify(user));
                window.location.href="sucesspage.html"
            }
            
        })
    
        alertDialog("The username or password is incorrect","danger");
    }) 

    return false;
}

function getMessage(){
    const messagecode = window.location.search.substr(1);

    switch(messagecode){
        case "created": alertDialog("User created successfully","success");
                        break;
    }
}
getMessage();