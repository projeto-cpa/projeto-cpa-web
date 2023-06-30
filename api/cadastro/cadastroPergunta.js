import globals from "../../helpers/globals.js";
import formToJSON from "../../helpers/formToJSON.js";
import request from "../../helpers/requests.js";

/**
 * Retorna a requisicao de cadastro do eixo
 * 
 * @param {FormData} data 
 * Dados do eixo
 * 
 * @returns {Object}
 */
async function cadastroPergunta(data) {
    var json = formToJSON(data);
    var url = `${globals.server.url}/pergunta`;
    var resposta = await request.post(url, json, true);
    return resposta;
}

export default cadastroPergunta;