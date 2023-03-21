/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
*/

let entrada = require('prompt-sync')();

console.log('Atividade - 07/03')
let valor = '';
valor = entrada('Digite o valor inicial do contador: ');
let n1 = parseInt(valor);
valor = entrada('Digite o valor final do contador: ');
let n2 = parseInt(valor);
let contador = n1;


