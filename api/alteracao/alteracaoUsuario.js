import request from '../../helpers/requests';
import globals from '../../helpers/globals';

/**
 *
 *@param {Number}  idUsuario
 * @returns {Object}
 */
async function alteracaoUsuario(senha, idUsuario) {
    var url = `${globals.server.url}/usuario?id=${idUsuario}`;
    var json = JSON.stringify({
        senha: senha,
        idUsuario: idUsuario
    });
    var resposta = await request.put(url, json, true);
    return resposta;
}

export default alteracaoUsuario;
