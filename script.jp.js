// FUNCION PARA SUMAR TRES NUMEROS
function calcular() {

    let b = parseFloat(document.getElementById("base").value);
    let a = parseFloat(document.getElementById("altura").value);

    if (isNaN(b) || isNaN(a) || b <= 0 || a <= 0) {
        alert("Ingresa cantidades válidas");
        return;
    }

    let area = b * a;
    let perimetro = 2 * b + 2 * a;

    document.getElementById("area").innerHTML =
    "Área: " + area;

    document.getElementById("perimetro").innerHTML =
    "Perímetro: " + perimetro;
}