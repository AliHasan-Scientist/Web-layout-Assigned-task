function validate() {

    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
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
   



    if (document.myForm.Message.value == "") {
        alert("Please Write you Message!");
        return false;
    }
    return (true);

   
}


