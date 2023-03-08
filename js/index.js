

document.getElementById('botonMostrar').addEventListener('click', function () {
    document.getElementById('trabajos-id').style.display = 'flex';
    document.getElementById('botonMostrar').style.display = 'none';
    document.getElementById('botonOcultar').style.display = 'flex';
}) 


document.getElementById('botonOcultar').addEventListener('click', function () {
    document.getElementById('trabajos-id').style.display = 'none';
    document.getElementById('botonOcultar').style.display = 'none';
    document.getElementById('botonMostrar').style.display = 'flex';
}) 


