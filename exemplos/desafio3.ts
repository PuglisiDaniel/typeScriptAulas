// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0'

function somarAoSaldo(soma:number):void {
    let aux = Number(campoSaldo.innerHTML)
    campoSaldo.innerHTML = `${soma+aux}`;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
    if(soma){
        somarAoSaldo(Number(soma.value));
    }
    
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});