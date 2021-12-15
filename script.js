let userName = document.getElementById("txtUserName");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");
let contact = document.getElementById("txtContact");
//let form = document.querySelector("form");

function validateInput() {
    //Username 
    if (userName.value.trim() === "") {
        onError(userName, "User Name cannot be empty");
    } else {
        onSuccess(userName);
    }
    //Email

    if (email.value.trim() === "") {
        onError(email, "Email cannot be empty");
    } else {
        if (!isValidEmail(email.value.trim())) {
            onError(email, "Email is not valid");
        } else {
            onSuccess(email);
        }
    }

    //password
    const passReg = /^[A-Za-z0-9]\w{7,14}$/;
    if (pwd.value.trim() === "") {
        onError(pwd, "Password cannot be empty");
    } else {
        if (!passReg.test(pwd.value.trim())) {
            onError(pwd, "Password Length must be greater than 7 digits");
        }
        else {

            onSuccess(pwd);
        }
    }
    if (conPwd.value.trim() === "") {
        onError(conPwd, "Password cannot be empty");
    } else {
        if (pwd.value.trim() !== conPwd.value.trim()) {
            onError(conPwd, "Password & Confirm password not matching");
        }
        else
            onSuccess(conPwd);
    }
    //Contact
    const contactReg = /^[0-9]+$/;
    if (contact.value.trim() === "") {
        onError(contact, "Contact cannot be empty");
    }
    else {
        if (!contactReg.test(contact.value.trim())) {
            onError(contact, "Contact Must be numeric only");
        }
        else {
            onSuccess(contact);
        }
    }

}

document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
    });

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


