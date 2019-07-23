import nanoid from 'nanoid';
export function TodoJso(label, completed = false) {
    let id = nanoid();
    return {
        id,
        label,
        completed
    };
}
