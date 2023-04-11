import formToJSON from "../../helpers/formToJSON.js";   

async function apiCadastroCursos(data) {
    console.log('data', data);
    var json = formToJSON(data);
    console.log('json', json);

    var opcoes = {
        body: json,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "cors"
    };

    var resposta = await new Promise(function (resolver) {
        fetch('http://localhost:3005/cadastro/cursos.json', opcoes).then(function (response) {
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

export default apiCadastroCursos;