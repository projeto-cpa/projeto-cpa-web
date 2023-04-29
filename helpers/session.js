/**
 * Uma classe que representa a sessão do cliente
 *
 * @class
 */
class Session {

    /**
     * Retorna ou define um valor da sessão, caso seja apenas informado o campo
     * será retornado apenas o valor. Caso informe o campo e valor, será alterado
     * o valor do campo informado.
     * 
     * 
     * @param campo
     * @param valor
     * 
     */
    data(campo, valor) {
        if (!valor) {
            try {
                return sessionStorage[campo];
            } catch (e) {
                throw new Error('Sessions não disponível');
            }
        } else {
            try {
                return sessionStorage[campo] = valor;
            } catch (e) {
                throw new Error('Sessions não disponível');
            }
        }
    }
}

export default new Session();