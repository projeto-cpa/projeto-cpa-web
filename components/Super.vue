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

<!-- <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style> -->

<!-- <style>
body{
    /* font-family: 'Roboto', sans-serif !important; */
    color:#273c4f;
    font-size: 16px;
    overflow: hidden;
}

</style> -->

<style type="text/css">
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
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

<style>
input.form-control,textarea.form-control {
    background-position: calc(100% - 40px) 20px !important;
}

select.form-control{
  background-position: calc(100% - 80px) 20px !important;
}

<<<<<<< HEAD
.form-floating select ~ label{
  overflow: visible !important;
}

.form-floating select ~ label:before{
    right: calc(-15% + 32px);
    top: 50%;
    content: "\f078";
    font: normal normal normal 26px FontAwesome;
    color: #000 !important;
    position: absolute;
    width: 26px;
    height: 26px;
    transform: translate(0%, -0%)
}

.form-floating select:hover ~ label:before, .form-floating select:active ~ label:before, .form-floating select:focus ~ label:before{
  color: var(--bs-primary) !important
}

.form-floating select.is-valid ~ label:before, .form-floating select.is-invalid ~ label:before {
  right: calc(-15% + 16px);
=======
.form-control.is-valid, .was-validated .form-control:valid {
    background-position: calc(100% - 42px) 50% !important;
>>>>>>> feature/acesso
}
</style>

<style>
<<<<<<< HEAD
/* .offcanvas.offcanvas-end {
    top: -60px !important;
    height: calc(100% + 60px);
} */
=======
.form-footer{
  box-shadow: 3px 3px 9px var(--bs-gray-400);
}
>>>>>>> feature/acesso
</style>