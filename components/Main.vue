<script>
export default {
    props: ['titulo', 'expand'],
    mounted: function () {
        window.document.title = 'CPA - ' + this.titulo;
    }
}
</script>

<template>
    <main class="col p-0 bg-light">
        <header class="bg-secondary">
            <h1 class="text-white">{{ titulo }}</h1>
        </header>
        <div class="content-frame" :class="expand ? 'expand' : ''">
            <slot></slot>
        </div>
    </main>
</template>

<style>
.conteudo-principal {
    padding: 0 !important;
    overflow-y: auto !important;
}

.conteudo-principal section {
    position: relative !important;
    height: calc(100vh - 180px) !important;
    padding: 20px !important;
}

.conteudo-principal section article {
    padding-bottom: 20px;
    ;
}

.form-footer {
    border-top: 1px solid #cccccc !important;
    position: absolute !important;
    bottom: 0px !important;
    left: 0px !important;
    width: 100% !important;
    padding: 0 20px !important;
    height: 60px !important;
    line-height: 60px !important;
    z-index: 100;
}
</style>

<style scoped>
header {
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    /*background-color: #273c4f;*/
    box-shadow: 3px 3px 9px var(--bs-gray-400);
}

header h1 {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    flex: 0 1 100%;
    margin: auto;
}

.content-frame:not(.expand) {
    position: relative;
    height: calc(100vh - 120px) !important;
    z-index: 2;
    box-shadow: inset 3px 3px 9px var(--bs-gray-400);
}

.content-frame.expand{
    position: relative;
    height: 100% !important;
    z-index: 2;
    box-shadow: inset 3px 3px 9px var(--bs-gray-400);
}

.content-frame.expand .container-fluid{
    height: 100%;;
}

main {
    position: relative;
    margin-top: 60px !important;
    padding-top: 60px !important;
}
</style>