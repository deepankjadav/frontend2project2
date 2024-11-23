let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("password");
        let emailFeedback = document.getElementById("emailFeedback");
        let passwordFeedback = document.getElementById("passwordFeedback");
        let submitBtn = document.getElementById("submitBtn");   

        emailInput.addEventListener("input", () => {
            let emailValue = emailInput.value;
            if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")){
                emailFeedback.textContent = "All good to go!";
                emailFeedback.className = "success";
            }
            else{
                emailFeedback.textContent = "Make sure email is more than 3 characters and has @ and a .";
                emailFeedback.className = "error";
            }
        });

        passwordInput.addEventListener("input", () => {
            let passwordValue = passwordInput.value;
            if(passwordValue.length > 8){
                passwordFeedback.textContent = "All good to go!";
                passwordFeedback.className = "success";
            }
            else{
                passwordFeedback.textContent = "Make sure password is more than 8 characters.";
                passwordFeedback.className = "error";
            }
        });

        submitBtn.addEventListener("click", () => {
            if(emailFeedback.className == "success" && passwordFeedback.className == "success"){
                let confirmation = confirm("Do you want to submit the form?");
                if(confirmation){
                    alert("successful signup!");
                }
                else {
            emailInput.value = "";
            passwordInput.value = "";
            emailFeedback.textContent = "";
            passwordFeedback.textContent = "";
                }
            }
            else{
                alert("Please fix the errors before submitting.");
            }
        });