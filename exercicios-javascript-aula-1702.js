// Exercício 1: Arrow Function com um parâmetro

const dobro = (num) => num * 2;
console.log(dobro(7)); // 14
console.log(dobro(15)); // 30

// Exercício 2: Arrow Function com múltiplos parâmetros

const dividir = (num1,num2) => num1/num2
console.log(dividir(10, 2)); // 5
console.log(dividir(9, 3));  // 3

// Exercício 3: Arrow Function com múltiplas linhas

function mensagemBoasVindas(nome) {
    return "Seja bem-vindo, " + nome + "!";
}
console.log(mensagemBoasVindas("Carlos")); // "Seja bem-vindo, Carlos!"

// Exercício 4: Higher-Order Function personalizada

const aplicarOperacao = (a, b, operacao) => operacao(a, b);
console.log(aplicarOperacao(5, 3, (x, y) => x + y)); // 8
console.log(aplicarOperacao(10, 2, (x, y) => x * y)); // 20

// Exercício 5: map() – Transformação de um array

const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(num => num * 0.9);
console.log(precosComDesconto); // [90, 180, 270, 360]

// Exercício 6: filter() – Filtrando valores em um array

const idades = [12, 25, 17, 30, 14, 19];
const maioresDeIdade = idades.filter(idade => idade < 18);
console.log(maioresDeIdade); // [12, 17, 14]

// Exercício 7: reduce() – Somando valores de um array

const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => total * num);
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)