var signUpName = document.getElementById('signName');
var signUpEmail = document.getElementById('signEmail');
var signUpPassword = document.getElementById('signPassword');
var user = [];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
} else {
    user = [];
}


function signup() {
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') {
        document.getElementById('mess').innerHTML = `<p class = 'text-center text-danger'>All inputs is required</p>`
    } else {
        var User = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        user.push(User);
        document.getElementById('mess').innerHTML = `<p class = 'text-center text-success'>success</p>`
        localStorage.setItem('user', JSON.stringify(user));
    }
}