import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5' >
        <Row className='hero gap-5'>
          <Col className='d-flex justify-content-center align-items-center'>
            <Image src='/profile.jpg' className='w-100 h-full bg-black' style={{minWidth:280,maxWidth:400,height:400, objectFit: 'cover'}} roundedCircle fluid/>
          </Col>
          <Col>
            <h1 className='display-3 fw-bold'>Jeremy Ferrer</h1>
            <h1>Aspiring Web Developer</h1>
            <hr/>
            <p>
              21 year's old BSIT Student currently studying in PHINMA University of Pangasinan
            </p>
            <div className='d-flex align-items-center gap-2'>
              <Link to='/work'>
                <Button className='btn-lg rounded-pill' variant='outline-light'>View Work</Button>
              </Link>
              |
              <SocialLinks />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
