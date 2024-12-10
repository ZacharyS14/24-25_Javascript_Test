function Validation(){
    // Accesses Each element by grabbing the id given to them
    let fullName = document.getElementById("fullName").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    // This if state checks if the element form in empty. If it is it sets the background color to red, else it sets the backgroundColor to white. ALl these if states are the same they just use different ids. Ex: fullName, address, phone, and email.
    if(fullName == ""){
        document.getElementById("fullName").style.backgroundColor = "red";
    }else{
        document.getElementById("fullName").style.backgroundColor = "white";
    }
    if(address == ""){
        document.getElementById("address").style.backgroundColor = "red";
    }else{
        document.getElementById("address").style.backgroundColor = "white";
    }
    if(phone == ""){
        document.getElementById("phone").style.backgroundColor = "red";
    }else{
        document.getElementById("phone").style.backgroundColor = "white";
    }
    if(email == ""){
        document.getElementById("email").style.backgroundColor = "red";
    }else{
        document.getElementById("email").style.backgroundColor = "white";
    }
}