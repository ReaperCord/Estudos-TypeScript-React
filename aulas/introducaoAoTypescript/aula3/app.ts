interface Pessoa {
    nome: string,
    idade: number,
    // ? -> faz com que o tipo se torne opicional para aplicação de uma interface para um objeto
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Leandro',
    idade: 27,
}
console.log(pessoa)

const outraPessoa: Pessoa = {
    nome: 'João',
    idade: 28,
    profissao: 'Desenvolvedor',
}
console.log(outraPessoa);

const arrayPessoa: Pessoa[] = [
    pessoa, outraPessoa
]
console.log('--------------------------- arrayPessoa1 ---------------------------');
console.log(arrayPessoa)
//ou

const arrayPessoa2: Array<Pessoa> = [
    pessoa, outraPessoa
]
console.log('--------------------------- arrayPessoa2 ---------------------------');
console.log(arrayPessoa2);
