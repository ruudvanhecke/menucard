import {Container, Row} from "react-bootstrap";
import {CATEGORIES_DATA} from "../data/Data";
import {Category} from "./Category";

export function MenuCard(props) {
    const {menuData} = props;


    return <Container fluid className="p-0 p-md-3 p-lg-5">
        <Row className="m-0 mt-4 menu-h1"><h1>Menu</h1></Row>
        <Row className="m-0">
            {CATEGORIES_DATA.map(c => <Category category={c} key={c.name}/>)}
        </Row>
    </Container>
}