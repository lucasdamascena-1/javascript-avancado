class NegociacaoController{

    constructor(){
        // querySelector irá para a variável $, mas ainda manterá uma associação com document
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update();
    }

    /*Programação Defensiva protegendo a Lista de Negociações.
      Quando alguém pede a lista de negociações é devolvida uma cópia da lista.*/


    adiciona(event){
        event.preventDefault();
	
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        //this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();		
        //console.log(this._listaNegociacoes._negociacoes);
    }

    _criaNegociacao(){
        new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario(){
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 1;

        this._inputData.focus();
    }
}