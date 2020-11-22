// Zadanie 1

let links = document.getElementsByClassName('list');

console.log(links);

// Zadanie 2

function tagElements(tag) {
    const elements = document.getElementsByTagName(tag);
    for (let i = 0; i<elements.length; i++) {
        console.log(elements[i]);
    }
}

tagElements('ul');

// Zadanie 3

const listElement = document.getElementById('list');

console.log(listElement);
