import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; //para que o atributo some
    agencia;
    _cliente;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    // #saldo = 0;
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente= cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    } 
}