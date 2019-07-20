export function deleteFromArray(array, item) {
    let cloned = [...array];
    cloned.splice(array.indexOf(item), 1);
    return cloned;
}
