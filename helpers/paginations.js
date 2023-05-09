class Paginations {
    set(page) {
        window.location.hash = "pagina=" + page;
    }

    get() {
        var value = window.location.hash.replace('pagina=', '').replace('#', '');
        return value === '' ? false : value;;
    }
}

export default new Paginations;