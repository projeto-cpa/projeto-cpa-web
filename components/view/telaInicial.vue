<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <div class="card p-0 card-register pe-1 ps-1">
                    <div class="row m-0">
                        <div class="col-xl-8 d-flex flex-wrap">

                            <div class="col-12 col-xl-6 col-md-6 mb-3 mt-3 pe-2 ps-2">
                                <div class="card shadow h-100 py-2"
                                    style="border-left: 0.25rem solid rgba(25,135,84,1)!important;">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center justify-content-center">
                                            <div class="col mr-2">
                                                <div class="text-xs text-success text-uppercase mb-1"
                                                    style="font-weight: 500!important;">
                                                    Melhor curso</div>
                                                <div class="h5 font-weight-bold text-gray-800 mb-3">Ciência de Dados
                                                </div>
                                                <div class="d-flex align-items-center" style="gap: 1em;">
                                                    <p class="text-uppercase m-0 p-0"
                                                        style="font-weight: 500!important; font-size: small;">Média:</p>
                                                    <p class="text-uppercase m-0 p-0"
                                                        style="font-weight: 500!important; font-size: x-large;">8,90</p>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fa fa-graduation-cap fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-xl-6 col-md-6 mb-3 mt-3 pe-2 ps-2">
                                <div class="card shadow h-100 py-2"
                                    style="border-left: 0.25rem solid rgba(255,193,7,1)!important;">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center justify-content-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                                                    style="font-weight: 500!important;">
                                                    Pior curso</div>
                                                <div class="h5 font-weight-bold text-gray-800 mb-3">Farmácia</div>
                                                <div class="d-flex align-items-center" style="gap: 1em;">
                                                    <p class="text-uppercase m-0 p-0"
                                                        style="font-weight: 500!important; font-size: small;">Média:</p>
                                                    <p class="text-uppercase m-0 p-0"
                                                        style="font-weight: 500!important; font-size: x-large;">6,75</p>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fa fa-graduation-cap fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-12 pe-2 ps-2">
                                <div class="card shadow mb-4">
                                    <div
                                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 class="font-weight-bold text-primary text-uppercase m-0">Métricas</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart-area">
                                            <img class="img-metricas" src="../../static/foto-métricas.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 pe-2 ps-2">
                            <div class="col-xl-12  mb-3 mt-3">
                                <div class="card shadow mb-4">
                                    <div
                                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 class="m-0 font-weight-bold text-primary text-uppercase mb-0">Principais
                                            feedbacks
                                        </h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="col-xl-12 mb-2" style="border-bottom: 1px solid #000;">
                                            <p class="mb-0" style="font-weight: 500!important;">Important Appointment</p>
                                            <p class="mb-2">9:30 AM - 9:45 AM</p>
                                        </div>
                                        <div class="col-xl-12 mb-2" style="border-bottom: 1px solid #000;">
                                            <p class="mb-0" style="font-weight: 500!important;">Important Appointment</p>
                                            <p class="mb-2">9:30 AM - 9:45 AM</p>
                                        </div>
                                        <div class="col-xl-12 mb-2" style="border-bottom: 1px solid #000;">
                                            <p class="mb-0" style="font-weight: 500!important;">Important Appointment</p>
                                            <p class="mb-2">9:30 AM - 9:45 AM</p>
                                        </div>
                                        <div class="col-xl-12 mb-2" style="border-bottom: 1px solid #000;">
                                            <p class="mb-0" style="font-weight: 500!important;">Important Appointment</p>
                                            <p class="mb-2">9:30 AM - 9:45 AM</p>
                                        </div>
                                        <div class="col-xl-12 mb-2" style="border-bottom: 1px solid #000;">
                                            <p class="mb-0" style="font-weight: 500!important;">Important Appointment</p>
                                            <p class="mb-2">9:30 AM - 9:45 AM</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </article>
        </section>
    </div>
</template>



<style scoped>
.conteudo-principal {
    padding: 0 !important;
    overflow-y: auto !important;
}

.img-metricas {
    max-width: 100%;
    max-height: 100%;
}
</style>