

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                    <template>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">E-mail </label>
                            <input class="form-control" style="width: 50%;" type="text"
                                value="matheus.schuch@alunos.bpkedu.com.br" aria-label="Disabled input example" disabled>
                        </div>
                    </template>

                    <template>
                        <label for="formGroupExampleInput" class="form-label">Usuáro </label>
                        <div class="input-group mb-3" style="width: 50%">
                            <input type="text" class="form-control" placeholder="Matheus Schuch"
                                aria-label="Recipient's username" aria-describedby="button-addon2" disabled>
                            <button @click="showModal" class="btn btn-outline-secondary" type="button" id="show-modal"
                                data-bs-toggle="modal" data-bs-target="#editar" data-id="1">
                                Editar
                            </button>

                        </div>

                        <div id="editar" class="modal" tabindex="-1">
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
                                                    <input type="password" id="InputName" class="form-control"
                                                        aria-describedby="ajuda">
                                                </div>
                                                <div class="col-auto">
                                                    <span id="ajuda" class="form-text">
                                                        Atualize seu Nome.
                                                    </span>
                                                </div>
                                            </div>
                                            <div style="margin-top: 10px;" container-fluid class="row g-3 align-items-center">
                                                <div class="col-auto">
                                                    <label for="inputPassword6" class="col-form-label">Senha</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input type="password" id="inputPassword6" class="form-control"
                                                        aria-describedby="passwordHelpInline">
                                                </div>
                                                <div class="col-auto">
                                                    <span id="passwordHelpInline" class="form-text">
                                                        confirme sua senha.
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button @click="$emit('close')" type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Sair</button>
                                        <button type="button" class="btn btn-primary">Salvar</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </template>
            </article>
        </section>
        <footer class="form-footer bg-white">
        </footer>
    </div>
</template>

