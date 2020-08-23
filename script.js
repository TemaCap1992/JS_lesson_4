 "use strict"

// TASK 1 ===============================================

let user = {};

function addProperty(titleProperty, valueProperty) {
    Object.defineProperty(user, titleProperty, {
        value: valueProperty,
        configurable: true,
        enumerable: true,
        writable: true
    })
};

addProperty('name', 'Alex');
addProperty('age', '34');

console.log(user);


// TASK 2 ===============================================


let car = {
    label: 'Tesla',
    model: 'X',
    changeUserOrCreate: function (label, model) {
        this.label = label;
        this.model = model;
    }
};
console.log(car);

car.changeUserOrCreate('Ferrari', 'Enzo');

let newCar = new car.changeUserOrCreate('Porshe', '911s');

console.log(car);

console.log(newCar);





