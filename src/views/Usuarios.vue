<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Aside from '../components/Aside.vue';
import Main from '../components/Main.vue';

export default {
    components: {
        'Header': Header,
        'Footer': Footer,
        'Aside': Aside,
        'Main': Main,
    }
};
</script>

<template>   
    <Header></Header>
    <Aside paginaAtiva="#/usuarios/"></Aside>
    <Main>
        <a class="btn btn-dark" href="#/">Home</a>
        <a class="btn btn-dark disabled" href="#/usuarios/">Usuarios</a>
    </Main>
    <Footer></Footer>
</template>