<script>
import Chart from 'chart.js'

export default {
    data: function () {
        return {
            data: {
                type: "line",
                data: {
                    labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
                    datasets: [
                        {
                            label: "Number of Moons",
                            data: [0, 0, 1, 2, 79, 82, 27, 14],
                            backgroundColor: "rgba(54,73,93,.5)",
                            borderColor: "#36495d",
                            borderWidth: 3
                        },
                        {
                            label: "Planetary Mass (relative to the Sun x 10^-6)",
                            data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
                            backgroundColor: "rgba(71, 183,132,.5)",
                            borderColor: "#47b784",
                            borderWidth: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    padding: 25
                                }
                            }
                        ]
                    }
                }
            }
        }
    },
    methods: {
    },
    mounted: function () {
        var ctx = document.getElementById('chart-js').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <div class="row m-0">
                    <div class="col-xl-8 d-flex flex-wrap">
                        <div class="col-12 col-xl-6 col-md-6 mb-3 pe-2 ps-2">
                            <div class="card shadow h-100 py-2"
                                style="border-left: 0.25rem solid rgba(25,135,84,1)!important;">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center justify-content-center">
                                        <div class="col mr-2">
                                            <div class="text-xs text-success text-uppercase mb-1"
                                                style="font-weight: 500!important;"> Melhor curso</div>
                                            <div class="h5 font-weight-bold text-gray-800 mb-3">Ciência de Dados </div>
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
                        <div class="col-12 col-xl-6 col-md-6 mb-3 pe-2 ps-2">
                            <div class="card shadow h-100 py-2"
                                style="border-left: 0.25rem solid rgba(255,193,7,1)!important;">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center justify-content-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                                                style="font-weight: 500!important;"> Pior curso</div>
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
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="font-weight-bold text-primary text-uppercase m-0">Métricas</h6>
                                </div>
                                <div class="card-body">
                                    <div class="chart-area">
                                        <canvas id="chart-js" ref="chartjs"></canvas>
                                        <!-- <img class="img-metricas" src="../../static/foto-métricas.png" /> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 pe-2 ps-2">
                        <div class="col-xl-12 mb-3">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary text-uppercase mb-0">Principais feedbacks
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