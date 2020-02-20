class NegociacaoController{

    adiciona(event){
        event.preventDefault();

        // querySelector irá para a variável $, mas ainda manterá uma associação com document
        let $ = document.querySelector.bind(document);
        
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

    }
}