<script>
import emitter from '../helpers/emmiter.js';

export default {
    data: function () {
        return {
            show: false
        };
    },
    methods: {
        toggleSideBar() {
            var show = this.show = !this.show;
            emitter.emit('toggleSideBar', show);
        }
    }
};
</script>

<template>
    <footer>
        <div class="btn-toggler rounded-5 bg-white d-block d-lg-none">
            <button class="btn btn-primary rounded-5" @click="toggleSideBar">
                <span v-if="!show"><i class="fa fa-th-large"></i></span>
                <span v-else><i class="fa fa-times"></i></span>
            </button>
        </div>
        <slot></slot>
    </footer>
</template>

<style scoped>
footer{
    position: fixed !important;
    height: 0px !important;
    border-bottom: 1px solid #cccccc !important;
    z-index: 2;
    bottom:0px;
}
.btn-toggler{
    position: absolute;
    bottom: 70px;
    right: -10px;
    padding: 10px;
    transform: translate(-50%, 0);
    box-shadow: 0px 0px 3px 3px var(--bs-gray-400);
}

.btn-toggler button{
    width:46px;
    height: 46px;
    text-align:center;
}
</style>