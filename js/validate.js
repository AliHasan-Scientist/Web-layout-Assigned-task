function validate() {

    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;


    }
    var nameSize = document.myForm.Name.value;

    if ( size>= 16) {
        alert("Your name is to large!");
        document.myForm.Name.focus();
        return false;

        
    }
    if (document.myForm.Email.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus();

        return false;
    }
    var emailID = document.myForm.Email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.myForm.Email.focus();
        return false;
    }
    return (true);
    if (!document.myForm.Name.value) {
        const nameError = document.getElementById("nameError");
        nameError.classList.add("visible");
        firstNameField.classList.add("invalid");
        nameError.setAttribute("aria-hidden", false);
        nameError.setAttribute("aria-invalid", true);
      }



    if (document.myForm.Message.value == "") {
        alert("Please Write you Message!");
        return false;
    }
    return (true);

   
}


