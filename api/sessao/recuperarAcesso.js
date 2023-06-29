import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

/**
 * Retorna a requisicao de recuperar usuario
 * 
 * @param {Object} dados 
 * Dados do usuario
 * 
 * @returns {Object} 
 */
async function apiRecuperarAcesso(dados) {
    var json = JSON.stringify(dados);
    var url = `${globals.server.url}/usuario/recuperar/acesso`;
    var resposta = await request.put(url, json)
    return resposta;    
}

export default apiRecuperarAcesso;