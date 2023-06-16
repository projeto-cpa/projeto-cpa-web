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
async function apiRecuperarUsuario(dados) {
    var json = JSON.stringify(dados);
    var url = `${globals.server.url}/usuario/recuperar`;
    var resposta = await request.post(url, json)
    return resposta;    
}

export default apiRecuperarUsuario;