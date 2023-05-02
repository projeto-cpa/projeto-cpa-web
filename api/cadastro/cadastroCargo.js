import formToJSON from "../../helpers/formToJSON.js";

async function cadastroCargo(data) {
    console.log('data', data);
    var json = formToJSON(data);
    console.log('json', json);

    var opcoes = {
        body: json,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors"
    };

    var resposta = await new Promise(function (resolver) {
        fetch('http://localhost:8080/cargo', opcoes).then(function (response) {
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

export default cadastroCargo;