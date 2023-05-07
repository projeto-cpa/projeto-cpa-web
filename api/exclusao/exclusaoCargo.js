import globals from "../../helpers/globals.js";
import request from "../../helpers/request.js";

/**
 * Envia uma requisicao para excluir o cargo
 * 
 * @param {Number} idCargo 
 * Identificacao do cargo
 * 
 * @returns {Object}
 */
async function exclusaoCargo(idCargo) {
    var url = `${globals.server.url}/cargo/exclusao`;
    var json = JSON.stringify({
        idCargo: idCargo
    });
    var resposta = await request.delete(url, json, true);
    return resposta;
}

export default exclusaoCargo;