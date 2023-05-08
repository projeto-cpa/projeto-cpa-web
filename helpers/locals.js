/**
 * Uma classe que guarda valores localmente no navegador
 */
class Locals {

    /**
     * 
     * @param {String} name 
     * Nome da chave
     * 
     * @param {String} value 
     * Valor da chave
     * 
     * @returns {Boolean}
     */
    set(name, value) {
        return localStorage.setItem(name, value);
    }

    /**
     * 
     * @param {String} name
     * Nome do chave
     *  
     * @returns 
     */
    get(name) {
        return localStorage.getItem(name) ? localStorage.getItem(name) : false;
    }

    /**
     * 
     * @param {String} name 
     * Nome da chave
     * 
     * @returns {Boolean} 
     */
    remove(name) {
        return localStorage.removeItem(name);
    }
}

export default new Locals;