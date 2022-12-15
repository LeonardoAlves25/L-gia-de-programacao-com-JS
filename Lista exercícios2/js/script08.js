const TP = parseInt(prompt("Digite o tempo da viagem (em horas) : "));
const VM = parseInt(prompt("Digite a velocidade média (em km/h) : "));

const DT = TP*VM;
const LT = DT/12;

alert("A distancia percorrida foi : "+DT+"km");
alert(" A duração total da viagem foi de : "+TP+" horas");
alert("A velocidade média durante a viagem doi de : "+VM+"km/h");
alert(" A quantidade de combustivel usado foi de : "+LT+ " litros");

/*
escreval("a duração total da viagem foi de:", TP, " horas")
escreval("a velocidade media durante a viagem foi de:", VM, "km/h")
escreval("a distancia total da viagem foi de :", DT, "km")
escreval("a quantidade de combustivel usado foi de:", LT, " litros")
*/