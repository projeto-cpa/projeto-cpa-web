/**
 * Uma classe que contem valores globais
 */
class Globals{
    constructor() {
        this.server = {
            url: process.env.API_URL,
            timeout: 10000
        };
    }
}

export default new Globals;