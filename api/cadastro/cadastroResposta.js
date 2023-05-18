import globals from "../../helpers/globals.js";
import formToJSON from "../../helpers/formToJSON.js";
import request from "../../helpers/requests.js";
import cadastroPergunta from "./cadastroPergunta.js";

/**
 * Retorna a requisicao de cadastro do cargo
 * 
 * @param {FormData} data 
 * Dados do cargo
 * 
 * @returns {Object}
 */
async function cadastroCargo(data) {
    var json = formToJSON(data);
    var url = `${globals.server.url}/resposta`;
    var resposta = await request.post(url, json, true);
    return resposta;
}

export default cadastroPergunta;