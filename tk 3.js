let form = document.querySelector('.myform');

let email = document.querySelector('.email');

let name = document.querySelector('.name');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(email.value);
    console.log(Name.value);

    if(email.value === '' || Name.value === '') {
        error.style.color = 'red';
        error.textContent = 'All fields are required.';
    } 

}