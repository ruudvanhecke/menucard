import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {CATEGORIES_DATA} from "./data/Data";
import {MenuNavBar} from "./components/MenuNavBar";
import {MenuCard} from "./components/MenuCard";
import {Container} from "react-bootstrap";


function App() {

    return <Container fluid className="p-0 p-md-3 p-lg-5">
            <MenuNavBar/>
            <MenuCard menuData={CATEGORIES_DATA}/>
            </Container>


}


export default App;
