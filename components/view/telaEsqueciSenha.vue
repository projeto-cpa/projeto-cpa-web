<template>
    <section class="display-tela-recuperar">

        <div class="col-3 col-md-3 col-lg-3 back-color hvh-100"></div>

        <div class="col-6 col-md-6 col-lg-6 hvh-100" style="display: flex; justify-content: space-evenly; align-items: center;" >
            <div class="alinha-form-senha">

                <div>
                    Olá, digite seu email para recuperar sua senha.
                </div>

                <div class="col-md-9">
                    <label for="validationDefault01" class="form-label">Digite o e-mail</label>
                    <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
                </div>
            </div>
        </div>

        <div class="col-3 col-md-3 col-lg-3 back-color hvh-100"></div>

    </section>
</template>

<style>
.back-color {
    background-color: #304358;
}

.display-tela-recuperar {
    display: flex;
    flex-wrap: nowrap;
}

.hvh-100 {
    height: 100vh;
}

.alinha-form-senha {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35%;
    background-color: #dee2e6;
    padding: 10px;
    margin: 50px;
    flex: 1 1 100%;
    border-radius: 10px;
    text-align: left;
}
</style>

