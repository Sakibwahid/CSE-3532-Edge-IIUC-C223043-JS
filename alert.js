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
let username;

// alert( `hello ${1}` ); 

// alert( `hello ${"name"}` ); 

// alert( `hello ${username}` ); 
// let age=prompt('how old are you?')
let a = Number(prompt("First number?", 67));
let b = Number(prompt("Second number?", 2));
// a=Number(a);
// b=Number(b);

console.log(a + b); 

let name = "Ilya";

// the expression is a number 1
alert( `hello ${'1'}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `${name}` ); // hello Ilya