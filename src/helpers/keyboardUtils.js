export default function keyboardEvent(e) {
    let key = e && (e.which || e.keyCode || 0);
    let element = (e && e.target) || null;
    let value = element && (element.value || "");
    return {
        key,
        value,
        element
    };
}
