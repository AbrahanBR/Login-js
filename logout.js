function hasPermission(){
    if(!localStorage.getItem("login")){
        window.location.href="index.html";
    }
}

function logout(){
    localStorage.removeItem("login");
    window.location.href="index.html";
}

hasPermission();