// Zadanie 1

let sayHi = () => {
    console.log("Udało się!");
}

sayHi();

// Zadanie 2

function number(nr) {
    console.log(nr)
}
number(2);

// Zadanie 3 
let txt = 'text';
returnString  = (txt) => {
    return txt;
}
console.log(returnString(txt));

// Zadanie 4

function myString(paramStr) {
    
    let counter = 0;
 let myInterval =  setInterval(() => {
           counter++;
           if(counter == 5) {
                console.log("Koniec");
               clearInterval(myInterval);
           } else {
                console.log(paramStr);
           }
           
    }, 3000);
}

myString('Jakiś string');
