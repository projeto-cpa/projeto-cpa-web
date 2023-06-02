import request from '../../helpers/requests';
import globals from '../../helpers/globals';

/**
 *
 *@param {Number}  idUsuario
 * @returns {Object}
 */
async function listagemUsuario(idUsuario) {
    var url = `${globals.server.url}/usuario/detalhar?id=${idUsuario}`;
    var resposta = await request.get(url, true);
    return resposta;
}

export default listagemUsuario;
