//Задание 4.
//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку.
// Посчитайте суммарную потребляемую мощность
// всех включенных приборов (передайте аргумент).
//Таких приборов должно быть как минимум два (например,
// настольная лампа и компьютер). Выбрав прибор, подумайте,
// какими свойствами он обладает.

function ElectricDevices(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}
ElectricDevices.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

ElectricDevices.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}
function HomeElectricDevices (name, power, usage ) {
    this.name = name;
    this.power = power;
    this.usage = usage;
}

HomeElectricDevices.prototype = new ElectricDevices ();

const lampa = new HomeElectricDevices('lampa', 45, 'home');
const computer = new HomeElectricDevices('computer', 1000, 'home');

console.log(lampa.getPowerUsed() + computer.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());