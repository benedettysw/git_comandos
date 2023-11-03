function sumaf(a,b) {
    let a;
    let b;

    let suma = parseInt(a) + parseInt(b);

    document.getElementById("res").innerHTML = suma ;

    if (suma % 2 == 0 ){
    alert("el numero es par");
    }else{
    alert("el numero no es par");
    }
}



lista = [1,2,3,4,5,6,7,8]


for (var i in lista) {
    console.log(lista[i]);
}