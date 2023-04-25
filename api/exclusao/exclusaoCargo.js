/**
 * Envia uma requisicao para excluir o cargo
 * @param {Number} idCargo 
 * @returns 
 */
async function exclusaoCargo(idCargo) {

    var json = JSON.stringify({
        idCargo: idCargo
    })

    var opcoes = {
        body: json,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors"
    };

    var resposta = await new Promise(function (resolver) {
        fetch('http://localhost:8080/cargo/exclusao', opcoes).then(function (response) {
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

export default exclusaoCargo;