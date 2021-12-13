var listaDePecas = ["Filtro de Ar","Motor","Amortecedor"]

if (listaDePecas.length < 10) {
// É possível cadastrar
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")
}

let peso = 50;
if(peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}else {
    console.log("A peça possui peso adequado")
}

let nomePeca = "Disco de Freio"
if (nomePeca.length>3){
    console.log("Nome de peça está adequado para o cadastro")
}else if(nomePeca.length ==0){
    console.log("O nome da peça não pode ser vazio")
}else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}



