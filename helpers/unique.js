import { v4 as uuidv4 } from 'uuid';

export default {
    generate: function () {
        return 'a' + uuidv4().replace(/-/g, '');
    }
};