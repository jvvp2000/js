console.log('Joao')
console.log('Bem vindo!')

const valorIngresso = 20;
let idade = 5;
console.log(idade);
let altura = 190;
console.log(altura);
altura = 180;
console.log(altura)
//valorIngresso = 10
console.log(valorIngresso)

let nome = 'Joao'; //string literal
let anos = 21; //number literal
let estaAprovado = true; //boolean
let sobrenome = undefined; //Undefined
let corSelecionada = null; //REdefinir um valor
//tipo symbol

console.log(nome)
console.log(typeof nome);
nome = 5.5;
console.log(nome);
console.log(typeof nome);
console.log(typeof estaAprovado);
console.log(typeof sobrenome);
console.log(typeof corSelecionada);


let pessoa = {              //chave e valor
    nome: 'João',
    idade: 21,
    estaAprovado: true,
    sobrenome: 'Pinto',
    signo: 'sagitario',
    tamanho: '182'
};
console.log(pessoa);
console.log(pessoa.nome);

let familia = [20, 30, 40, 50];
console.log(familia[0]);
familia = [true, 20, 'Joao', 15]
console.log(familia[0])
console.log(familia[2])
let nomeAmigo = ['zé', 'campos', 20]
console.log(nomeAmigo)

let corSite = 'Azul';
function resetaCor(cor, tonalidade) {
    corSite = cor + '' + tonalidade;
}

console.log(corSite);
resetaCor("Vermelho");
console.log(corSite);
resetaCor("verde", " escuro");
console.log(corSite)

//Realizar uma tarefa, não devolve nada
function dizerNome() {
    console.log('Joao')
};
dizerNome();

//Realizar uma tarefa, mas devolve
function MultiplicarDois(valor) {
    return valor * 2;
};
console.log(MultiplicarDois(5));


//Operadores Aritiméticos -------------------------------------------
let salario = 100;
//+ , - , / , * , **
console.log(salario + salario);
console.log(salario - salario);
console.log(salario / salario);
console.log(salario * salario);
console.log(salario ** salario);
//++ , --
let contador = 20;
console.log(contador++)
console.log(contador)
console.log(++contador)
console.log(contador)


//Operadores Atribuição -------------------------------------------
let valorTeclado = 100;
console.log(valorTeclado);
valorTeclado += valorTeclado;
console.log(valorTeclado);
valorTeclado -= valorTeclado;
console.log(valorTeclado);


//Operadores de Comparação -------------------------------------------
console.log(1 === 1);
console.log('1' === 1); //Compara o valor e o tipo
console.log('1' == 1);  //Apenas compara o valor


//Operadores Lógicos -------------------------------------------
//Operador ternário      ex: cliente, 100 premium, comum
let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//&&
let maiorIdade = false;
let carteiraTrabalho = true;
let podeAplicar = maiorIdade && carteiraTrabalho;
console.log(podeAplicar);

//||
podeAplicar = maiorIdade || carteiraTrabalho;
console.log(podeAplicar);

//!
let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado);

//Comparações não boleanos
// >Falsy
// >undefined
// >null
// >0
// >false
// >''
// >NaN
console.log(false || '1')
console.log(false || 'joao')
console.log(false || 1 || 3); // A comparação para no primeiro truthy
// Truthy

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao; //Parou no truthy
console.log(corPerfil)

let hora = 17;
if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!')
}
else if (hora >= 13 && hora <= 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}

let permissao = 'gerente'; // comum, gerente, diretor

switch (permissao) {
    case 'comum':
        console.log('Usuário comum');
        break;
    case 'gerente':
        console.log('Usuário gerente');
        break;
    case 'diretor':
        console.log('Usuário diretor');
        break;
    default:
        console.log('Usuário não reconhecido');
}

//For
for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo!', i)
}

//While
let i = 5;
while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i)
    }
    i--;
}

//Do..while
i = 0
do {
    console.log('digitando...');
    i++;
} while (i < 10)

//For..in
//key-value = name/year
const pessoaP = {
    name: 'Joaovittor',
    year: 21
}
for (let chave in pessoaP) {
    console.log(chave);
}

const cores = ['vermelho', 'azul', 'verde'];
for (let indice in cores) {
    console.log(indice, cores[indice])
}

//For..of
for (let cor of cores) {
    console.log(cor)
}

function compararNumeros(numeroA, numeroB) {
    numeroA > numeroB ? console.log(numeroA) : console.log(numeroB);
}
compararNumeros(15, 15)
//Operadores Bitwise -------------------------------------------

const num = 0;
fizzBuzz(num);
function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log('fizzbuzz');
    }
    else if (numero % 5 === 0) {
        console.log('buzz');
    }
    else if (numero % 3 === 0) {
        console.log('fizz');
    }
    else {
        console.log('Não sei :/');
    }
}



function verificarVelocidade(vel) {
    let velRestante = 0;
    if (vel <= 70) {
        console.log('Está certinho');
    }
    else {
        pontos = Math.floor((vel - 70) / 5)
        if (pontos >= 12) {
            console.log('carteira suspendida por perder mais de 12 pontos, totalizando: ' + pontos);
        }
        else {
            console.log('Voce perdeu ' + pontos + ' pontos na carteira');
        }
    }
}
verificarVelocidade(81);

function valorParImpar(numero) {
    for (let i = 0; i < numero; i++) {
        console.log(i + ' ' + (i % 2 === 0 ? 'PAR' : 'IMPAR'))
    }
}
valorParImpar(7);


const filme = {
    titulo: 'Corra',
    diretor: 'CarlinhosMaia',
    ano: 2029,
    personagem: 'Charles'
}
function exibirPropriedades(obj) {
    for (prop in filme) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, obj[prop])
        }
    }
}
exibirPropriedades(filme);

function soma(numero) {
    let resultado = 0;
    for (i = 1; i <= numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            resultado += i;
        }
    }
    console.log(resultado);
}
soma(55);

const arrayNotas = [70, 70, 80];
const final = darNota(arrayNotas);
console.log(final)

function darNota(arrayNotas) {
    const media = calcularMedia(arrayNotas);
    if (media <= 59 && media >= 0) return 'F';
    if (media <= 69) return 'D';
    if (media <= 79) return 'C';
    if (media <= 89) return 'B';
    return 'A'
}

function calcularMedia(array) {
    let temp = 0;
    for (valor of array) {
        temp += valor;
    }
    return temp / (array.length);
}

// exibirAsterisco(10);
// function exibirAsterisco(numero) {
//     for (let i = 1; i <= numero; i++) {
//         let padrao = '';
//         for (let j = 0; j < i; i++) {
//             padrao += '*';
//         }
//         console.log(padrao)
//     }
// }

numerosPrimos(11);
function numerosPrimos(numero) {
    for (let i = 2; i <= numero; i++) {

        if (verificarPrimos(i) === true) console.log(i);
    }
}
function verificarPrimos(i) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) return false;
    }
    return true;
}

const celular = {
    marcaCelular: 'IPHONE',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function () {
        console.log('Fazendo Ligação...')
    }
}
function criarCelular() {
    const celular = {
        marcaCelular: 'IPHONE',
        tamanhoTela: {
            vertical: 155,
            horizontal: 75
        },
        capacidadeBateria: 5000,
        ligar: function () {
            console.log('Fazendo Ligação...')
        }
    }
    return celular;
}
// OU
// se estou passando um parametro igual o item, nao precisa colocar na frente
// FACTORY FUNCTIONS - camelCase
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {                                // não precisa do function
            console.log('Fazendo Ligação...')
        }
    }
}
const celular1 = criarCelular('iphone', 5.5, 2500);
console.log(celular1);

// CONSTRUCTOR FUNCTIONS - PascalCase
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function () {
            console.log('Fazendo ligacao...');
        }
}
const celular2 = new Celular('samsung', 4.5, 3000);
console.log(celular2);

//OBJETO DINAMICOS
const mouse = {
    cor: 'black',
    marca: 'logitech'
}
mouse.peso = 200;
mouse.trocarDPI = function () {
    console.log('trocando dpi...');
}
console.log(mouse)
delete mouse.peso;
delete mouse.trocarDPI;
console.log(mouse);

//CLONANDO OBJETOS
const monitor = {
    tamanho: 24,
    marca: 'samsung',
    cor: 'black',
    ligarMonitor: function () {
        console.log('ligando monitor')
    }
}
const novoObjeto = Object.assign({
    tomada: 'padrao brasileiro'
}, monitor)
console.log(novoObjeto);

const novoObjeto2 = { ...monitor }
console.log(novoObjeto2);

// MATH
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(getRandomNumber(10, 1));

Math.max(3, 4, 5, 6, 7)
Math.min(3, 4, 5, 6, 7)

//STRING
//tipo primitivo 
const mensagem = ' mensagem generica ';
//tipo objeto
const outraMensagem = new String(' mensagem generica no objeto ');

console.log(typeof (mensagem));
console.log(typeof (outraMensagem));

console.log(outraMensagem.length)
console.log(outraMensagem[0])
console.log(mensagem.includes('generica'))
console.log(mensagem.includes('aa'))
console.log(mensagem.startsWith('mensagem'))
console.log(mensagem.endsWith('generica'))
console.log(mensagem.indexOf('generica'))
console.log(mensagem.replace('generica', 'simples'))
console.log(mensagem.trim()) //tirar espaços no inicio e final
console.log(mensagem.split(' '))

//TEMPLATE LITERAL - mantém a formatação
const mensagemString = 'ola companheiro\ne \'companheira\''; //\n é uma sequencia de escape
console.log(mensagemString);
const mensagemTemplate = `ola companheiro
e 'companheira'`;
console.log(mensagemTemplate);

const nomeEmail = 'Joao'
const email =
    `fala gente boa, ${nomeEmail} aqui

se esta vendo isso, obrigado

manda um oi pra mim`;
console.log(email);

//DATE
const data1 = new Date();
console.log(data1);
const data2 = new Date('March 06 2019 09:30');
console.log(data2);
const data3 = new Date(2019, 10, 29, 9, 45);
console.log(data3);

data3.setFullYear(2030);
console.log(data3)
console.log(data2.toDateString())
console.log(data2.toISOString())

//criando endereço

function criarEndereco(rua, cidade, cep) {
    return {
        rua,
        cidade,
        cep
    }
}
function exibirEndereco(endereço) {
    let retornoEndereco = '';
    for (infos in endereço) {
        retornoEndereco += (infos) + ': ' + (endereço[infos]) + ' ';
    }
    console.log(typeof (retornoEndereco))
    return retornoEndereco;
}
const endereço = criarEndereco('alberto lamego', 'campos', 28016811);
console.log(endereço);
console.log(exibirEndereco(endereço));

const endereco3 = criarEndereco('a', 'b', 'c');
const endereco4 = criarEndereco('a', 'b', 'c');

//igualdade de endereço
function saoIguais(endereco3, endereco4) {
    for (let i in endereco3) {
        for (let j in endereco4) {
            if (i === j) {
                console.log(i)
            }
        }
    }

}
console.log(saoIguais(endereco3, endereco4))
function saoIguaisAlternativo(endereco3, endereco4) {
    return endereco3.rua === endereco4.rua &&
        endereco3.cidade === endereco4.cidade &&
        endereco3.cep === endereco4.cep
}
console.log(saoIguaisAlternativo(endereco3, endereco4))
function enderecoMemoriaIguais(endereco3, endereco4) {
    return endereco3 === endereco4;
}
console.log(enderecoMemoriaIguais(endereco3, endereco4))