const regContainer = document.createElement("div");
const title = document.createElement("h3")
title.innerHTML = " Create your account";
regContainer.classList.add("app")

const emailInpet = document.createElement("input")
emailInput.placeholder= "Enter your email";

const nameInput = document.createElement("input") 
nameInput.placeholder= "Enter your name";

const passInput = document.createElement("input")
passInput.type = "password"

const confirmPassInput = document.createElement("input")
confirmPassInput.setAttribute("type", "password")

const submitbutton = document.createElement("input")


const linkToLogin = document.createElement("a")
linkToLogin.indexHtml("you already have an account")

regContainer.appendChild(title)
regContainer.appendChild("emailInpet")
regContainer.appendChild("passInput")
regContainer.appendChild("pconfirmPassInput")
regContainer.appendChild("linkToLogin")