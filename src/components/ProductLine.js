import {ProductSize} from "./ProductSize";
import {ProductNote} from "./ProductNote";



export function ProductLine(props) {
    const {product} = props;
    if (!product.name) return null;
    return <div className="productLine">

        <div>{product.name}
            <ProductSize product={product} />
            <ProductNote product={product} />
            <div className="note">{product.note}</div>
        </div>
        <div>{product.price}</div>
    </div>
}