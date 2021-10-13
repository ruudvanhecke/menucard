import {ProductLine} from "./ProductLine";
import {Card, Col, Collapse} from "react-bootstrap";
import {useState} from "react";


export function Category(props) {
    const [open, setOpen] = useState(false);
    const {category} = props;
    return <Col xs={12} md={6} lg={4}>
        <Card className="h-100">
        <Card.Header style={{backgroundColor: "black", color: "white"}} onClick={() => setOpen(!open)}>
            {category.name}
        </Card.Header>
            <Collapse in={open}>
                <div id="text" className="m-5 ml-1">
                        <div className={"alert"}> {category.note}</div>
                        {category.products.map(p => <ProductLine product={p} key={p.name}/>)}
                </div>
            </Collapse>
        </Card>
    </Col>
}