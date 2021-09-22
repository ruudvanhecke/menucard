import './App.css';
import {ProductLine} from "./components/ProductLine";
import {PRODUCTS_DATA} from "./data/Data";

function App() {
    return (
        <div>
            <h1>Menu</h1>
            <ProductLine product={PRODUCTS_DATA[0]} />
            <ProductLine product={PRODUCTS_DATA[1]} />
            <ProductLine product={PRODUCTS_DATA[2]} />
            <ProductLine product={PRODUCTS_DATA[3]} />
        </div>
    );
}


export default App;
