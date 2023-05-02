/**
 * Envia uma requisicao para alternar o estado de ativacao
 * @param {Number} idCargo 
 * @returns 
 */
async function ativacaoCargo(idCargo) {

    var json = JSON.stringify({
        idCargo: idCargo
    })

    var opcoes = {
        body: json,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors"
    };

    var resposta = await new Promise(function (resolver) {
        fetch('http://localhost:8080/cargo/ativacao', opcoes).then(function (response) {
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

export default ativacaoCargo;