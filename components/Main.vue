<script>
export default {
    props:['titulo']
}
</script>

<template>
    <main class="col p-0">
        <header>
            <h1 class="text-white">{{ titulo }}</h1>
        </header>
        <div class="content-frame">
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
    background-color: #273c4f;;
}

header h1{
    padding-left:20px;
    padding-right:20px;
    font-size: 20px;
    flex: 0 1 100%;
    margin: auto;
}

.content-frame{
    padding-left:20px;
    padding-right:20px;
}

main{
    position:relative;
    margin-top:60px !important;
    padding-top:60px !important;
}
</style>