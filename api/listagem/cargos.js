async function Requisicao(data) {
    var cabecalho = new Headers();

    var opcoes = {
        /*body:data,
        method: 'POST',*/
        method: 'GET',
        headers: cabecalho,
        mode: 'no-cors',
        cache: 'default'
    };

    var resposta = await new Promise(function (resolver) {
        fetch('/listagem/cargos.json', opcoes).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                resolver({ sucesso: false });
            }
        }).then(function (data) {
            resolver(data);
        });
    });

    //console.log('resposta aguardada', resposta);
    return resposta;

}

const Filtros = {
    colunas: [
        { nome: 'id', etiqueta: 'ID', tipo: 'number' },
        { nome: 'nome', etiqueta: 'Nome', tipo: 'string' },
        { nome: 'descricao', etiqueta: 'Descrição', tipo: 'string' }
    ]
};

export { Filtros, Requisicao }