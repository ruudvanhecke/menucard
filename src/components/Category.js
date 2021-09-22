import {ProductLine} from "./ProductLine";


export function Category(props) {
    const {category} = props;
    return <div>
    <h2> {category.name}</h2>
        <div className={"alert"}> {category.note}</div>
        {category.products.map(p => <ProductLine product={p} key={p.name} />)}
    </div>
}