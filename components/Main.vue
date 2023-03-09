<script>
export default {
    props:['titulo']
}
</script>

<template>
    <main class="col p-0">
        <header class="bg-primary">
            <h1 class="text-white">{{ titulo }}</h1>
        </header>
        <div class="content-frame bg-light">
            <slot></slot>
        </div>
    </main>
</template>

<style scoped>
header{
    display: flex;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height: 60px;
    /*background-color: #273c4f;*/
}

header h1{
    padding-left:20px;
    padding-right:20px;
    font-size: 20px;
    flex: 0 1 100%;
    margin: auto;
}

.content-frame{
    position:relative;
    padding:20px;
    height:calc(100vh - 120px) !important;
    z-index: 2;
}

main{
    position:relative;
    margin-top:60px !important;
    padding-top:60px !important;
}
</style>