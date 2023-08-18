import React from 'react';
import { Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container className='hero d-flex flex-column py-5'>
        <h1 className='display-1 fw-bold'>
           My Work
        </h1>
        <p>Here are some of the projects I've worked on:</p>
        <hr />
        <Container className='d-flex flex-column gap-5'>
         <Row>
            <Col>
              <Image src="/clinq.png" className=" w-100 h-100 object-coverrounded" style={{minWidth:300}}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center'>
              <h4 className='display-3 fw-bold'>CLINQ</h4>
              <p>A Queueing Management System meant to reduce waiting time in a clinic</p>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col className='d-flex flex-column justify-content-center'>
              <h4 className='display-3 fw-bold'>Photo Studio</h4>
              <p>A photo gallery website that allows you to showcase your wonderful moments in life</p>
            </Col>
            <Col>
              <Image src="/photostudio.jpg" className=" w-100 h-100 object-cover rounded" style={{minWidth:300}}/>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>
              <Image src="/foodstudio.png" className=" w-100 h-100 object-cover rounded" style={{minWidth:300}}/>
            </Col>
            <Col className='d-flex flex-column justify-content-center'>
              <h4 className='display-3 fw-bold'>Food Studio</h4>
              <p>A Food Web App allows that users order food online and deliver it to your home</p>
            </Col>
          </Row>
        </Container>
    
    </Container>
   </>
  );
};

export default Work;
