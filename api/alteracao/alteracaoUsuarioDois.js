import request from '../../helpers/requests';
import globals from '../../helpers/globals';

/**
 *
 *@param {Number}  idUsuario
 * @returns {Object}
 */
async function alteracaoUsuarioDois(usuario) {
    delete usuario.cargo;
    var url = `${globals.server.url}/usuario/${usuario.id}`;
    var json = JSON.stringify(usuario);
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default alteracaoUsuarioDois;