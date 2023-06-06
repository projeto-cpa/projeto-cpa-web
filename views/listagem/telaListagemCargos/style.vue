<template>
    <style scoped>
        .placeholder {
            min-width: 100%;
            height: 100%;
            border-radius: 25px !important;
        }

        @media (max-width: 1199.98px) {
            .card-list .card-item .card-body {
                padding-left: 4px;
                padding-right: 4px;
            }

            .col-box {
                border: 1px solid var(--bs-gray-400);
                padding: 10px;
                border-radius: 12px;
                background-color: #ffffff;
            }

            .id .col-box,
            .activations .col-box {
                height: 90px;
            }
        }

        @media (min-width: 1200px) {
            .row .options {
                width: 200px;
                max-width: 200px;
            }

            .row .id {
                width: 50px;
                max-width: 50px;
            }

            .row .activations {
                width: 150px;
                max-width: 150px;
                margin-left: 25px !important;
                margin-right: 25px !important;
            }

            .row .date {
                width: 200px;
                max-width: 200px;
            }
        }

        .item-id {
            font-weight: bold;
        }

        .form-check-input {
            width: 28px;
            height: 28px;
            background-size: 75%;
            border-radius: 50% !important;
        }

        .card.card-alt {
            background-color: var(--bs-light-bg-subtle);
        }

        .card-item:hover,
        .card-item:focus,
        .card-item:active {
            background-color: #f5f9ff !important;
        }

        .card-item.active,
        .card-item.active:hover,
        .card-item.active:active,
        .card-item.active:focus {
            border-color: #9ec5ff !important;
            background-color: #e5f0ff !important;
        }

        .card-list .card-item,
        .card-none {
            box-shadow: 0px 0px 9px var(--bs-gray-400);
        }

        @media (min-width: 768px) and (max-width: 1199.98px) {

            .card-item .row .col-xl:nth-of-type(1),
            .card-item .row .col-xl-auto:nth-of-type(1),
            .card-item .row .col-xl:nth-of-type(3),
            .card-item .row .col-xl-auto:nth-of-type(3),
            .card-item .row .col-xl:nth-of-type(5),
            .card-item .row .col-xl-auto:nth-of-type(5) {
                padding-right: 0;
            }
        }
    </style>
</template>