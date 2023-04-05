<template>
    <div>
        <!-- modals -->
        <template>
            <div id="fone" class="modal" style="z-index:1051">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Alterar Numero</h5>
                            <button id="meu-modal" type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div container-fluid class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="InputName" class="col-form-label">Numero</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="number" id="InputName" class="form-control" aria-describedby="ajuda" />
                                    </div>
                                    <div class="col-auto">
                                        <span id="ajuda" class="form-text"> Atualize seu Numero. </span>
                                    </div>
                                </div>
                                <div style="margin-top: 10px" container-fluid class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Senha</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="password" id="inputPassword6" class="form-control"
                                            aria-describedby="passwordHelpInline" />
                                    </div>
                                    <div class="col-auto">
                                        <span id="passwordHelpInline" class="form-text"> confirme sua senha. </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Sair </button>
                            <button type="button" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template>
            <div id="user" class="modal" style="z-index: ;1051">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Alterar Nome</h5>
                            <button id="meu-modal" type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div container-fluid class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="InputName" class="col-form-label">Nome</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="text" id="InputName" class="form-control" aria-describedby="ajuda" />
                                    </div>
                                    <div class="col-auto">
                                        <span id="ajuda" class="form-text"> Atualize seu Nome. </span>
                                    </div>
                                </div>
                                <div style="margin-top: 10px" container-fluid class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Senha</label>
                                    </div>
                                    <div class="col-auto">
                                        <input type="password" id="inputPassword6" class="form-control"
                                            aria-describedby="passwordHelpInline" />
                                    </div>
                                    <div class="col-auto">
                                        <span id="passwordHelpInline" class="form-text"> confirme sua senha. </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Sair </button>
                            <button type="button" class="btn btn-primary">Salvar</button>
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
                        <div class="col-12 col-lg-6">
                            <article>
                                <div class="card">
                                    <div class="card-body">
                                        <div>
                                            <div class="mb-3">
                                                <label for="formGroupExampleInput" class="form-label">E-mail </label>
                                                <input class="form-control" type="text" value="matheus.schuch@alunos.bpkedu.com.br"
                                                    aria-label="Disabled input example" disabled />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="formGroupExampleInput" class="form-label">Usuáro </label>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" placeholder="Matheus Schuch"
                                                    aria-label="Recipient's username" aria-describedby="button-addon2" disabled />
                                                <button class="btn btn-outline-secondary" type="button" id="show-modal"
                                                    data-bs-toggle="modal" data-bs-target="#user" data-id="1"> Editar </button>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="formGroupExampleInput" class="form-label">Telefone: </label>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" value="(XX) X  XXXX-XXXX"
                                                    aria-label="Recipient's username" aria-describedby="button-addon2" disabled />
                                                <button class="btn btn-outline-secondary" type="button" id="show-modal"
                                                    data-bs-toggle="modal" data-bs-target="#fone" data-id="1"> Editar </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <article class="col-12 col-lg-6">
                            <div>
                                <!-- End -->
                                <div class="row">
                                    <div class="col-12">
                                        <div class="bg-white card">
                                            <div class="card-body">
                                                <img src="https://res.cloudinary.com/mhmd/image/upload/v1557366994/img_epm3iz.png"
                                                    alt="" width="200" class="d-block mx-auto mb-4">
                                                <!-- Default bootstrap file upload-->
                                                <h6 class="text-center mb-4 text-muted"> You can use default Bootstrap file
                                                    upload </h6>
                                                <div class="custom-file overflow-hidden mb-4">
                                                    <input id="customFile" type="file" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <footer class="form-footer bg-white"></footer>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal.show {
    position: fixed;
    top: 60px;
    background-color: rgb(0 0 0 / 50%);
}
</style>

<style>
.modal-backdrop.show {
    display: none !important;
}
</style>