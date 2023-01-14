console.log("Pagina convulsionando")
document.getElementById('Titulo').innerHTML= "TITULO DE PAGINA."

$(Document).ready(function(){
    console.log("Pagina recontra convulsionando")
    $('h1').html('Texto modificado sensualmente por las cariñosas');
    $('#Titulo').html('Texto recontra modificado por su ide');
    $('.display-3').html('Texto modificado por su clase');
}) 


// Agregar clase [jq.classAdd]
$('h1').addClass('text-center text-uppercase');
$('#p2').addClass('text-danger');
//Quitar clase [jq.removeclass]
$('#Parrafos').removeClass('display-5');
//Agregar elemento [jq.append]
$('#Parrafos').append('<p>Cuarto parrafo agregado con jqapped</p>');
//Quitar elemento [jq.remove]
$('#p3').remove();
//Modificar propiedad de la carpeta css[jqcssSet]
$('#p1').css('color', 'green');
$('#p2').css({Color:'blue', background:'green', padding:'20px'});

//link imagen
$('img').attr('scr', 'https://i.pinimg.com/originals/5e/5a/af/5e5aaf1c8b220f46e74271f10c2c8d6d.jpg');
$('img').attr('width', '40px');