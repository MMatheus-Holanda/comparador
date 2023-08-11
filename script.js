function comparar() {
const n1 = Number(document.getElementById('n1').value) || 0;
const operador = document.getElementById('operador').value;
const n2 = Number(document.getElementById('n2').value) || 0;

let result;

 switch (operador) {
  
    case 'maior':
     result = n1 > n2;
     break;

     case 'menor':
     result = n1 < n2;
     break;

     case 'maiorIgual':
     result = n1 >= n2;
     break;

     case 'menorIgual':
     result = n1 <= n2;
     break;

     case 'igualdade':
     result = n1 == n2;
     break;

     case 'diferenca':
     result = n1 != n2;
     break;
 };

 let inputResult = document.getElementById('result') ;
 inputResult.value = result;
};