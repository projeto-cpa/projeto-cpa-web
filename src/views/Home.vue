<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Aside from '../components/Aside.vue';
import Main from '../components/Main.vue';
import Usuario from '../components/subcomponents/Usuario.vue';

export default {
    components: {
        'Header': Header,
        'Footer': Footer,
        'Aside': Aside,
        'Main': Main,
        'Usuario': Usuario
    }
};
</script>

<template>   
    <Header></Header>
    <Aside></Aside>
    <Main>
        <Usuario></Usuario>
    </Main>
    <Footer></Footer>
</template>