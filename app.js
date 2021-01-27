const fname = document.querySelector('#name');
const lname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitbtn = document.querySelector('#btn');
const eifname = document.querySelector('#ei_fname');
const eilname = document.querySelector('#ei_lname');
const eiemail = document.querySelector('#ei_email');
const eipassword = document.querySelector('#ei_password');
const etfname = document.querySelector('#et_fname');
const etlname = document.querySelector('#et_lname');
const etemail = document.querySelector('#et_email');
const etpassword = document.querySelector('#et_password');
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var validate = true;
function display_error() {
    submitbtn.addEventListener('click', () => {
        if (fname.value === "") {
            eifname.style.display = 'block';
            etfname.style.display = 'block';
            fname.style.borderColor = "hsl(0, 100%, 74%)";
            validate = false;
        }
        else {
            eifname.style.display = 'none';
            etfname.style.display = 'none';
            fname.style.borderColor = "hsl(246, 25%, 77%)";
            validate = true;
        }
        if (lname.value === "") {
            eilname.style.display = 'block';
            etlname.style.display = 'block';
            lname.style.borderColor = "hsl(0, 100%, 74%)";
            validate = false;
        }
        else {
            eilname.style.display = 'none';
            etlname.style.display = 'none';
            lname.style.borderColor = "";
            validate = true;
        }
        if (email.value.match(mailformat)) {
            eiemail.style.display = 'none';
            etemail.style.display = 'none';
            email.style.borderColor = "hsl(246, 25%, 77%)";
            validate = true;
        }
        else {
            eiemail.style.display = 'block';
            etemail.style.display = 'block';
            email.style.borderColor = "hsl(0, 100%, 74%)";
            email.style.color = "hsl(0, 100%, 74%)";
            validate = false;

        }
        if (password.value === "") {
            eipassword.style.display = 'block';
            etpassword.style.display = 'block';
            password.style.borderColor = "hsl(0, 100%, 74%)";
            validate = false;
        }
        else {
            eipassword.style.display = 'none';
            etpassword.style.display = 'none';
            password.style.borderColor = "hsl(246, 25%, 77%)";
            validate = true;
        }
    });
    return validate;
}

display_error();