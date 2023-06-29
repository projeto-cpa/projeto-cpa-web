<script>
import { v4 as uuidv4 } from 'uuid';
import unique from '~/helpers/unique';
import cadastroUsuario from '../../../api/cadastro/cadastroUsuario.js'
import listagemCargo from '../../../api/listagem/listagemCargo';
import Swal from 'sweetalert2';

export default {
    loading: {
        continuous: true
    },
    data: function () {
        return {
            enviando: false,
            formulario: [
                {
                    etiqueta: 'Nome do usuário',
                    nome: 'nome',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'text',
                    ajuda: 'Até 150 caracteres',
                    classe: {
                        coluna: 'col-12 mb-4'
                    },
                    validacao: {
                        valido: 'Campo validado com sucesso',
                        invalido: 'Campo inválido, verifique novamente',
                    },
                    validar: function () {
                        if (this.valor.length > 5) {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                },
                {
                    etiqueta: 'Email do usuário',
                    nome: 'email',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'textarea',
                    ajuda: 'Até 150 caracteres',
                    classe: {
                        coluna: 'col-12 mb-4'
                    },
                    validacao: {
                        valido: 'Campo validado com sucesso',
                        invalido: 'Campo inválido, verifique novamente',
                    },
                    validar: function () {
                        if (this.valor.length > 5) {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                },
                {
                    etiqueta: 'Senha de acesso',
                    nome: 'senha',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'select',
                    ajuda: 'Selecione uma das opções',
                    classe: {
                        coluna: 'col-12 col-md-12 mb-4'
                    },
                    validacao: {
                        valido: 'Campo validado com sucesso',
                        invalido: 'Campo inválido, verifique novamente',
                    },
                    validar: function () {
                        if (this.valor !== '') {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }

                },
                {
                    etiqueta: 'Cargo do usuário',
                    nome: 'idCargo',
                    valor: '',
                    valores: [],
                    valido: null,
                    id: unique.generate(),
                    tipo: 'select',
                    ajuda: 'Selecione uma das opções',
                    classe: {
                        coluna: 'col-12 col-md-12 mb-4'
                    },
                    validacao: {
                        valido: 'Campo validado com sucesso',
                        invalido: 'Campo inválido, verifique novamente',
                    },
                    validar: function () {
                        if (this.valor !== '') {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }

                },
                {
                    etiqueta: 'Estado de ativação',
                    nome: 'ativo',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'select',
                    valores: [
                        {
                            nome: 'Ativado',
                            id: unique.generate(),
                            valor: "true"
                        },
                        {
                            nome: 'Desativado',
                            id: unique.generate(),
                            valor: "false"
                        },
                    ],
                    ajuda: 'Selecione uma das opções',
                    classe: {
                        coluna: 'col-12 mb-4'
                    },
                    validacao: {
                        valido: 'Campo validado com sucesso',
                        invalido: 'Campo inválido, verifique novamente',
                    },
                    validar: function () {
                        if (this.valor !== '') {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                }

            ]
        };
    },
    methods: {
        inputClass: function (valido) {
            if (valido === true) {
                return 'is-valid';
            } else if (valido === null) {
                return '';
            } else {
                return 'is-invalid';
            }
        },
        validarFormulario: function () {
            var valido = true;
            this.formulario.forEach(function (campo) {
                campo.validar();
                if (campo.valido === false) {
                    valido = false;
                }
            });
            return valido;
        },
        enviarFormulario: async function () {
            if (!this.validarFormulario()) {
                return;
            }

            var data = new FormData(this.$refs.formularioCadastro);
            this.enviando = true;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })

            var resposta = await cadastroUsuario(data);

            await new Promise(function (solve) {
                setTimeout(function () {
                    solve();
                }, 750);
            });

            this.$nextTick(() => {
                this.$nuxt.$loading.finish()
            });

            this.enviando = false;
            if (resposta && resposta.response) {
                
                var modal = await Swal.fire({
                    icon: 'success',
                    title: 'Sucesso ao cadastrar',
                    text: 'O cadastro obteve sucesso',
                    confirmButtonText: 'Entendido'
                });

                if (modal) {
                    this.$router.push({ path: '/listagem/usuarios' });
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocorreu uma falha',
                    text: 'O cadastro não obteve sucesso',
                    confirmButtonText: 'Entendido'
                });
            }

        },
        listarCargos: async function () {
            var pagina = 0;
            var quantidade = 5;
            var valores = [];
            var resposta = await listagemCargo(pagina, quantidade);
            while (!resposta.empty && resposta.content && resposta.content.length > 0) {
                valores = valores.concat(resposta.content.map(function (item) {
                    item.valor = item.id;
                    return item;
                }));
                pagina++;
                resposta = await listagemCargo(pagina, quantidade);
            }
            this.formulario[this.buscarIndexPeloNome('idCargo')].valores = valores;
            console.log("RESPOSTAAAAAAAAAAAA AAAAAAAAAA", resposta, valores);
        },
        buscarIndexPeloNome: function (nome) {
            console.log("valores123", this.valores);
            console.log("formuuu", this.formulario);
            var i = 0;
            this.formulario.forEach(function (item, index) {
                console.log(item)
                if (item.nome === nome) {
                    i = index;
                }
            });
            return i;
        },
    },
    mounted: async function () {
        this.listarCargos();
        const bootstrap = require('bootstrap');
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        tooltips.forEach(function (item) {
            new bootstrap.Tooltip(item);
        });
    }
};
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <form class="row m-0" ref="formularioCadastro">
                    <div class="card p-0">
                        <div class="card-body">
                            <div v-for="campo in formulario" :key="campo.id" :class="campo.classe.coluna">
                                <div class="form-floating">

                                    <template v-if="campo.nome == 'nome'">
                                        <input :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            :type="campo.tipo" class="form-control" :id="campo.id"
                                            @keypress="campo.validar()" :class="inputClass(campo.valido)">
                                    </template>

                                    <template v-if="campo.nome == 'email'">
                                        <input :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            :type="campo.tipo" class="form-control" :id="campo.id"
                                            @keypress="campo.validar()" :class="inputClass(campo.valido)">
                                    </template>

                                    <template v-if="campo.nome == 'senha'">
                                        <input :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            :type="campo.tipo" class="form-control" :id="campo.id"
                                            @keypress="campo.validar()" :class="inputClass(campo.valido)">
                                    </template>

                                    <template v-else-if="campo.nome == 'idCargo'">
                                        <select :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            class="form-control" :id="campo.id" @change="campo.validar()"
                                            :class="inputClass(campo.valido)">
                                            <option value="" disabled selected>Selecione uma opção</option>
                                            <option v-for="valor in campo.valores" :value="valor.valor" :key="valor.id">
                                                {{ valor.nome }}
                                            </option>
                                        </select>
                                    </template>

                                    <template v-else-if="campo.nome == 'ativo'">
                                        <select :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            class="form-control" :id="campo.id" @change="campo.validar()"
                                            :class="inputClass(campo.valido)">
                                            <option value="" disabled selected>Selecione uma opção</option>
                                            <option v-for="valor in campo.valores" :value="valor.valor" :key="valor.id">
                                                {{ valor.nome }}
                                            </option>
                                        </select>
                                    </template>

                                    <label :for="campo.id" class="form-label w-100">{{ campo.etiqueta }}</label>
                                    <span class="label-icon float-end" data-bs-toggle="tooltip" :data-bs-title="campo.ajuda"
                                        data-bs-placement="bottom" data-bs-delay="250"><i class="fa fa-question-circle"
                                            aria-hidden="true"></i></span>
                                    <div class="valid-feedback">{{ campo.validacao.valido }}</div>
                                    <div class="invalid-feedback">{{ campo.validacao.invalido }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </article>
        </section>
        <footer class="form-footer bg-white text-end">
            <button class="btn btn-primary rounded-5" @click="enviarFormulario" :disabled="enviando" id="enviar-usuario">
                <span>Cadastrar</span>
                <span v-if="enviando"><i class="fa fa-spinner fa-spin fa-fw"></i></span>
            </button>
        </footer>
    </div>
</template>

<style scoped>
.label-icon {
    position: absolute;
    top: 20px;
    right: 20px;
}

textarea {
    max-height: 400px !important;
    min-height: 58px !important
}
</style>