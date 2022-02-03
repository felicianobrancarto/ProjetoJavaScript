import {cliente} from "./cliente.js";

export class ContaCorrente{
    static  numeroDeContas = 0;
    agencia;
    _cliente;
    //#saldo
    _saldo = 0;


    set cliente (novoValor){
        if (novoValor instanceof cliente){
        this._cliente = novoValor;
    }
    }

    get cliente(){
        return this._cliente;
    }

    

    get saldo(){
        return this._saldo;
    }

    constructor (agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;

    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor; //colocar sempre no final, pq ele para a execução e a ordem em seguida não é realizada.
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this._saldo += valor;
    }
    transferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}