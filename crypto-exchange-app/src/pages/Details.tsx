import { Container, Row, Col } from 'react-bootstrap'

import MarketTrades from "../components/MarketTrades";

const Details = () => {
  return (
    <>
      <h3 className='mt-4 text-center'>Market Trades</h3>
      <Container>
      <Row className='justify-content-md-center mt-4'>
        <Col xs='5'>
          <MarketTrades />
        </Col>
      </Row>
    </Container>
    </>
  );
};  

export default Details;
