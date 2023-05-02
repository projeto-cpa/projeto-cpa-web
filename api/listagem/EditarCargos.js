/**
 * Retorna a listagem do cargo
 * @param {Number} pagina 
 * @param {Number} quantidade 
 * @returns 
 */
async function listagemCargo(pagina, quantidade) {

    if (!pagina) {
        pagina = 0;
    }

    if (!quantidade) {
        quantidade = 5;
    }

    var opcoes = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    };

    var resposta = await new Promise(function (resolver) {
        fetch(`http://localhost:8080/cargo?pagina=${pagina}&qtd=${quantidade}`, opcoes).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                resolver({ sucesso: false });
            }
        }).then(function (data) {
            resolver(data);
        });
    });

    return resposta;

}

export default listagemCargo;
