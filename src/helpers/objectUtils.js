export function objectCloner(object) {
    return function(properties) {
        return Object.assign({}, object, properties);
    };
}
