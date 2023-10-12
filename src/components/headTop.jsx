import React, {useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import LogoImg from "../images/web3camp.png";

export default function HeaderTop() {
    useEffect(()=>{
        if((window).ethereum){
            (window).ethereum.on('chainChanged', () => {
                window.location.reload()
            });
        }

    },[])
    return <div className="header">
        <Container>
            <Row>
                <Col className="headerTxt" md={12}>
                    <a href="https://web3camp.us" target="_blank" rel="noreferrer">
                        <img src={LogoImg} alt=""/>
                    </a>

                </Col>
            </Row>
        </Container>
    </div>
}
