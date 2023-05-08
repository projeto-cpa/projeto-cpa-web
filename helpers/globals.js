/**
 * Uma classe que contem valores globais
 */
class Globals{
    constructor() {
        this.server = {
            url: 'http://localhost:8080',
            timeout: 10000
        };
    }
}

export default new Globals;