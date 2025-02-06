// Nessa aula vamos conversar e observar mais sobre abstrações em JS e TS e como as abstrações podem nos ajudar a construir códigos melhores!
//DIO Banking
import {PeopleAccount} from "./class/PeopleAccount";
import {CompanyAccount} from "./class/CompanyAccount";

console.log('------------------------------ People Account ---------------------------------')
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Leandro Ribeiro', 10)
console.log(peopleAccount)

console.log('------------------------------ Company Account ---------------------------------')
const companyAccount: CompanyAccount = new CompanyAccount('Laiza Medeiros', 15)
console.log(companyAccount)
