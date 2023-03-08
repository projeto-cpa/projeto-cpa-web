<script>
export default {
    data: function () {
        return {

        };
    },
    mounted:function(){
        
    }
};
</script>

<template>
    <div class="container-fluid p-0">
        <div class="row m-0">
            <slot></slot>
        </div>
    </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>

<style>
body *:not(.fa){
    font-family: 'Roboto', sans-serif;
}
</style>