import globals from "../../helpers/globals.js";
import request from "../../helpers/requests.js";

async function importarUsuario(data) {
    try {
        const url = `${globals.server.url}/usuario/importar`;
        const options = {
            headers: [
                {
                    key: 'Content-Type',
                    value: 'multipart/form-data'
                }
            ]
        }
        const resposta = await request.post(url, data, true, options);
        return resposta;
    } catch (erro) {
        throw erro;
    }
}

export default importarUsuario;