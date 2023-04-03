<script>
import Swal from 'sweetalert2'

export default {
    data: function () {
        return {
            email: '',
        }
    },
    methods: {
        salvaLogin: function () {
            if (this.email.length == 0 || this.email.length == null || this.email.length < 5) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Atenção!',
                    text: 'A senha não pode ser vazia.',
                    time: 5000
                }).then(function () {
                    that.$router.push({ path: '/listagem/turmas' });
                    console.log('Rodou');
                });
            } else {
                Swal.fire({
                    icon: 'success!',
                    title: 'Rodou!',
                    text: 'Funcionou',
                    time: 5000
                }).then(function () {
                    that.$router.push({ path: '/listagem/turmas' });
                    console.log('Rodou');
                });
                console.log('Não rodou');
            }
        }
    }
}
</script >

<template>
    <section class="page-login">

        <div class="div-img-biopark col-5 col-md-5 col-lg-5">
            <img class="img-biopark" loading="lazy" src="../../static/img-biopark.svg">
        </div>

        <div class="div-form-login col-7 col-md-7 col-lg-7">
            <div class="wdt-50">
                <form class="config-form form col-12 col-md-12 col-lg-12">
                    <div class="mb-3">
                        <label for="email" class="config-label-login form-label">Email:</label>
                        <input v-if="email" id="email" type="email" class="form-control" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="senha" class="config-label-login form-label">Senha:</label>
                        <input id="senha" type="password" class="form-control">
                    </div>
                    <div class="div-esqueci-senha">
                        <a href="" class="btn btn-primary" @click="salvaLogin">Entrar</a>
                        <a href="" class="esqueci-senha"> Esqueceu a senha ?</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style>
.page-login {
    display: flex;
    flex-direction: row;
}

.config-form {
    background-color: #304358;
}

.div-img-biopark {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.div-form-login {
    height: 100vh;
    background-color: #304358;
    display: flex;
    justify-content: center;
    align-items: center;
}

.config-label-login {
    color: #fff;
}

.wdt-50 {
    width: 60%;
}

.img-biopark {
    width: 300px;
    height: 120px;
}

.esqueci-senha {
    text-decoration: none;
    color: #fff;
}

.esqueci-senha:hover {
    color: #0d6efd;
}

.div-esqueci-senha {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

div,
a {
    font-family: sans-serif;
}
</style>