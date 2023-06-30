import globals from "../../helpers/globals.js";
import formToJSON from "../../helpers/formToJSON.js";
import request from "../../helpers/requests.js";

/**
 * Retorna a requisicao de cadastro da turma
 * 
 * @param {FormData} data 
 * Dados do turma
 * 
 * @returns {Object}
 */
async function cadastroTurma(data) {
    var json = formToJSON(data);
    var url = `${globals.server.url}/turma`;
    var resposta = await request.post(url, json, true);
    return resposta;
}

export default cadastroTurma;