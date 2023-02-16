//Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricDevices
{
    constructor(name, power)
    {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn()
    {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    getPowerUsed()
    {
        return this.isPlugged ? this.power : 0;
    }
}

class HomeElectricDevices extends ElectricDevices {
    constructor(name, power, usage){
        super(name, power);
        this.isPlugged = false;
        this.usage = usage;
    }
    plugIn()
    {
        super.plugIn();
    }

    getPowerUsed()
    {
        return this.isPlugged ? this.power : 0;
    }

}

const lampa = new HomeElectricDevices('lampa', 45, 'home');
const computer = new HomeElectricDevices('computer', 1000, 'home');

console.log(lampa.getPowerUsed() + computer.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());