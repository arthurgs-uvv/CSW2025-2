function calcula_idade() {
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var ano = document.getElementById('ano').value;
    
    datahoje = new Date ();

    var diahoje = datahoje.getDate();
    var meshoje = datahoje.getMonth() + 1;
    var anohoje = datahoje.getFullYear();

    if (dia <= 0 || dia > 31 || ano <= 0 ){
        alert("Digite uma data de nascimento válida")
        return
    }

    usuario_ano = anohoje - ano;

    if (mes > meshoje){
        usuario_ano--;
    }
    else if ((mes == meshoje) && (dia > diahoje)){
        usuario_ano--;
    }

    document.getElementById('resposta').innerHTML = 'Data de nascimento: '+ dia + '/' + mes + '/' + ano + '<br>' + 'Você tem: ' + usuario_ano + ' anos' + '<br>' + 'Data de hoje: ' + diahoje + '/' + meshoje + '/' + anohoje;
}
function calculadora_numeros(){
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}