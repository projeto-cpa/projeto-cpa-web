import Swal from 'sweetalert2';
import sessions from '../helpers/sessions.js';

/**
 * Uma classe que realiza requisicoes HTTP
 */
class Requests {

    /**
     * 
     * @param {String} url 
     * Caminho da requisicao
     * 
     * @param {String|Boolean} body 
     * Corpo da requisicao (string ou false)
     * 
     * @param {Boolean} auth
     * Usar credenciais
     * 
     * @param {Object} headers 
     * Cabecalhos da requisicao
     * 
     * @returns {Object}
     */
    async use(url, body, auth, options) {
        try {
            var resposta = await new Promise(function (resolver) {

                console.log('auth', auth);

                // console.log(options);
                var headers = new Headers();
                // tipo padrao = json
                var contentType = 'application/json'
                var acceptType = 'application/json'
                var contentTypeCount = 0
                var acceptTypeCount = 0

                if (options.headers) {
                    // console.log(options.headers)
                    for (var header of options.headers) {
                        /**
                         * @type {String}
                         */
                        var headerName = header.key.toLowerCase();

                        if(contentTypeCount > 1){
                            throw new Error('Voce so pode declarar o tipo da requisicao conteudo uma vez')
                        }

                        if(acceptTypeCount > 1){
                            throw new Error('Voce so pode declarar o tipo da resposta conteudo uma vez')
                        }
                        
                        if(headerName.toLocaleLowerCase() === 'content-type'){
                            contentType = header.value
                            contentTypeCount++;
                            continue;
                        }

                        if(headerName.toLocaleLowerCase() === 'accpet'){
                            acceptTypeCount = header.value
                            acceptTypeCount++;
                            continue;
                        }

                        //console.log(key)
                        //console.log(key,val)
                        headers.append(header.key, header.value);
                    }
                }

                console.log('contentType', contentType, 'acceptType', acceptType)
                // TODO: fazer tratamento do content type

                if(contentType !== undefined){
                    headers.append('Content-Type', contentType);
                }

                headers.append('Accept', acceptType);
                headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
                headers.append('Access-Control-Allow-Credentials', 'true');

                console.log('conteudo do header')
                headers.forEach(function (key, val) {
                    console.log(key, val);
                })

                //sessions.set('test', 'sou um ttest');
                //console.log(sessions.get('test'));

                console.log('auth', auth)
                if (auth) {
                    console.log('usando credenciais', 'Bearer' + sessions.get('session_token'))
                    headers.append('Authorization', 'Bearer' + sessions.get('session_token'));
                    //console.log('usando credenciais')
                } else {
                    console.log('sem credenciais')
                }

                delete options.headers;

                var fopt = {
                    ...options,
                    headers: headers,
                    mode: 'cors'
                };

                console.log('fopt', fopt);

                if (body !== false) {
                    fopt.body = body;
                }

                fetch(url, fopt).then(
                    /**
                     * @param {Reponse} response 
                     */
                    function (response) {
                        console.log(process.env.API_URL);
                        console.log(process.env.MODE);
                        if (response.ok) {
                            return response.json();
                        } else {
                            //console.log(response);
                            throw new Error(String(response.status));
                        }
                    }).then(function (data) {
                        resolver({
                            ...data,
                            response: true
                        });
                    }).catch(
                        /**
                         * @param {Error} e 
                         */
                        function (e) {
                            console.log(e.message);

                            var title = 'Ocorreu um erro';
                            var footer = 'Tente novamente mais tarde';
                            var href = window.location.href;
                            var btn = 'Recarregar página';

                            switch (e.message) {
                                case '403':
                                    title = 'Acesso restrito (403)';
                                    footer = 'Você não tem acesso ao recurso'
                                    href = '/sair';
                                    btn = 'Acessar conta'
                                    break;
                                case '404':
                                    title = 'Recurso não encontrado (404)';
                                    footer = 'O recurso que você está tentando acessar não existe'
                                    href = '/';
                                    btn = 'Voltar para o início'
                                    break;
                                case 'Failed to fetch':
                                    title = 'Recurso não existe';
                                    footer = 'O recurso que você está tentando acessar não existe'
                                    btn = 'Recarregar página'
                                    break;
                                case '500':
                                    title = 'Erro interno do servidor (500)';
                                    footer = 'O servidor encontrou um erro inesperado'
                                    href = '/';
                                default:
                                    break;
                            }

                            Swal.fire({
                                title: title,
                                icon: 'error',
                                text: footer,
                                confirmButtonText: btn
                            }).then(function () {
                                window.location.href = href;
                            });
                        });
            });
            return resposta;
        } catch (e) {
            throw new Error(e)
        }
    }

    /**
     * Requisicao de Metodo GET
     * 
     * @param {String} url 
     * Endereço da requisicao
     * 
     * @param {Boolean} auth 
     * Usar credenciais
     * 
     * @param {Object} options 
     * Opcoes para requisicao (opcional)
     * 
     * @returns 
     */
    get(url, auth, options) {
        auth = auth || false;
        options = options || {};
        options.method = 'GET';
        return this.use(url, false, auth, options);
    }

    /**
     * Requisicao de Metodo POST
     * 
     * @param {String} url 
     * Endereço da requisicao
     * 
     * @param {String|Boolean} body
     * Corpo da requisicao (string ou false)
     * 
     * @param {Boolean} auth 
     * Usar credenciais
     * 
     * @param {Object} options 
     * Opcoes para requisicao (opcional)
     * 
     * @returns 
     */
    post(url, body, auth, options) {
        body = body || false;

        auth = auth || false;
        options = options || {};
        options.method = 'POST';
        console.log('auth', auth);
        return this.use(url, body, auth, options);
    }

    /**
     * Requisicao de Metodo PUT
     * 
     * @param {String} url 
     * Endereço da requisicao
     * 
     * @param {String|Boolean} body
     * Corpo da requisicao (string ou false)
     * 
     * @param {Boolean} auth 
     * Usar credenciais
     * 
     * @param {Object} options 
     * Opcoes para requisicao (opcional)
     * 
     * @returns 
     */
    put(url, body, auth, options) {
        body = body || false;
        auth = auth || false;
        options = options || {};
        options.method = 'PUT';
        return this.use(url, body, auth, options);
    }

    /**
     * Requisicao de Metodo GET
     * 
     * @param {String} url 
     * Endereço da requisicao
     * 
     * @param {String|Boolean} body
     * Corpo da requisicao (string ou false)
     * 
     * @param {Boolean} auth 
     * Usar credenciais
     * 
     * @param {Object} options 
     * Opcoes para requisicao (opcional)
     * 
     * @returns 
     */
    delete(url, body, auth, options) {
        body = body || false;
        auth = auth || false;
        options = options || {};
        options.method = 'DELETE';
        return this.use(url, body, auth, options);
    }
}

export default new Requests;