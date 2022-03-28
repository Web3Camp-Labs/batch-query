import React, {useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function HeaderTop() {
    useEffect(()=>{
        if((window as any).ethereum){
            (window as any).ethereum.on('chainChanged', () => {
                window.location.reload()
            });
        }

    },[])
    return <div className="header">
        <Container>
            <Row>
                <Col className="headerTxt" md={8} xs={12}>Native/ERC20 Token Batch Query</Col>
                <Col className="headetRht" md={4} xs={12}>&copy; Web3 Camp</Col>
            </Row>
        </Container>
    </div>
}
