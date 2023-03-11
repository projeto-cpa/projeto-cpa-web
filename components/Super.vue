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
    <div class="container-fluid p-0 super">
        <div class="row m-0">
            <slot></slot>
        </div>
    </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>

<style>
body{
    font-family: 'Roboto', sans-serif !important;
    color:#273c4f;
    font-size: 16px;
    overflow: hidden;
}

</style>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #ededed;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #cccccc;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #0d6efd;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>