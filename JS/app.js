class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        dineroCaja.push(valor * cantidad)
    }
}

let caja = [];
let dineroCaja = [];
let dineroEntregado = [];
let entregado = [];

let sumaDinero = 0;
let div = 0;
let billetes = 0;
let sumaDineroEntregado = 0;
let totalDineroCaja = 0;
let retirar = document.getElementById('retirar');
let resultado = document.getElementById('resultado');
let textBox = document.getElementById('dinero');
let textBox2 = document.getElementById('totalCaja');
let textBox3 = document.getElementById('mensaje');

caja.push(new Billete(50, 10));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 30));

for (let i = 0; i < dineroCaja.length; i++) {
    sumaDinero += dineroCaja[i];
}

retirar.addEventListener('click', entregarDinero);

function entregarDinero() {    
    
    retiroDinero = parseInt(textBox.value);
    
    dineroEntregado.push(retiroDinero)
    
    for (let i = 0; i < dineroEntregado.length; i++) {
        sumaDineroEntregado += dineroEntregado[i];
    }
    
    totalDineroCaja = sumaDinero - sumaDineroEntregado;
    
    entregado = [];

    for (let cash of caja) {
        if (retiroDinero > 0) {
            div = Math.floor(retiroDinero / cash.valor);
            if (div > cash.cantidad) {
                billetes = cash.cantidad;
            }
            else {
                billetes = div;
            }
            entregado.push(new Billete(cash.valor, billetes));
            retiroDinero -= (cash.valor * billetes);
        }
    }
    
    if (retiroDinero > 0) {        
        resultado.innerHTML = 'No es posible realizar esta transacción.';
    }
    else {
        resultado.innerHTML = '';
        textBox3.innerHTML = "Ud acaba de recibir: ";
        for (let e of entregado) {     
            resultado.innerHTML += e.cantidad + " billetes de: $" + e.valor + "<br/>";                  
        }
        textBox2.innerHTML = "Total en caja: $" + totalDineroCaja;
    }
    
    sumaDineroEntregado = 0;

}