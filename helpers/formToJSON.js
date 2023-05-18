const hasOnlyNumbersOrDecimals = function(value){
    const regex = new RegExp(/^[0-9]+(\.[0-9]+)?$/);
    return regex.test(value);
}

function formToJSON(formData) {
    var object = {};
    formData.forEach((value, key) => {
        if (!Reflect.has(object, key)) {

            //console.log(`test:${value}:${typeof value}`, hasOnlyNumbersOrDecimals(value));
            if (hasOnlyNumbersOrDecimals(value)) {
                value = Number(value);
            }

            if (typeof value === 'string') {
                switch (value.toLowerCase()) {
                    case "true":
                        value = true;
                        break;
                    case "false":
                        value = false;
                        break;
                    case "null":
                        value = null;
                        break;
                    default:
                        break;
                }
            }
            
            object[key] = value;
            return;
        }
        if (!Array.isArray(object[key])) {
            object[key] = [object[key]];
        }
        object[key].push(value);
    });
    var json = JSON.stringify(object);
    return json;
}

export default formToJSON;