import type { NextPage } from 'next'
import Head from 'next/head'
import {Container, Row, Col, Card,Button} from 'react-bootstrap';
import styled from "styled-components";
import HeaderTop from "./components/headTop";
import BatchQuery from "./components/batchQuery";
import FooterBox from "./components/footerBox";
const MainBox = styled.div`
    display: flex;
  flex-grow: 1;
`
const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const BgBox = styled(Container)`
  margin-top: 30px;
`

const CardBox = styled.div`
  //border:0;
  //box-shadow: 0 0 5px #ccc;
  //border-radius: 6px;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #EDEFF0;
`

const Lft = styled.div`
    display: flex;
  align-items: center;
  .imgBox{
    width: 96px;
    height: 96px;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #EDEFF0;
    padding: 13px;
    margin-right: 16px;
    box-sizing: border-box;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
`
const TopLine = styled.div`
    margin-bottom: 20px;
`

const ButtonBox = styled.div`
    padding: 20px 0;
    text-align: right;
`
const TitleBox = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  .tit{
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
  }
`



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Batch Query</title>
        <meta name="description" content="Batch Query" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContent >
          <HeaderTop />
          <MainBox>
              <BgBox>
                  <Row>
                      <Col md={12}>
                          <TopLine>
                              <Row>
                                  <Col md={12}>
                                      <Lft>
                                          <div className="imgBox"><img src="./query.png" alt=""/></div>
                                          <TitleBox>
                                              <div className="tit">Batch Query</div>
                                              <div>Batch query native/ERC20 token amount ,import/export csv file.</div>
                                          </TitleBox>
                                      </Lft>
                                  </Col>

                              </Row>
                          </TopLine>
                      </Col>
                      <Col md={12} xs={12}>
                          <CardBox body>
                                <BatchQuery />
                          </CardBox>
                      </Col>
                  </Row>
              </BgBox>
          </MainBox>
          <FooterBox />
      </MainContent>
    </>
  )
}

export default Home
