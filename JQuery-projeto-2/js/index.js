$(document).ready(function(){
    $('#Campo-telefone').mask('(00) 00000-0000')

    $('#cep').mask('00-000-000')

    $('#cpf').mask('000.000.000-26')

    $('form').validate({
        rules:{
            nome:{
                required:true
            },

            telefone:{
                required: true
            },

            email:{
                email:true,
                required:true
            },

            cep:{
                required:true
            },

            cpf:{
                required:true
            }
        },

        messages:{
            nome: 'O nome é necessário para continuar',

            telefone: 'O telefone e necessário para continuar',

            email: 'O email é necessário para continuar',

            cpf: 'O cpf é necessário para continuar',

            cep: 'O cep é necessário para continuar',

            endereço: 'O endereço e necessário para continuar'




        }
    })
})