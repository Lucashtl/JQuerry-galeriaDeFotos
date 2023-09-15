$(document).ready(function(){


    $('form').on('submit', function(e){
        e.preventDefault();


        const NovaTarefa = $('#tarefa').val();
        const LinhaNova = $('<li></li>');
    
        $(`<p>${NovaTarefa}</p>`).appendTo(LinhaNova);
        $(LinhaNova).appendTo('ul');
    
        $(LinhaNova).click(function(){
            $(this).toggleClass('done');
        })
    })

    

})