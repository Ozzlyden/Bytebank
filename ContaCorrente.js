import { Cliente } from "./Cliente";

export class ContaCorrente{
    agencia;
    _cliente;

    set _cliente(novoValor){            //modificar o atributo da class 
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){      //pegar um atributo da class
        return this.cliente;
    }


    //var saldo é privado
    _saldo = 0;     //#saldo
    sacar(valor){                   //metodo sacar com o parametro (valor)
        if(this._saldo >= valor){    // o this ele especifica que qual obj que vai ser sacado(pode ser ricardo ou alice)
            this._saldo -= valor;
        }
        return valor;
    }
    depositar(valor){
        if(valor >= 0){         //ou if(valor >= 0) return
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){       //pega a var valor e conta como parametro
        const valorSacado = this.sacar(valor);      //valor sacado é igual metodo sacar dessa conta (this), usando a var valor
        conta.depositar(valor);     //var conta metodo depositar, usando var valor
    }
}