
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;       
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            
         carArr.push(carClass);


        } else {

            let posicao = GetCarArrPosition(carArr, carClass);

            console.log(posicao);
            carArr.splice(posicao, 1);
            
          
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
  
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação!");
        return;
    }
    if (carArr.length > 2) {

        alert("É possivel comparar apenas 2 carros!");
        return;

    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    montaTabelaCarro0();
    montaTabelaCarro1();
    
}


function montaTabelaCarro0 () {

    var carro = carArr[0]; 

    var imagemTd = document.querySelector("#compare_image_0");
    var modelo = document.querySelector("#compare_modelo_0");
    var alturaCacamba = document.querySelector("#compare_alturacacamba_0");
    var alturaVeiculo = document.querySelector("#compare_alturaveiculo_0");
    var alturaSolo = document.querySelector("#compare_alturasolo_0");
    var capacidadeCarga = document.querySelector("#compare_capacidadecarga_0");
    var motor = document.querySelector("#compare_motor_0");
    var potencia = document.querySelector("#compare_potencia_0");
    var volumeCacamba = document.querySelector("#compare_volumecacamba_0");
    var roda = document.querySelector("#compare_roda_0");
    var preco = document.querySelector("#compare_preco_0");

    
    
    imagemTd.innerHTML = '<img src="' + carro.image + '"width = "200">';
    modelo.innerHTML = carro.nome;
    alturaCacamba.innerHTML = carro.alturaCacamba;
    alturaVeiculo.innerHTML = carro.alturaVeiculo;
    alturaSolo.innerHTML = carro.alturaSolo;
    capacidadeCarga.innerHTML = carro.capacidadeCarga;
    motor.innerHTML = carro.motor;
    potencia.innerHTML = carro.potencia;
    volumeCacamba.innerHTML = carro.volumeCacamba;
    roda.innerHTML = carro.roda;
    preco.innerHTML = carro.preco;
    
  

}


function montaTabelaCarro1 () {

    var carro = carArr[1]; 
    var imagemTd = document.querySelector("#compare_image_1");
    var modelo = document.querySelector("#compare_modelo_1");
    var alturaCacamba = document.querySelector("#compare_alturacacamba_1");
    var alturaVeiculo = document.querySelector("#compare_alturaveiculo_1");
    var alturaSolo = document.querySelector("#compare_alturasolo_1");
    var capacidadeCarga = document.querySelector("#compare_capacidadecarga_1");
    var motor = document.querySelector("#compare_motor_1");
    var potencia = document.querySelector("#compare_potencia_1");
    var volumeCacamba = document.querySelector("#compare_volumecacamba_1");
    var roda = document.querySelector("#compare_roda_1");
    var preco = document.querySelector("#compare_preco_1");
    
    
  
    imagemTd.innerHTML = '<img src="' + carro.image + '"width = "200">';
    modelo.innerHTML = carro.nome;
    alturaCacamba.innerHTML = carro.alturaCacamba;
    alturaVeiculo.innerHTML = carro.alturaVeiculo;
    alturaSolo.innerHTML = carro.alturaSolo;
    capacidadeCarga.innerHTML = carro.capacidadeCarga;
    motor.innerHTML = carro.motor;
    potencia.innerHTML = carro.potencia;
    volumeCacamba.innerHTML = carro.volumeCacamba;
    roda.innerHTML = carro.roda;
    preco.innerHTML = carro.preco;

}









