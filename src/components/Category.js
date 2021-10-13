import {ProductLine} from "./ProductLine";
import {Button, Card, Col, Collapse} from "react-bootstrap";
import {useState} from "react";


export function Category(props) {
    const [open, setOpen] = useState(false);
    const {category} = props;
    return <Col xs={12} md={6} lg={4} >

        <Card.Header style={{backgroundColor: "black", color: "white"}} onClick={() => setOpen(!open)} >
            {category.name}
        </Card.Header>

        <div className="m-5">
            <Collapse in={open} >
                <div id="text">
                    <Card className="h-100">
                        <div className={"alert"}> {category.note}</div>
                        {category.products.map(p => <ProductLine product={p} key={p.name}/>)}
                    </Card>
                </div>

            </Collapse>

        </div>
    </Col>
}