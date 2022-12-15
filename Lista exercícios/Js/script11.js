function mensagem(){
    var baseM = parseInt(prompt("Digite a base maior do trapézio :"));
    var baseMe = parseInt(prompt("Digite a base menor do trapézio :"));
    var altura = parseInt(prompt("digite a altura do trapézio :"));

    resultado = ((baseM+baseMe)*altura)/2;
    alert("a area total do seu trapézio é : "+resultado);

}