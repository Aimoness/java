// Parâmetros de função
                //2      //2
function soma (numero1, numero2) {
    return numero1 + numero2; 
}

console.log(soma(2,2));
console.log(soma(-580,256));
console.log(soma(1000,8000));


// Parâmetros x argumentos

// Ordem dos parâmetros

function nomeIdade (nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
  
}

//console.log(nomeIdade(19, "Aimone"))

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica (numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

                            //9                
console.log(multiplica(soma (4,5)))