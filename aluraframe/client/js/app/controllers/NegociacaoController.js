class NegociacaoController{

    constructor(){
        // querySelector irá para a variável $, mas ainda manterá uma associação com document
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){
        event.preventDefault();

     
        let helper = new DataHelper();

        let negociacao = new Negociacao(
            helper.textoParaData(texto._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);

    }
}