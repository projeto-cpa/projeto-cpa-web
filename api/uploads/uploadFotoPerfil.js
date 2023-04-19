import formToJSON from "../../helpers/formToJSON.js";

async function Requisicao(data) {
   

    var opcoes = {
        body: data,
        method: 'POST',
        mode: "cors"
    };

    var resposta = await new Promise(function (resolver) {
        fetch('http://localhost:8080/cadastro/perfil', opcoes).then(function (response) {
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

export {
    Requisicao
};