import globals from "../../helpers/globals.js";
import request from "../../helpers/request.js";

/**
 * Envia uma requisicao para alternar o estado de ativacao
 * @param {Number} idCargo 
 * 
 * @returns {Object}
 */
async function ativacaoCargo(idCargo) {
    var url = `${globals.server.url}/cargo/ativacao`;
    var json = JSON.stringify({
        idCargo: idCargo
    })
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default ativacaoCargo;