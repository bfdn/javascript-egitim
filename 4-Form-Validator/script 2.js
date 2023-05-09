const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';

    const div = input.nextElementSibling;
    // div.textContent = message;
    div.innerText = message;
    div.className = "invalid-feedback";
}

function success(input, message) {
    input.className = 'form-control is-valid';

}

// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'hatalı bir mail adresi');
    }
}

// function genel(input) {
//     if (input.value === "") {
//         // username.classList.add("error");
//         input.className = 'form-control is-invalid';
//     } else {
//         input.className = 'form-control is-valid';
//     }
// }

// function checkRequired(input) {
//     // console.log(input.value);
//     if (input.value === '') {
//         error(input, 'gerekli alan');
//     } else {
//         success(input);
//     }
// }

function checkRequired(inputs) {
    // console.log(input.value);

    inputs.forEach(input => {
        if (input.value === '') {
            // error(input, `${input.previousElementSibling.innerText} gerekli alan`);
            error(input, `${input.id} gerekli alan`);
        } else {
            success(input);
        }
        console.log(input);
    });


}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(username);
    // console.log(username.classList);
    // console.log(username.className);

    checkRequired([username, email, password, repassword]);
    checkEmail(email);


    /*
    if (username.value === "") {
        // username.classList.add("error");
        error(username, "username gerekli");
    } else {
        success(username, "username başarılı");
    }

    if (email.value === "") {
        // username.classList.add("error");
        error(email, "email gerekli");
    } else if (!validateEmail(email.value)) {
        error(email, "email hatalı");
    } else {
        success(email);
    }

    if (password.value === "") {
        // username.classList.add("error");
        error(password, "password gerekli");
    } else {
        success(password);
    }

    if (repassword.value === "") {
        // username.classList.add("error");
        error(repassword, "repassword gerekli");
    } else {
        success(repassword);
    }
    */

});