import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para alternar o estado de ativacao
 * @param {Number} idCurso
 * 
 * @returns {Object}
 */
async function ativacaoCurso(idCurso) {
    var url = `${globals.server.url}/curso/ativacao`;
    var json = JSON.stringify({
        idCurso: idCurso
    })
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default ativacaoCurso;