import {Cliente} from "./Cliente.js";           //importando a class Cliente do arquivo Cliente.js
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);         // cria uma obj cliente1 apartir do molde Cliente ()
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

/*
const cliente2 = new Cliente();
cliente2.nome = "Alicia";
cliente2.cpf = 11144433309;
*/

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Alice";
conta2.cliente.cpf = 11122233309;
conta2.agencia = 102;

contaCorrenteRicardo.transferir(200, conta2);  //passando 200 para a conta2

console.log(contaCorrenteRicardo);