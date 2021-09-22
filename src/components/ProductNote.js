export function ProductNote(props) {
    const {product} = props;
    return <span className="note"> {- product.note || ""}</span>;
}