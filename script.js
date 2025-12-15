let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
        nameErrMsg.style.color = "red";
    } else {
        nameErrMsg.textContent = "";
    }
});
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required*";
        emailErrMsg.style.color = "red";
    } else {
        emailErrMsg.textContent = "";
    }
});
