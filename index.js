function cuadrado(){
    var hoja =document.getElementById("hoja");
    hoja.innerHTML="";
    var cuadrado2 = document.createElement("div");
    cuadrado2.classList.add("cuadrado");
    hoja.appendChild(cuadrado2)
}


function circulo(){
    var hoja= document.getElementById("hoja");
    hoja.innerHTML="";
    var circulo2 = document.createElement("div");
    circulo2.classList.add("circulo")
    hoja.appendChild(circulo2)
}


function rectangulo(){
    var hoja= document.getElementById("hoja");
    hoja.innerHTML="";
    var rectangulo2 = document.createElement("div");
    rectangulo2.classList.add("rectangulo")
    hoja.appendChild(rectangulo2)
}