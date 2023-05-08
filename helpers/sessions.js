/**
 * Uma classe que guarda valores temporariamente na sessao
 */
class Sessions {

    /**
     * Recupera um valor de sessao
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
     * Inicia um novo item da sessao
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
     * Remove um item da sessao
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

export default new Sessions;