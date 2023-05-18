import Swal from 'sweetalert2';

/**
 * Retorna a listagem do cargo
 * @param {Number} pagina 
 * @param {Number} quantidade 
 * @returns 
 */
async function listagemCargo(pagina, quantidade) {

    pagina = Number(pagina);
    quantidade = Number(quantidade);

    if (!pagina && pagina >= 0) {
        pagina = 0;
    }

    if (!quantidade && quantidade > 0) {
        quantidade = 5;
    }

    var opcoes = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        timeout: 10000
    };


    try {
        var resposta = await new Promise(function (resolver) {
            var abort = new AbortController();
            
            var timeout = setTimeout(function () {
                abort.abort();
            }, opcoes.timeout);

            fetch(
                `http://localhost:8080/cargo?pagina=${pagina}&qtd=${quantidade}`,
                {
                    ...opcoes,
                    signal: abort.signal
                }
            ).then(function (response) {
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
                    footer: 'Tente novamente mais tarde',
                    confirmButtonText: 'Recarregar página'
                }).then(function () {
                    window.location.href = window.location.href;
                })

            }).finally(function () {
                clearTimeout(timeout);
            });
        });
        console.log('resp', resposta)
        return resposta;
    } catch (e) {
        console.log('err');
        console.error(e);
        throw new Error()
    }
}

export default listagemCargo;