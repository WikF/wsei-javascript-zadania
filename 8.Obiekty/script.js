// Zadanie 1 
let car = {
    name: "BMW",
    age: 6
}

console.log(car.name);
console.log(car.age);

// Zadanie 2

let car = {
    name: "BMW",
    age: 6,
    changeName: function(newName){this.name = newName;}
}
console.log(car.name)
car.changeName("Polonez")
console.log(car.name)

// Zadanie 3 
var newObject = {
    sum: 0,
    sumValues: function(array) {
        array.forEach(item => this.sum += item);
    }
}

newObject.sumValues([1, 5, 7]);
console.log(newObject.sum);

// Zadanie 4
var car={
    name:"BMW",
    age: 12
}


for(let key in car){
    console.log(`${key}: ${car[key]}`);
}

// Zadanie 5
const car = {
	name: 'Fiat',
	age: 35,
	color: 'red',
};
const carcountrycity = {
	country: 'Poland',
	city: 'Krakow',
};
car.production = carcountrycity;
console.log(car.production.country, car.production.city);

// Zadanie 6
const car = {
	name: 'Fiat',
	age: 35,
	color: 'red'
};

car.width = 156;

car.hello = () => {
    console.log("Hello");
}

car.hello();
