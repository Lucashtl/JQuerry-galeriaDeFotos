$(document).ready(function(){
$('header button').click(function(){
    $('form').slideDown();

})

$('#cancelar').click(function(){
    $('form').slideUp();
})

$('form').on('submit',function(e){
    e.preventDefault();

    const Url = $('#url-img-nova').val();
    const ImagemNova = $('<li style= "display: none"></li>');

    $(`<img src="${Url}"/>`).appendTo(ImagemNova);

    $(`<div class="link-img">
    <a href="${Url}" target="_blank" title="Ver imagem em tamanho real">
    Ver imagem em tamanho real
    </a>
    </div>`).appendTo(ImagemNova);
    $(ImagemNova).fadeIn(1000);
    $(ImagemNova).appendTo('ul');
})

})