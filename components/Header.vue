<script>
export default {
    mounted: function () {
        require('bootstrap')
    }
};
</script>

<template>
    <header class="col-12 p-0">
        <nav class="navbar navbar-expand-lg bg-white py-0" data-bs-theme="light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../static/biopark_logo.png" alt="Logo" height="40"
                        class="d-inline-block align-text-top">CPA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Item</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Menu</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item">Item</a></li>
                                <li><a class="dropdown-item">Item</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Desabilitado</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Pesquisar..." aria-label="Search">
                        <button class="btn btn-outline-primary" type="submit">Pesquisar</button>
                    </form>
                    <ul class="navbar-nav d-flex ms-2">
                        <li class="nav-item dropdown no-caret dropdown-user">
                            <a class="btn btn-icon btn-outline-light dropdown-toggle" id="navbarDropdownUserImage"
                                href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false"><img class="img-fluid avatar" src="../static/user.png"></a>
                            <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                                aria-labelledby="navbarDropdownUserImage">
                                <h6 class="dropdown-header d-flex align-items-center">
                                    <img class="dropdown-user-img avatar" src="../static/user.png">
                                    <div class="dropdown-user-details">
                                        <div class="dropdown-user-details-name">Lucas Neitzke</div>
                                        <div class="dropdown-user-details-email small">admin@admin</div>
                                    </div>
                                </h6>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#!">
                                    <i class="fa fa-user"></i> Account </a>
                                <a class="dropdown-item" href="/acessar">
                                    <i class="fa fa-sign-out"></i> Logout </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    position: fixed !important;
    height: 60px !important;
    border-bottom: 1px solid #cccccc !important;
    z-index: 10;
}

header nav {
    position: absolute !important;
    top: 50% !important;
    left: 0px !important;
    transform: translate(0, -50%) !important;
    width: 100% !important;
    height: 100% !important;
}

.navbar-brand {
    margin: 0px;
    width: 320px;
    height: 60px;
    text-align: center;
    margin-right: 20px;
    background-color: rgba(248,249,250,1)!important;
    border-right: 1px solid #ccc;
}

.navbar .container-fluid {
    padding-right: 20px;
    padding-left: 0px;
}

.avatar {
    width: 32px !important;
    height: 32px !important;
    margin-right: 5px;;
}

.dropdown-menu.dropdown-menu-end {
    min-width: 200px !important;
}

</style>