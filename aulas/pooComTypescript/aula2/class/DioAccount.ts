//TODO: class account: name, accountNUmber
export abstract class DioAccount {
    private name: string
    accountNumber: number
    balance: number = 0
    private status: boolean = false

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }
    //TODO: getters & setters
    getName(): string{
        return 'Nome do cliente: ' + this.name
    }
    setName(name: string) {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    setStatus(status: boolean) {
        this.status = status
        console.log('Status de conta atualizado com sucesso!')
    }

    getStatus(): boolean {
        return this.status
    }

    //TODO: métodos: depositar, sacar
    deposit():void {
        if(this.validateStatus() == true){
            console.log('Deposito Autorizado')
            console.log('Você depositou: R$ ')
        } else {
            console.log('Deposito não autôrizado, remetente não tem uma conta valida em nosso sistema')
        }


    }

    withdraw():void {
        console.log('Você sacou: R$ ')
    }

    getValue():void {
        console.log('Seu saldo é de: R$ ' + this.balance)
    }

    validateStatus():boolean {
        if (this.status === true) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}