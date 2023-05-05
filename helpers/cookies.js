class Cookies {

    /**
     * Recupera um cookie
     * 
     * @param {String} name 
     * Nome do cookie
     * 
     * @returns {String}
     */
    get(name) {
        let cname = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return false;
    }

    /**
     * Inicia um novo cookie
     * 
     * @param {String} name 
     * Nome do cookie
     * 
     * @param {String} value 
     * Valor do cookie
     * 
     * @param {Number} hours 
     * Tempo de expiração em horas
     * 
     * @returns {Boolean}
     */
    set(name, value, hours) {
        const d = new Date();
        d.setTime(d.getTime() + (hours * 3600));
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
        return getCookie(name) === value;
    }

    /**
     * Remove um cookie
     * 
     * @param {String} name
     * Nome do cokie
     *  
     * @returns {Boolean} 
     */
    remove(name) {
        const d = new Date();
        d.setTime(d.getTime() - 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + '' + ";" + expires + ";path=/";
        return !getCookie(name);
    }
}

export default new Cookies;