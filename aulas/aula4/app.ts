//Estruturas de decisão
const num: number = 7

/*
Estrutura If-Else
são estruturas de decisão baseadas em "SE" e "SENÃO"
podem ter mais de duas opções ao usar else if entre um if e um else
 */

if (num < 5) {
    console.log('Numero menor que 5')
} else if (num === 5) {
    console.log('Numero igual a 5')
} else {
    console.log('Numero maior que 5')
}

//objetos literais
const tipoUsuario = {
    admin: 'Seja bem vindo, administrador!',
    estudante: 'Olá estudante, bem vindo!',
    visitante: 'Olá visitante, bem vindo!'
}



function validarUsuario(usuario: string) {
    console.log(tipoUsuario[usuario as keyof typeof tipoUsuario])
}

const usuario = 'admin'
validarUsuario(usuario)
validarUsuario('estudante')
validarUsuario('visitante')


