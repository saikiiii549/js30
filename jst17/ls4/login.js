import Register from "./register"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

class Login {
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputTxtEmail
    $passInputPass
    $submitBtn
    $gotoSigninLink
    $containerDiv
    $titleHeader
    $signupForm

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
          const email = this.$emailInputEmail.value;
          const password = this.$passInputPass.value;
        
          
          if(email == "") {
          alert("Email cannot be empty!");
           return;
          }
          if(password.length < 6) {
            alert("Password must be least 6 letters!");
           return;
          }

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
            const signup = new Register();
            
        
        }

}

export default Login;