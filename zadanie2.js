//Задание 2.
//Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function propertyCheck (name, obj) {
    let keys=Object.keys(obj);
    console.log(keys.some(item => item === name))}

let car = {
    model: "Prado",
    year: 2012,
    colornumber: "070"
};

propertyCheck ("model", car);
propertyCheck ("country", car); 