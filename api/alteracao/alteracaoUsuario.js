// import request from '../../helpers/requests';
// import globals from '../../helpers/globals';

// /**
//  *
//  *@param {Number}  idUsuario
//  * @returns {Object}
//  */
// async function alteracaoUsuario(usuario) {
//     var url = `${globals.server.url}/usuario/${usuario.id}`;
//     var json = JSON.stringify(usuario);
//     var resposta = await request.put(url, json, true);
//     return resposta;
// }

// export default alteracaoUsuario;


import request from "../../helpers/requests.js";
import formToJSON from "../../helpers/formToJSON.js";
import globals from "../../helpers/globals.js";

/**
 * Retorna a requisicao de alteracao de turma
 * 
 * @param {FormData} data 
 * Dados do turma
 * 
 * @returns {Object}
 */
async function alteracaoUsuario(data) {
    var url = `${globals.server.url}/usuario`;
    var json = formToJSON(data);
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default alteracaoUsuario;