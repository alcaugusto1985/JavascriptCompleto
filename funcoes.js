//FUNÇÃO LITERAL
function minhaFuncao() { //nome da função "minhaFuncao" é opcional 
    //corpo da função
}

function somar(n1, n2) { //funções que passam parametros ex: (n1, n2)
    return n1 + n2; //toda função retorna um valor ou resultado 
}

var somar = somar(10, 20);
console.log("A soma é " + somar); //console.log representa o teste da função no console do navegador


//FUNÇÃO ANONIMA 
var teste = function() { //função anonima atrelada a uma variavel (teste)
    console.log('teste')
};
teste();


//FUNÇÃO PASSADA POR PARAMETRO 
var teste = function(f) {
    f();
};
teste(function() {
    console.log('função passada por parametro');
});


//VARIAVEIS NO ESCOPO LOCAL
var x = 0; //variavel no escopo global (fora da função)

function mostraX() {
    var x = 10; //variavel no escopo local (dentro da função)
    console.log('mostraX: ' + x);
}
mostraX()


//VARIAVEIS NO ESCOPO GLOBAL
var x = 0; //variavel no escopo global

function mostraX() {
    x = 10; //variavel no escopo global dentro de uma função
    console.log('mostraX ' + x);
}
mostraX()

console.log('-------------------------------------------');

//FUNÇÕES AUTO-INVOCAVEIS IFEE
(function() {
    'use strict'; //NÃO PERMITE CRIAR VARIAVEIS NO ESCOPO GLOBAL DENTRO DE UMA FUNÇÃO
    var isValid = false;
    console.log(isValid);

    function somar() {
        console.log(arguments);
        var result = 0;
        var x = 0;
        while (arguments[x]) {
            result += arguments[x];
            x++
        }
        console.log('result ' + result);
    }
    somar(10, 20, 30, 20);
})();