"use strict"
// alert('internal js');
// alert('internal line 2');
// alert(1+
//     2
//     +3
// );

// // alert("Hello");
// // alert( NaN + 1 ); // NaN
// // alert( 3 * NaN ); // NaN
// // alert( "not a number" / 2 - 1 )


// [1, 2].forEach(alert);
// let username;

// alert( `hello ${1}` ); 

// alert( `hello ${"name"}` ); 

// alert( `hello ${username}` ); 
// let age=prompt('how old are you?')
// let a = Number(prompt("First number?", 67));
// let b = Number(prompt("Second number?", 2));
// a=Number(a);
// b=Number(b);

// console.log(a + b); 

// let temp= true;
// alert(typeof(temp));
// alert(typeof(String(temp)))

let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", verifyLogin);

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

function verifyLogin() {
    let emailValue = emailInput.value;
    let passwordValaue = passwordInput.value;
    if(emailValue === 'secret@gmail.com' && passwordValaue === 'secret') {
        alert('Dashboard');
        // redirect to dashboard
        window.location.replace("dashboard.html");
    } else {
        alert('You are not authorized to enter');
    }
}