import type { NextPage } from 'next'
import Head from 'next/head'
import {Container, Row, Col, Card} from 'react-bootstrap';
import styled from "styled-components";
import HeaderTop from "./components/headTop";
import BatchQuery from "./components/batchQuery";

const MainBox = styled.div`
    display: flex;
`

const BgBox = styled(Container)`
  margin-top: 30px;
`

const CardBox = styled(Card)`
  border:0;
  box-shadow: 0 0 5px #ccc;
  border-radius: 6px;
`


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Batch Query</title>
        <meta name="description" content="Batch Query" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
          <HeaderTop />
          <MainBox>
              <BgBox>
                  <Row>
                      <Col md={12} xs={12}>
                          <CardBox body>
                                <BatchQuery />
                          </CardBox>
                      </Col>
                  </Row>
              </BgBox>
          </MainBox>
      </main>
    </>
  )
}

export default Home
