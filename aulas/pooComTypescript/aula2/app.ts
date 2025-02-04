// Nessa aula vamos conversar e observar mais sobre abstrações em JS e TS e como as abstrações podem nos ajudar a construir codigos melhores!
//DIO Banking

//TODO: class account: name, accountNUmber
abstract class Account {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }
    //TODO: getters & setters

    //TODO: métodos: depositar, sacar
    deposit() {
        return 'Você depositou: R$ '
    }

    withdraw(){
        return 'Você sacou: R$ '
    }

    getValue(){
        return 'Seu saldo é de: R$ ' + this.balance
    }
}

class PeopleAccount extends Account {
    doc_id: number

    constructor(doc_id:number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro Ribeiro', 10)
console.log(peopleAccount)