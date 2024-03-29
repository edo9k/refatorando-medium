/*
 *
 * Código original de http://www.gerardocumentos.com.br/?pg=funcao-javascript-para-gerar-cpf
 * A única modificação, além da identação, foi trocar alert 
 * por um console.log para poder rodar via node.
 *
 */


const randomiza = n => Math.round(Math.random()*n);

const mod = (dividendo,divisor) => Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
			
const gerarCPF = () => {
  comPontos = true; // TRUE para ativar e FALSE para desativar a pontuação.
			  
	var n = 9;
	var n1 = randomiza(n);
	var n2 = randomiza(n);
	var n3 = randomiza(n);
	var n4 = randomiza(n);
	var n5 = randomiza(n);
	var n6 = randomiza(n);
	var n7 = randomiza(n);
	var n8 = randomiza(n);
	var n9 = randomiza(n);
	var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
	d1 = 11 - ( mod(d1,11) );
	if (d1>=10) d1 = 0;
	var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
	d2 = 11 - ( mod(d2,11) );
	if (d2>=10) d2 = 0;
	retorno = '';
	if (comPontos) cpf = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
	else cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
	
	/* alert(cpf); // alert não funciona com o node... */
  console.log(cpf);
}
			
gerarCPF();

