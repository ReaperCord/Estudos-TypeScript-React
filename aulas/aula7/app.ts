const array1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const stringArray1: Array<string> = ['a', 'b', 'c']

/*
Comando básicos de arrays.
    .length → mostra o tamanho do array
    .push → adiciona um novo elemento a um array
    .pop → remove o último elemento adicionado (Como em uma stack do java)
    .find() → Procura elementos iguais ao solicitado. Ex:
        array.find(num => num === 4)
        a função .find() retorna o primeiro elemento do array que satisfaça as condições da solicitação e não necessáriamente todos os elementos que satifaçam a condição de busca
    .forEach() → procura elementos que satisfaçam a solicitação feita. EX:
        array.forEach(num => num > 4)
        a função .find() retorna todos os elementos que satisfaçam a busca
    .map() → Faz o mesmo que o forEach, mas é masi utilizado em funções asincronas! Aonde o forEach é menos performático

*/
console.log('------------------------------ find() ------------------------------')
let buscaNum = array1.find(num => num > 4)
console.log(buscaNum)

console.log('------------------------------ forEach() ------------------------------')
let buscaNum2 = array1.forEach(num=> console.log(num))
console.log(buscaNum2)

// Operações dentro do forEach
console.log('-------------------- Operação for each > 2 ----------------')
let buscaNum3 = array1.forEach(num=> {
    if(num > 2) {
        console.log(num)
    }
})

console.log('-------------------- Operação for each > 2 e resto 0 ----------------')
let buscaNum4 = array1.forEach(num=> {
    if(num > 2 && num % 2 === 0) {
        console.log(num)
    }
})