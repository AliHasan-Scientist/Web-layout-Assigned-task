function stringlength(inputtxt, minlength, maxlength) {
    var field = inputtxt.value;
    var mnlen = minlength;
    var mxlen = maxlength;

    if (field.length < mnlen || field.length > mxlen) {
        alert("Please input the username between " + mnlen + " and " + mxlen + " characters");
        return false;
    }
    else {
        alert('Your username have accepted.');
        return true;
    }
}
