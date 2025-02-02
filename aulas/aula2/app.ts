//Sintaxe basica de um tipo primitivo com TS
//Os tipos primitivos são: string, number, boolean
let b: string = 'b'
let n: number = 1
let x: boolean = true

//O TS pode aceitar 2 tipos primitivos em uma variavel
let m: string | number = 2
m = 'Leandro'
console.log(m)
m = 1
console.log(m)

//Fazer isso no TS significa o mesmo que fazer
let d: any = 2 //O any significa qualquer tipo é aceito, mas não é uma boa pratica do TS a depender do contexto
console.log(d)
d = true
console.log(d)
d = 'Leandro'
console.log(d)



