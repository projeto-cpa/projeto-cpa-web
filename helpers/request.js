import Swal from 'sweetalert2';
import cookies from '../helpers/cookies.js';

class Request {

    /**
     * 
     * @param {String} url 
     * Caminho da requisicao
     * 
     * @param {String|Boolean} body 
     * Corpo da requisicao
     * 
     * @param {Object} headers 
     * Cabecalhos da requisicao
     * 
     * @returns {Object}
     */
    async use(url, body, headers) {
        try {
            var resposta = await new Promise(function (resolver) {
                var abort = new AbortController();

                var timeout = setTimeout(function () {
                    abort.abort();
                }, headers.timeout);

                var fopt = {
                    ...headers,
                    'Content-Type': 'application/json',
                    'Accpet-Type': 'application/json',
                    'Authorization': cookies.get('session_token'),
                    timeout: globals.server.timeout,
                    mode: 'cors',
                    signal: abort.signal
                };

                if (body !== false) {
                    fopt.body = body;
                }

                fetch(url, fopt).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error while getting data from API');
                    }
                }).then(function (data) {
                    resolver({
                        ...data,
                        response: true
                    });
                }).catch(function () {
                    var title = abort.signal.aborted ? 'Conexão lenta' : 'Servidor fora do ar';
                    var footer = abort.signal.aborted ? 'Tente novamente mais tarde' : 'Desculpe pelo transtorno';

                    Swal.fire({
                        title: title,
                        /*html*/
                        html: `<div class="text-center overflow-hidden"><i class="text-primary fa fa-spinner fa-spin fa-3x fa-fw"></i></div>`,
                        footer: footer,
                        confirmButtonText: 'Recarregar página'
                    }).then(function () {
                        window.location.href = window.location.href;
                    })
                }).finally(function () {
                    clearTimeout(timeout);
                });
            });
            return resposta;
        } catch (e) {
            throw new Error(e)
        }
    }
}

export default new Request;