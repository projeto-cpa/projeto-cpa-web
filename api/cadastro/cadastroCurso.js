import globals from "../../helpers/globals.js";
import formToJSON from "../../helpers/formToJSON.js";
import request from "../../helpers/requests.js";

/**
 * Retorna a requisicao de cadastro do curso
 * 
 * @param {FormData} data 
 * Dados do curso
 * 
 * @returns {Object}
 */
async function cadastroCurso(data) {
    var json = formToJSON(data);
    var url = `${globals.server.url}/curso`;
    var resposta = await request.post(url, json, true);
    return resposta;
}

export default cadastroCurso;
