import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para excluir o cargo
 * 
 * @param {Number} idTurma 
 * Identificacao do cargo
 * 
 * @returns {Object}
 */
async function exclusaoTurma(idTurma) {
    var url = `${globals.server.url}/turma`;
    var json = JSON.stringify({
        idTurma: idTurma
    });
    var resposta = await request.delete(url, json, true);
    return resposta;
}

export default exclusaoTurma;