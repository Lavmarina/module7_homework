//Задание 1.
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function getKeys (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(Object.entries(obj))
            return;
        }
    }
}

const origin = {
    country : "Japan"
};

const car = Object.create(origin);
car.model = "Prado";
car.year = 2012;
car.colornumber = "070";

getKeys (car); 