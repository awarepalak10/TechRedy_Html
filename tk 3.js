let form = document.querySelector('.myform');

let email = document.querySelector('.email');

let name = document.querySelector('.name');

let name = document.getElementById("showname").addEventListener("change",function())
{
    const passwordinput=document.getElementById("name");
    if(this.check){
        //show name
        passwordinput.type="text",

    }
    else{
       //hide name
       passwordinput.type="name";
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log(email.value);
    console.log(Name.value);

    if(email.value === '' || Name.value === '') {
        error.style.color = 'red';
        error.textContent = 'All fields are required.';
    } 

}