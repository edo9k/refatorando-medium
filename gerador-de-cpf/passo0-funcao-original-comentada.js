/*
 * Gerador de CPF da página http://www.gerardocumentos.com.br/?pg=funcao-javascript-para-gerar-cpf
 * Modificações feitas:
 *  - formatei para a identação que me agrada (dois espaços)
 *  - troquei o `alert` por um `console.log`
 *  - comentei essa versão
 *
 */

function randomiza(n) { /* tudo de boas aqui */
  var ranNum = Math.round(Math.random()*n);
  return ranNum; /* não precisava criar uma variável, mas tá ok */
}

/* 
 * a função mod calcula o módulo de dois números
 * o módulo aqui é a sobra da divisão
 * e nesse caso não está nada 'de boas',
 * porque todo esse código é desnecessário
 * pois o módulo é calculado com o operador %
 * um ótimo lembrete para lermos a documentação da linguagem
 * para evitar reinventar a roda
 */
function mod(dividendo,divisor) { 
  return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

/*
 * esse função poderia ter sido desmembrada em várias funções menores
 */

function gerarCPF() { 
  comPontos = true; // TRUE para ativar e FALSE para desativar a pontuação.
  
  var n = 9;
  var n1 = randomiza(n); /* não há necessidade para isso aqui */
  var n2 = randomiza(n); /* das n formas possíveis, um Array representaria melhor isso aqui */
  var n3 = randomiza(n); /* nove numeros? numeros = Array(9) */
  var n4 = randomiza(n); /* let numeros = Array(9) */
  var n5 = randomiza(n); /* cada um recebe um numero aletario? */
  var n6 = randomiza(n); /* numeros = numeros.map(x => randomiza(9)) */
  var n7 = randomiza(n); /* inclusive dá pra fazer isso na hora de criar o numero */
  var n8 = randomiza(n); /* e retirar a função seta (arrow function) */
  var n9 = randomiza(n); /* const numeros = Array(9).map(randomiza) */

  /* ou seja... de nove linhas pra uma */

  /* calculo basico do primeiro digito verificador do cpf */
  /* precisamos de um pouco de teoria aqui */
  /* <inserir explicação do calculo do cpf aqui> */

  var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
  /* vamos ter que somar a lista que criamos 
   * somar um lista -> reduce
   * const d1 .... PAUSA PRA ESTUDAR POINT FREE FUNCTIONS! */


  d1 = 11 - ( mod(d1,11) );
  if (d1>=10) d1 = 0;
  var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
  d2 = 11 - ( mod(d2,11) );
  if (d2>=10) d2 = 0;
  retorno = '';
  if (comPontos) cpf = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
  else cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;

  /* alert(cpf); <- não funciona no node */
  console.log(cpf); /* -< funciona no node de boas */
}

gerarCPF();

