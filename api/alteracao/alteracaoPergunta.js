import request from '../../helpers/requests';
import globals from '../../helpers/globals';
import formToJSON from "../../helpers/formToJSON.js";

/**
 *
 *@param {Number}  form
 * @returns {Object}
 */
async function alteracaoPergunta(form) {
    var url = `${globals.server.url}/pergunta`;
    var json = formToJSON(form)
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default alteracaoPergunta;
