export function ProductSize(props) {
    const {product} = props;
    return <span className="productSize"> {- product.size || ""}</span>;
}