//TODO: class account: name, accountNUmber
export abstract class DioAccount {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }
    //TODO: getters & setters

    //TODO: métodos: depositar, sacar
    deposit():void {
        console.log('Você depositou: R$ ')
    }

    withdraw():void {
        console.log('Você sacou: R$ ')
    }

    getValue():void {
        console.log('Seu saldo é de: R$ ' + this.balance)
    }
}