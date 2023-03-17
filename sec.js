let userInfo = localStorage.getItem('userDetails');
let userValidate = JSON.parse(userInfo);
let h3 = document.querySelector('.head');

let email = document.getElementById('email');
let pWord = document.getElementById('pWord');
let btn = document.querySelector('.getDetails');

h3.innerText = `Hi ${userValidate.uName}`

btn.addEventListener('click', () => {
    if (email.value !== userValidate.uemail && pWord.value !== userValidate.upWord) {
        alert('Both email and password are incorrect')
    }
    else if (email.value !== userValidate.uemail) {
        alert('Incorrect email account')
    }
    else if (pWord.value !== userValidate.upWord) {
        alert('incorrect password')
    }
    else {
        alert('successful');
        window.location = './page.html'
    }
})

console.log(userValidate)