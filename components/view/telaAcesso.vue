<template>
    <section class="page-login">

        <div class="div-img-biopark col-5 col-md-5 col-lg-5">
            <img class="img-biopark" loading="lazy" src="../../static/img-biopark.svg">
        </div>

        <div class="div-form-login col-7 col-md-7 col-lg-7">
            <div class="wdt-50">
                <form class="config-form form col-12 col-md-12 col-lg-12">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="config-label-login form-label">Email:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="config-label-login form-label">Senha:</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="div-esqueci-senha">
                        <button type="submit" class="btn btn-primary">Entrar</button>
                        <a class="esqueci-senha" href="/recuperar"> Esqueceu a senha ?</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

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

div,a {
    font-family: sans-serif;
}
</style>