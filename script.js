var flujoDeCaja = [
    {
        periodo: "enero",
        ingresos: 1500,
        egresos: 1500
    },
    {
        periodo: "febrero",
        ingresos: 2500,
        egresos: 2500
    },
    {
        periodo: "marzo",
        ingresos: 84683,
        egresos: 1155
    },
    {
        periodo: "abril",
        ingresos: 135353,
        egresos: 1533
    },
    {
        periodo: "mayo",
        ingresos: 1535,
        egresos: 5434
    },
    {
        periodo: "junio",
        ingresos: 4343354,
        egresos: 5434534
    },
    {
        periodo: "julio",
        ingresos: 435453,
        egresos: 4543
    },
    {
        periodo: "agosto",
        ingresos: 78351,
        egresos: 7816
    },
    {
        periodo: "septiembre",
        ingresos: 1878,
        egresos: 95634
    },
    {
        periodo: "octubre",
        ingresos: 48483,
        egresos: 9433
    },
    {
        periodo: "noviembre",
        ingresos: 35483,
        egresos: 53133
    },
    {
        periodo: "diciembre",
        ingresos: 3843,
        egresos: 348133
    },
]

function VerificarFlujoDeCaja(){

var ingresos = 0;
var egresos = 0;

for(var i = 0; i < flujoDeCaja.length; i++){
    ingresos += flujoDeCaja[i].ingresos;
    egresos += flujoDeCaja[i].egresos;
}

if(ingresos > egresos){
   return 1;
}
else if(ingresos < egresos){
    return -1;
}
else{
    return 0;
}

}

var ofertas = [
    {
        nombre: "Plan001",
        capital: 150000,
        plazo: 30,
        tasa: 0.15
    },
    {
        nombre: "Plan002",
        capital: 300000,
        plazo: 180,
        tasa: 0.10
    },
    {
        nombre: "Plan003",
        capital: 485000,
        plazo: 60,
        tasa: 0.23
    },
]

function AgregarInteres(ofertas){

var ofertasConInteres = [];


for(var i = 0; i < ofertas.length; i++){
    var interes = (ofertas[i].capital * ofertas[i].plazo * ofertas[i].tasa) / 100;
    ofertasConInteres.push({
        nombre: ofertas[i].nombre,
        capital: ofertas[i].capital,
        plazo: ofertas[i].plazo,
        tasa: ofertas[i].tasa,
        interes: interes
    });
}

 return ofertasConInteres;
}
/*

 Otra forma de hacerlo a cada elemento recorrido de Ofertas[i] lo alojo en una variable "actual" 
    y de alli saco el elemento del objeto que necesito.

    a la variable local interes no la inicializo ya que lo que quiero es que cuando sea utilizada se renueve y 
    se le añada con otro valor

   

for (var i = 0; i < ofertas.length; i++) {
    var Actual = ofertas[i];
    var Interes = (Actual.capital * Actual.plazo * Actual.tasa) / 100;
    ofertasConInteres.push({
        nombre: Actual.nombre,
        capital: Actual.capital,
        plazo: Actual.plazo,
	    tasa: Actual.tasa,
	    interes: Interes
    });    
}

 */
