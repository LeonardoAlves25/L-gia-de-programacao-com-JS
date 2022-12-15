const salario = parseInt(prompt("Digite seu salário atual :"));
const reajuste = parseInt(prompt("Digite o valor do seu reajuste :"));

const total = salario+reajuste; 
const percentual = total/100;

alert("o percentual do seu reajust é de : "+percentual+"%");
alert("o seu salario total é : "+total);