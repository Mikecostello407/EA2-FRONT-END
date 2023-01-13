console.log ("Hola miamor bienvenido a las cariñosas")
var variable = true;
const constante=5;
console.log(constante);
variable=false;
console.log(variable);


//operadores aritmeticos
var Num1 = 15
var Num2 = 3
var vNom = "Maik Costilla"
var vApellidos = " Hidalgo Teillier"
console.log("Suma: ",Num1+Num2)
console.log("Resta: ",Num1-Num2)
console.log("División: ",Num1/Num2)
console.log("Multiplicación: ",Num1*Num2)
console.log("Nombre Completo: "+vNom+""+vApellidos)
console.log("Resto de división: ",Num1%Num2)

//sentencias condicionales

if(Num1%2 == 0) {
    console.log("El",Num1,"Es Número par");
}
else {
    console.log("El",Num1,"Es Número impar");
}

//Operadores de comparación 
var vGlosa = "El Número: "


// FUNCIONES
function Suma(){ 
    var vfNum1 = document.getElementById("vNum1").value;
    var vfNum2 = document.getElementById("vNum2").value;
    if(vfNum1==="" || vfNum2===""){
        alert("Debe completar todos los datos");
    }
    else{
        var vfSuma = parseInt(vfNum1) + parseInt(vfNum2);
        document.getElementById("vResultado").value = vfSuma;
    }

}