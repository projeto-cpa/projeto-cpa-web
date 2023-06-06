<script>
import listagemUsuario from "~/api/listagem/listagemUsuario";
import alteracaoUsuario from "~/api/alteracao/alteracaoUsuario";
import Copyright from "../misc/Copyright.vue";
import sessions from "~/helpers/sessions";
import Swal from "sweetalert2";
import emitter from "~/helpers/emmiter";

const supportedMimeTypes = ["image/jpeg", "image/png"];

export default {
  components: {
    Copyright: Copyright
  },
  data: function () {
    return {
      enviando: false,
      supportedMimeTypes: supportedMimeTypes,
      imagemPadrao: require("../../static/user.png"),
      enviando: false,
      dados: {
        email: null,
        nome: null,
        sobrenome: null,
        nomeCargo: null,
        imagem: null,
      },
      modal: null,
      validado: true,
      senha: "",
      confirmarSenha: "",
      mensagem: null,
    };
  },
  computed: {
    idUsuario: function () {
      return sessions.get("session_id");
    },
    fotoPerfil: function () {
      return this.dados.imagem !== null ? this.dados.imagem : this.imagemPadrao;
    },
  },
  methods: {
    validarSenha: function () {
      if (this.senha !== this.confirmarSenha) {
        this.mensagem = "As senhas devem ser iguais!";
        return false;
      }
      if (this.senha.length < 5) {
        this.mensagem = "A senha deve conter mais de 5 caracteres!";
        return false;
      }
      return true;
    },
    // pegarDados: async function () {
    //     var dados = await listagemUsuario(this.idUsuario);
    //     this.dados = dados;
    // },
    editarSenha: async function () {
      var that = this;

      if (this.validarFormulario()) {
        this.modal.hide();

        this.enviando = true;

        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });

        var usuario = this.dados;
        usuario.senha = this.senha;
        var resposta = await alteracaoUsuario(usuario);

        await new Promise(function (solve) {
          setTimeout(function () {
            solve();
          }, 750);
        });

        this.enviando = false;

        this.$nextTick(() => {
          this.$nuxt.$loading.finish();
        });

        if (resposta.sucesso) {
          Swal.fire({
            icon: "success",
            title: "Senha salva com sucesso!",
            text: "Senha salva com sucesso, ao confirmar você será redirecionado a tela de login!",
            confirmButtonText: "Entendido",
          }).then(function () {
            that.$router.push({ path: "/sair" });
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Ocorreu uma falha",
            text: "A alteração não obteve sucesso",
            confirmButtonText: "Entendido",
          });
        }
      }
    },
    editarFoto: async function (imagem) {
      var that = this;
      if (this.validarFormularioFoto()) {
        this.enviando = true;

        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });

        var usuario = this.dados;
        usuario.imagem = imagem;
        var resposta = await alteracaoUsuario(usuario);

        await new Promise(function (solve) {
          setTimeout(function () {
            solve();
          }, 750);
        });

        this.enviando = false;

        this.$nextTick(() => {
          this.$nuxt.$loading.finish();
        });

        if (resposta.sucesso) {
          Swal.fire({
            icon: "success",
            title: "Foto salva com sucesso!",
            text: "Foto salva com sucesso",
            confirmButtonText: "Entendido",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Ocorreu uma falha",
            text: "A alteração não obteve sucesso",
            confirmButtonText: "Entendido",
          });
        }
      }
    },
    readImage: async function (params) {
      console.log("reading");

      const input = this.$refs.input;

      var base64 = await new Promise(function (resolve) {
        if (!input.files || !input.files[0]) {
          console.error("filelist is null");
          return;
        }

        if (!supportedMimeTypes.includes(input.files[0].type)) {
          console.error("not supported mime type");
          return;
        }

        console.log("files", input.files);

        const FR = new FileReader();

        FR.addEventListener("load", function (evt) {
          resolve(evt.target.result);
        });

        FR.readAsDataURL(input.files[0]);
      });

      this.image = base64;

      var modal = await Swal.fire({
        icon: "info",
        title: "Confirmar alteração",
        html: `Deseja alterar sua foto de perfil?`,
        confirmButtonText: "Confirmar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      });

      if (modal.isConfirmed) {
        this.editarFoto(base64);
      }
    },
    validarFormularioFoto: function () {
      return true;
    },
    validarFormulario: function () {
      if (this.validarSenha()) {
        this.validado = true;
        return true;
      } else {
        this.validado = false;
        return false;
      }
    },
    fecharModal: function () {
      this.modal.hide();
    },
    abrirModal: function () {
      this.modal.show();
    },
    dadosUsuario: function (dados) {
      this.dados = dados;
      console.log(dados);
      console.log("recebi");
    },
  },
  mounted: function () {
    const bootstrap = require("bootstrap");
    this.modal = new bootstrap.Modal(this.$refs.modal);
    // this.pegarDados();
    emitter.on("dadosUsuario", this.dadosUsuario);
  },
};
</script>

<template>
  <div>
    <!-- modals -->
    <template>
      <div id="senha" class="modal" style="z-index: 1051" ref="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Alterar Senha:</h5>
              <button id="meu-modal" type="button" class="btn-close" @click="fecharModal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="InputName" class="col-form-label">Senha</label>
                  </div>
                  <div class="col-auto">
                    <input type="password" v-model="senha" id="InputName" class="form-control" aria-describedby="ajuda" />
                  </div>
                  <div class="col-auto">
                    <span id="ajuda" class="form-text"> Atualize sua senha. </span>
                  </div>
                </div>
                <div style="margin-top: 10px" container-fluid class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Senha</label>
                  </div>
                  <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"
                      v-model="confirmarSenha" />
                  </div>
                  <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text"> confirme sua senha. </span>
                  </div>
                </div>
                <div class="row mt-3" v-if="!validado">
                  <div class="col-12">
                    <div class="alert alert-danger">
                      <p class="m-0">{{ mensagem }}</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="fecharModal"> Sair </button>
              <button type="button" @click="editarSenha" class="btn btn-primary">
                <span>Salvar</span>
                <span v-if="enviando"><i class="fa fa-spinner fa-spin fa-fw"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- principal -->
    <div>
      <div class="container-fluid conteudo-principal">
        <section>
          <div class="row m-0">
            <div class="col-12 col-md-6 col-lg">
              <article>
                <div class="card">
                  <div class="card-body row mx-0">
                    <div class="col-12 col-lg-6">
                      <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">E-mail </label>
                        <input class="form-control" type="text" v-model="dados.email" aria-label="Disabled input example"
                          disabled />
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <label for="formGroupExampleInput" class="form-label">Nome </label>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="dados.nome" aria-label="Recipient's username"
                          aria-describedby="button-addon2" disabled />
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <label for="formGroupExampleInput" class="form-label">Sobrenome </label>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="dados.sobrenome"
                          aria-label="Recipient's username" aria-describedby="button-addon2" disabled />
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <label for="formGroupExampleInput" class="form-label">Cargo </label>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="dados.nomeCargo"
                          aria-label="Recipient's username" aria-describedby="button-addon2" disabled />
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <label for="formGroupExampleInput" class="form-label">Senha </label>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" value="Altere sua senha" aria-label="Recipient's username"
                          aria-describedby="button-addon2" disabled />
                        <button class="btn btn-outline-secondary" type="button" id="show-modal" data-bs-toggle="modal"
                          data-bs-target="#senha" data-id="1"> Editar </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <article class="col-12 col-md-6 col-lg card-profile">
              <div>
                <!-- End -->
                <div class="row">
                  <div class="col-12">
                    <div class="bg-white card">
                      <div class="card-body">
                        <img :src="fotoPerfil" class="d-block mx-auto mb-4 user-profile" />
                        <!-- Default bootstrap file upload-->
                        <h6 class="text-center mb-4 text-muted"> Envie uma imagem para seu perfil</h6>
                        <div class="custom-file overflow-hidden mb-4">
                          <input id="customFile" :accept="supportedMimeTypes.join(', ').trim()" type="file"
                            class="form-control" ref="input" @change="readImage" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <footer class="form-footer bg-white text-end">
          <Copyright></Copyright>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
.modal-backdrop.show {
  display: none !important;
}

.modal.show {
  position: fixed;
  top: 60px !important;
  background-color: rgb(0 0 0 / 50%);
}

.modal-open header:not(main header):before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  background: rgba(0, 0, 0, 0.5) !important;
  height: calc(100% + 1px) !important;
  z-index: 1 !important;
}
</style>

<style scoped>
@media (min-width:991.98px) {
  .card-profile {
    max-width: 320px !important;
  }
}


.user-profile {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>
