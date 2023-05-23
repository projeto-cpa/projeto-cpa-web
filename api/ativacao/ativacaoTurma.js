import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Envia uma requisicao para alternar o estado de ativacao
 * @param {Number} idTurma 
 * 
 * @returns {Object}
 */
async function ativacaoTurma(idTurma) {
    var url = `${globals.server.url}/turma/ativacao`;
    var json = JSON.stringify({
        idTurma: idTurma
    })
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default ativacaoTurma;