function mensagem(){
    var anos = parseInt(prompt("digite sua idade em anos : "));
    var meses = parseInt(prompt("digite o mês em que você nasceu : "));
    var dias = parseInt(prompt("digite o dia em que você nasceu : "));
    var idade

    idade = (anos*12)*30 + (meses*30) + dias;

    alert("A quantidade de idas que você viveu é :"+idade);
}