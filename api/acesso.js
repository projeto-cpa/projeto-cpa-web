
async function apiCadastroCargos(data) {
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
        fetch('/cadastro/acesso.json', opcoes).then(function (response) {
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

export default apiCadastroCargos;