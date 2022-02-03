import { cliente } from "./cliente.js";
import {ContaCorrente} from "./contaCorrente.js"

const cliente1 = new cliente("Alice", 88822233309);
const cliente2 = new cliente("Feliciano", 33322233309);
const ContaCorrenteAlice = new ContaCorrente(1001, cliente1);

ContaCorrenteAlice.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
ContaCorrenteAlice.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
