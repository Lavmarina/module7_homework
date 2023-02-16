//Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

console.log(createEmptyObject())

function createEmptyObject (){
    const emptyObj = Object.create(null)
    return emptyObj
}