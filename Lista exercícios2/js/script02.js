function at(){

let votosBrancos = parseInt(prompt("digite o total de votos brancos"));
let votosNulos = parseInt(prompt("digite o total de votos nulos"));
let votosValidos = parseInt(prompt("digite o total de votos válidos"));
let totalVotos = votosBrancos+votosNulos+votosValidos;

votosBrancos = votosBrancos/totalVotos*100;
votosNulos = votosNulos/totalVotos*100;
votosValidos = votosValidos/totalVotos*100;

document.write("O total de votos é : "+totalVotos);
document.write("O percentual de votos brancos é : "+votosBrancos+"% ");
document.write("O percentual de votos nulos é : "+votosNulos+"% ");
document.write("O percentual de votos válidos é :"+votosValidos+"% ");
}
