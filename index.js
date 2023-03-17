let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let email = document.getElementById('email');
let pWord = document.getElementById('pWord');
let btn = document.querySelector('.getDetails');
let form = document.querySelector('.form')

let array = [fName, lName, email, pWord]

function pass() {
    array.forEach((value, index, array) => {
        value.addEventListener('keyup', () => {
            if (value.value === '') {
                console.log('cannot be empty');
                value.style.border = '1px solid red';
                return false
            }
            else if (value.value.length < 3) {
                console.log('characters cannot be less than 3');
                value.style.border = '1px solid red';
                return false
            }
            else if (value.value.length > 30) {
                console.log('characters cannot be greater than 30');
                value.style.border = '1px solid red';
                return false
            }
            else {
                value.style.border = '1px solid green';
            }
        })
    })
}
pass()

function condition(para) {
    if (para.value === '') {
        console.log('fill in your details')
        para.style.border = '1px solid red'
        return false
    }
    if (para.value.length < 3) {
        console.log('characters cannot be less than 3');
        para.style.border = '1px solid red';
        return false
    }
    if (para.value.length > 30) {
        console.log('characters cannot be greater than 30');
        para.style.border = '1px solid red';
        return false
    }
    if (para.value.length >= 3 && value.value.length <= 30){
        para.style.border = '1px solid green';
    }
}

btn.addEventListener('click', () => {
    if (fName.value === '') {
        console.log('fill in your details');
        fName.style.border = '1px solid red';
        return false
    }
    else if (fName.value.length < 3) {
        console.log('characters cannot be less than 3');
        fName.style.border = '1px solid red';
        return false
    }
    else if (fName.value.length > 30) {
        console.log('characters cannot be greater than 30');
        fName.style.border = '1px solid red';
        return false
    }
    if (lName.value === '') {
        console.log('fill in your details');
        fName.style.border = '1px solid red';
        return false
    }
    else if (lName.value.length < 3) {
        console.log('characters cannot be less than 3');
        lName.style.border = '1px solid red';
        return false
    }
    else if (lName.value.length > 30) {
        console.log('characters cannot be greater than 30');
        lName.style.border = '1px solid red';
        return false
    }
    if (email.value === '') {
        console.log('fill in your details');
        email.style.border = '1px solid red';
        return false
    }
    else if (email.value.length < 3) {
        console.log('characters cannot be less than 3');
        email.style.border = '1px solid red';
        return false
    }
    else if (email.value.length > 30) {
        console.log('characters cannot be greater than 30');
        email.style.border = '1px solid red';
        return false
    }
    if (pWord.value === '') {
        console.log('fill in your details');
        pWord.style.border = '1px solid red';
        return false
    }
    else if (pWord.value.length < 3) {
        console.log('characters cannot be less than 3');
        pWord.style.border = '1px solid red';
        return false
    }
    else if (pWord.value.length > 30) {
        console.log('characters cannot be greater than 30');
        pWord.style.border = '1px solid red';
        return false
    }
    else {
        let objValue = {
            uName: fName.value,
            ulName: lName.value,
            uemail: email.value,
            upWord: pWord.value
        };
        let userObject = JSON.stringify(objValue);
        localStorage.setItem('userDetails', userObject);
        window.location = './sec.html';
        console.log(objValue);
    }
})