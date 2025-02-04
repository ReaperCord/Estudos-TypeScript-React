// Nessa aula vamos conversar e observar mais sobre abstrações em JS e TS e como as abstrações podem nos ajudar a construir codigos melhores!
//DIO Banking

//TODO: class account: name, accountNUmber
class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    //TODO: métodos: depositar, sacar
    deposit(){
        console.log('Você depositou: R$ ')
    }

    withdraw(){
        console.log('Você sacou: R$ ')
    }
}

const newAccount = new Account('Leandro', 1)
console.log(newAccount)