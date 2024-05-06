
    
    
    var login=document.getElementById('login')
    login.disabled=true
    login.style.backgroundColor='#44527900'
    login.style.cursor='not-allowed'
function validate(e) {

    var emailBool=false
    var passbool=false

    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    e.target.value=e.target.value.replace(/\s/g,'')
    // Email validation
    if (!email) {
        emailError.textContent = "Email is required";
        emailBool=false
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address";
        emailBool=false
    } else {
        emailError.textContent = "";
        emailBool=true
    }
    var password = document.getElementById("password").value;
   
    var passwordError = document.getElementById("passwordError");
    e.target.value=e.target.value.replace(/\s/g,'')
    
  
// Password validation
if (!password ) {
    passwordError.textContent = "Password is required";
    passbool=false
} 
else if(!isValidPassword(password)){

    passwordError.textContent = "please enter valid password";
    passbool=false

}
 else {
    passwordError.textContent = "";
    passbool=true
}

if(emailBool && passbool){
login.disabled=false
login.style.backgroundColor='#445279'
login.style.cursor='pointer'
}
else{
    login.disabled=true
    login.style.backgroundColor='#44527900'
    login.style.cursor='not-allowed'
}
}


function isValidEmail(email) {
   
    var emailRegex = /^[\S]+@[\S]+\.[\S]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password){
    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])\S{8,}$/;
    return passRegex.test(password);
}
var openEye=document.getElementById('openEye')

var closeEye=document.getElementById('closeEye')
var password1 = document.getElementById("password")
opening=()=>{
  
    console.log('jkajksja')
    openEye.classList.add('d-none')
    closeEye.classList.remove('d-none')

    password1.type='text'
    
}
closing=()=>{
    
    openEye.classList.remove('d-none')
    closeEye.classList.add('d-none')
    password1.type='password'
    
}