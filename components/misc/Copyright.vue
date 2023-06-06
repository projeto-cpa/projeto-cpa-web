<script>
export default {
    computed: {
        currentYear: function () {
            return new Date().getFullYear();
        }
    }
}
</script>

<template>
    <div class="d-flex justify-content-center justify-content-xl-end">
        <span>Todos os direitos reservados.</span>
        <span>&nbsp;CPA & Biopark &copy; {{ currentYear }}.</span>
    </div>
</template>