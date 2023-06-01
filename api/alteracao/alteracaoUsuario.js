import request from '../../helpers/requests';
import globals from '../../helpers/globals';

/**
 *
 *@param {Number}  idUsuario
 * @returns {Object}
 */
async function alteracaoUsuario(usuario) {
    var url = `${globals.server.url}/usuario/${usuario.id}`;
    var json = JSON.stringify(usuario);
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default alteracaoUsuario;
