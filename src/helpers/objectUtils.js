export function setObjectProperties(object) {
    return function(properties) {
        return Object.assign({}, object, properties);
    };
}
