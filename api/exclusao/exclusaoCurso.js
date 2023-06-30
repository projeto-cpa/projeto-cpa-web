import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para excluir o curso
 * 
 * @param {Number} idCurso
 * Identificacao do curso
 * 
 * @returns {Object}
 */
async function exclusaoCurso(idCurso) {
    var url = `${globals.server.url}/curso`;
    var json = JSON.stringify({
        idCurso: idCurso
    });
    var resposta = await request.delete(url, json, true);
    return resposta;
}

export default exclusaoCurso;