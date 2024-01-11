var user = [];
user = JSON.parse(localStorage.getItem('user'))

var singInEmail = document.getElementById('signEmail');
var signInPassword = document.getElementById('signPassword');




document.getElementById('login').addEventListener('click', function () {
    if (singInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('mess').innerHTML = `<p class ='text-center text-danger'>All inputs is required</p>`;
    } else {
        check();
    }
})


function check() {
    for (var i = 0; i < user.length; i++) {
        if (singInEmail.value == user[i].email && signInPassword.value == user[i].password) {
            var x = user[i].name;
            localStorage.setItem('userName', x);
            document.getElementById('mess').innerHTML = `<p class ='text-center text-danger'>correct</p>`;
            location.replace('file:///D:/route/js/assi5js/home/index.html')

            break;
        }
        else{
            document.getElementById('mess').innerHTML = `<p class ='text-center text-danger'>incorrect</p>`;

        }
    }
}
