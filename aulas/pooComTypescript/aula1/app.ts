//como um objeto é formado no JS/Typescript
const user = {
    name: 'Leandro',
    age: 27,
}

console.log(user.name)

//um objeto tambem podem conter metódos internos
const user2 = {
    name: 'Leandro',
    age: 27,

    //metodos
    showName() {
        console.log(this.name)
    }
}
user2.showName()

/*
 Criar classes manualmente durante
 o processo de desenvolvimento é anti-performatico
 então podemos usar um recurso do JS e TS para agilizarmos
 e reaproveitarmos mais código e digitar menos código
*/
console.log('------------------- Classes --------------------------')
class User {
    //declaração de variaveis
    name: string
    age: number

    //cosntrutores
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    //metodos
    showName() {
        console.log(this.name)
    }
    showAge() {
        console.log(this.age)
    }
}

const user1 = new User('Leandro', 27)
user1.showName()
user1.showAge()