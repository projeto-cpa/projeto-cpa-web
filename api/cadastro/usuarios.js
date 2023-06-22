import globals from "../../helpers/globals.js";
import formToJSON from "../../helpers/formToJSON.js";
import request from "../../helpers/requests.js";

/**
 * Retorna a requisicao de cadastro de usuario
 * 
 * @param {FormData} data 
 * Dados do usuario
 * 
 * @returns {Object}
 */
async function cadastroUsuario(data) {
    var json = formToJSON(data);
    var url = `${globals.server.url}/usuario`;
    var resposta = await request.post(url, json, true);
    return resposta;
}

export default cadastroUsuario;