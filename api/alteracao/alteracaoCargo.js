import request from "../../helpers/requests.js";
import formToJSON from "../../helpers/formToJSON.js";
import globals from "../../helpers/globals.js";

/**
 * Retorna a requisicao de alteracao de cargo
 * 
 * @param {FormData} data 
 * Dados do cargo
 * 
 * @returns {Object}
 */
async function alteracaoCargo(data) {
    var url = `${globals.server.url}/cargo`;
    var json = formToJSON(data);
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default alteracaoCargo;