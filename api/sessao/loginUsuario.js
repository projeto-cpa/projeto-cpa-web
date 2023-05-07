import globals from "../../helpers/globals.js";
import request from "../../helpers/request.js";

/**
 * Retorna a requisicao de login do usuario
 * 
 * @param {Object} dados 
 * Dados do usuario
 * 
 * @returns {Object} 
 */
async function apiLoginUsuario(dados) {
    var json = JSON.stringify(dados);
    var url = `${globals.server.url}/usuario/login`;
    var resposta = await request.post(url, json)
    return resposta;
}

export default apiLoginUsuario;