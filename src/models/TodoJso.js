import nanoid from "nanoid";
export default function TodoJso(label) {
    let id = nanoid();
    return {
        id,
        label
    };
}
