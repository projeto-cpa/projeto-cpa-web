<<<<<<< HEAD
<<<<<<<< HEAD:api/listagem/EditarCargos.js
async function RequisicaoEdite() {
========
=======
import Swal from 'sweetalert2';

>>>>>>> remotes/origin/feature/cargo
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
>>>>>>>> feature/acesso:api/listagem/listagemCargo.js

    var opcoes = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        timeout: 10000
    };

<<<<<<< HEAD
    var resposta = await new Promise(function (resolver) {
<<<<<<<< HEAD:api/listagem/EditarCargos.js
        fetch('http://localhost:3005/deletar/usuario.json', opcoes).then(function (response) {
========
        fetch(`http://localhost:8080/cargo?pagina=${pagina}&qtd=${quantidade}`, opcoes).then(function (response) {
>>>>>>>> feature/acesso:api/listagem/listagemCargo.js
            if (response.ok) {
                return response.json();
            } else {
                resolver({ sucesso: false });
            }
        }).then(function (data) {
            resolver(data);
=======

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
>>>>>>> remotes/origin/feature/cargo
        });
        console.log('resp', resposta)
        return resposta;
    } catch (e) {
        console.log('err');
        console.error(e);
        throw new Error()
    }
}

<<<<<<<< HEAD:api/listagem/EditarCargos.js
const Filtros = {
    colunas: [
        { nome: 'id', etiqueta: 'ID', tipo: 'number' },
        { nome: 'nome', etiqueta: 'Nome', tipo: 'string' },
        { nome: 'descricao', etiqueta: 'Descrição', tipo: 'string' }
    ]
};

export { Filtros, RequisicaoEdite }
========
export default listagemCargo;
>>>>>>>> feature/acesso:api/listagem/listagemCargo.js
