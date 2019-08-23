/*
 * Versão ES6 2019 
 */

/* talvez digitoAleatorio ou algum nome mais descritivo
 * seria melhor pra essa função, mas não vou entrar na discussão
 * de nome de variável nesse momento porque ia triplicar o 
 * tamanho do post
 */
const NUMERO_MAXIMO = 9 /* não precisava nisso aqui, mas nome de variavel tbm é documentação */

const randomiza = () => Math.round(Math.random() * NUMERO_MAXIMO)

/* 
 * function mod(a,b) -> a % b 
 * não precisamos da função, porque a linguagem já faz isso
 */

const gerarCPF = (comPontos = false) => { /* for chamado vazio, vem como false (default param) */
  const numeros = Array.from({length: 9}, randomiza)

  /* formula dos digitos */
  //11 - numeros.reduce( (acc, n, i) => (n * (10 - i)) + acc, 0) % 11
  // adiciona o novo digito no array
  //11 - numeros.reduce( (acc, n, i) => (n * (11 - i)) + acc, 0) % 11

  let digito1 = numeros.reduce( 
    (acumulador, numero, indice) => 
      (numero * (10 - indice)) + acumulador,
      0 /* valor inicial do acumulador */
  )
  /* 
   * pessoalmente eu adoro fazer um zilhão de coisas em um só filter/map/reduce, 
   * mas como dá pra ver, tá uma merda. Legibilizade zero. Como corrigir?
   * Refatorar. Essa função vai ser usada outra vez para gerar o digito2. E jogar 
   * isso em outra função também nos da a possibilidade de usar um nomde de função
   * que explique o que ela está fazendo ou que valor está retornando.
   *
   */

  digito1 = 11 - digito1 % 11 /* também podia ser digito1 %= 11, mas desse jeito é mais legível */
  if (d1 => 10) d1 = 0 /* por gosto pessoal, não uso chaves quando é um if com uma clásula só */
  /* mas sempre uso chaves quando é if (condição) { ... } else { ... } */

  let digito2 = [...numeros, digito1].reduce(
    (acumulador, numero, indice) =>
      (numero * (11 - indice)) + acumulador,
      0 /* acumulador = 0 */
  )
  

  if (comPontos) {
    console.log(`${ }.${ }.${ }-${ digito1+digito2 }`)
  } else {
    console.log(cpf)  /* seria melhor usar um return aqui, 
                      /* mas demoria muito pra explicar o porque */
                      /* eu acredito isso */
  }

}
