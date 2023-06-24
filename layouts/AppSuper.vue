<script>
import emmiter from '../helpers/emmiter.js';
import sessions from '../helpers/sessions.js'
// import listagemUsuarioDetalhar from "~/api/listagem/listagemUsuarioDetalhar";
import emitter from '../helpers/emmiter.js';

export default {
  data: function () {
    return {
      scroll: true,
      show: false,
      dadosUsuario: {}
    };
  },
  computed: {
    idUsuario: function () {
      return sessions.get("session_id");
    },
  },
  methods: {
    usuarioLogado: function () {
      if (!sessions.get('session_token')) {
        this.$router.push({ path: '/sair' });
        return;
      }
      this.show = true;
    },
    // pegarDados: async function () {
    //   var dados = await listagemUsuarioDetalhar(this.idUsuario);
    //   console.log('dados', dados)
    //   emitter.emit('dadosUsuario', dados)
    //   this.dadosUsuario = dados;
    // },
  },
  mounted: function () {
    emmiter.on('bodyScroll', function (value) {
      document.body.style.overflow = value ? 'auto' : 'hidden'
    });
    this.usuarioLogado();
    // this.pegarDados();
  }
};
</script>

<template>
  <div class="container-fluid p-0 super" v-show="show">
    <div class="row m-0">
      <slot></slot>
    </div>
  </div>
</template>

<!-- <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style> -->

<!-- <style>
body{
    /* font-family: 'Roboto', sans-serif !important; */
    color:#273c4f;
    font-size: 16px;
    overflow: hidden;
}

</style> -->

<style type="text/css">

body{
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 4px;
  height: 2px;
}

::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-thumb {
  background: var(--bs-gray-400);
  border: 0px none #ffffff;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}

::-webkit-scrollbar-thumb:active {
  background: #000000;
}

::-webkit-scrollbar-track {
  background: var(--bs-secondary);
  border: 0px none #ffffff;
  border-radius: 50px;
}

::-webkit-scrollbar-track:hover {
  background: var(--bs-secondary);
}

::-webkit-scrollbar-track:active {
  background: var(--bs-secondary);
}

::-webkit-scrollbar-corner {
  background: transparent;
}
</style>

<style>
input.form-control,
textarea.form-control {
  background-position: calc(100% - 40px) 20px !important;
}

select.form-control {
  background-position: calc(100% - 80px) 20px !important;
}

.form-control.is-valid,
.was-validated .form-control:valid {
  background-position: calc(100% - 42px) 50% !important;
}
</style>

<style>
.form-footer {
  box-shadow: 3px 3px 9px var(--bs-gray-400);
}
</style>