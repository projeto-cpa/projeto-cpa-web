<script>
// *Script da tela
import scriptTela from '../../../views/cadastro/telaCadastroCargos/script.js';

export default scriptTela;
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <form class="row m-0" ref="formularioCadastro" id="cadastro-cargo">
                    <div class="card p-0 card-register">
                        <div class="card-body">
                            <div v-for="campo in formulario" :key="campo.id" :class="campo.classe.coluna">
                                <div class="form-floating">
                                    <template v-if="campo.tipo !== 'textarea' && campo.tipo !== 'select'">
                                        <input :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            :type="campo.tipo" class="form-control" :id="campo.id"
                                            @keypress="campo.validar()" :class="inputClass(campo.valido)">
                                    </template>
                                    <template v-else-if="campo.tipo === 'select'">
                                        <select :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            class="form-control" :id="campo.id" @change="campo.validar()"
                                            :class="inputClass(campo.valido)">
                                            <option value="" disabled selected>Selecione uma opção</option>
                                            <option v-for="valor in campo.valores" :value="valor.valor" :key="valor.id">
                                                {{ valor.nome }}
                                            </option>
                                        </select>
                                    </template>
                                    <template v-else>
                                        <textarea :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            class="form-control" :id="campo.id" @keypress="campo.validar()"
                                            :class="inputClass(campo.valido)"></textarea>
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
            <button class="btn btn-primary rounded-5" @click="enviarFormulario" :disabled="enviando" id="enviar-cargo">
                <span>Cadastrar</span>
                <span v-if="enviando"><i class="fa fa-spinner fa-spin fa-fw"></i></span>
            </button>
        </footer>
        <styleTela></styleTela>
    </div>
</template>
