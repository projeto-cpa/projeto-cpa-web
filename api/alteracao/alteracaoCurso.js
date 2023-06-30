import request from "../../helpers/requests.js";
import formToJSON from "../../helpers/formToJSON.js";
import globals from "../../helpers/globals.js";

/**
 * Retorna a requisicao de alteracao de curso
 * 
 * @param {FormData} data 
 * Dados do curso
 * 
 * @returns {Object}
 */
async function alteracaoCurso(data) {
    var url = `${globals.server.url}/curso`;
    var json = formToJSON(data);
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default alteracaoCurso;