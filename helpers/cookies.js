class Cookies {

    /**
     * Recupera um cookie
     * 
     * @param {String} name 
     * Nome do cookie
     * 
     * @returns {String|Boolean}
     */
    get(name) {
        return sessionStorage.getItem(name) || false;
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
     * @returns {Boolean}
     */
    set(name, value,) {
        return sessionStorage.setItem(name, value);
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
        return sessionStorage.removeItem(name);
    }
}

export default new Cookies;