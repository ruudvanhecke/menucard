import './App.css';
import {ProductLine} from "./components/ProductLine";
import {CATEGORIES_DATA, PRODUCTS_DATA} from "./data/Data";
import {Category} from "./components/Category";

function App() {
    return (
        <div>
            <h1>Menu</h1>
            {CATEGORIES_DATA.map(c => <Category category={c} key={c.name} />)}
        </div>

    );
}


export default App;
