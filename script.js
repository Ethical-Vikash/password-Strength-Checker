let container = document.querySelector(".container");
let password = document.querySelector("#YourPassword");
let show = document.querySelector(".show");

let upperCase = document.getElementById('upper');
let lowerCase = document.getElementById('lower');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');

function checPassword(data){
    // javascript regular expression pattern
    const upper = new RegExp('(?=.*[A-Z])');
    const lower = new RegExp('(?=.*[a-z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[^A-Za-z0-9])');
    const length = new RegExp('(?=.{8,})');

    // upper case validation check
    if(upper.test(data)){
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');
    }
     // lower case validation check
     if(lower.test(data)){
        lowerCase.classList.add('valid');
    } else {
        lowerCase.classList.remove('valid');
    }
     // number case validation check
     if(number.test(data)){
        digit.classList.add('valid');
    } else {
        digit.classList.remove('valid');
    }
     // special character case validation check
     if(special.test(data)){
        specialChar.classList.add('valid');
    } else {
        specialChar.classList.remove('valid');
    }
     // minimum length validation check
     if(length.test(data)){
        minLength.classList.add('valid');
    } else {
        minLength.classList.remove('valid');
    }


}

const Strength = (passwordValue) => {
    let i = 0;

    if (passwordValue.length >= 8) i++;

    if (/[A-Z]/.test(passwordValue)) i++;

    if (/[a-z]/.test(passwordValue)) i++;

    if (/[0-9]/.test(passwordValue)) i++;

    if (/[^A-Za-z0-9]/.test(passwordValue)) i++;

  

    return i;
};

document.addEventListener
("keyup", (e) => {
    let passwordValue = password.value;

    let strength = Strength(passwordValue);

    if (strength <= 2) {
        container.classList.add("weak");
        container.classList.remove("moderate");
        container.classList.remove("strong");
    } else if (strength >= 2 && strength <= 4) {
        container.classList.remove("weak");
        container.classList.add("moderate");
        container.classList.remove("strong");
    } else {
        container.classList.remove("weak");
        container.classList.remove("moderate");
        container.classList.add("strong");
    }
});

show.onclick = function () {
    if (password.type === "password") {
        password.setAttribute("type", "text");
        show.classList.add("hide");
    } else {
        password.setAttribute("type", "password");
        show.classList.remove("hide");
    }
};