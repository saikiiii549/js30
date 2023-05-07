import Login from "./login.js"

class Register {
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputTxtEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $gotoSigninLink
    $submitBtn

    constructor() {
        this.$emailInputTxtEmail = document.createElement("input");
        this.$emailInputTxtEmail.type = "emai;"
        this.$emailInputTxtEmail.placeholder = "Enter your email ...";
        
        this.$nameInputTxt = document.createElement("input");
        this.$nameInputTxt.type = "text";
        this.$nameInputTxt.placeholder = "Enter your name?"

        this.$PassInputPass = document.createElement("input");
        this.$PassInputPass.type = "password";
        this.$passInputPass.placeholder = "Enter your password?"

        
        this.$submitBtn = document.createElement("button");
        this.$passInputPass.type = "submit";
        this.$passInputPass.innerHTML = "register"
        this.$submitBtn.addEventListener("click", this.handleSubmit);

        this.$confirmPassInputPass = document.createElement("input");
        this.$confirmPassInputPass.type = "password";
        this.$confirmPassInputPass.placeholder = "confirm your password?"

        this.$gotoSigninLink = document.createElement("a");
        this.$gotoSigninLink.innerHTML = "You already have account? signin now?";
        this.$gotoSigninLink.addEventListener("click",this.gotosignin);

        this.$containerDiv = document.createElement("div");
        this.$containerDiv.classList.add("center","app");

        this.$titleHeader = document.createElement("h2");
        this.$titleHeader.innerHTML = "create your account";
        
        this.$signupForm = document.createElement("from")


    }
initREnder = (container) => {
this.$signupForm.appendChild(this.$emailInputTxtEmail);
this.$signupForm.appendChild(this.$nameInputTxt);
this.$signupForm.appendChild(this.$passInputPass);
this.$signupForm.appendChild(this.$confirmPassInputPass);
this.$signupForm.appendChild(this.$submitBtn);

this.$containerDiv.appendChild(this.$titleHeader);
this.$containerDiv.appendChild(this.$signupForm);
this.$containerDiv.appendChild(this.$gotoSigninLink);

container.appendChild(this.$containerDiv)



}


handleSubmit = (e) => {
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}
gotosignin = () =>  {
    const login = new Login();
    

}

}



export default Register;