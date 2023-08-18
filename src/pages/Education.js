import React from 'react';
import { Container, ListGroup} from 'react-bootstrap';


const Education = () => {
  return (
    <>
      <Container className='hero d-flex flex-column py-5 text-center'>
        <h2 className='display-1 fw-bold text-center'>My Education</h2>
        <p className='text-center'>These are my academic qualifications:</p>
        <hr/>
        <Container>
        <ListGroup>
          <ListGroup.Item className='mt-4 flex-column d-flex align-items-center'>
            <h1>David Elementary Schools</h1>
            <p>2012-2015</p>
          </ListGroup.Item>
          <ListGroup.Item className='mt-4 flex-column d-flex align-items-center'>
            <h1>Mangaldan National High School</h1>
            <p>2016-2019</p>
          </ListGroup.Item>
          <ListGroup.Item className='mt-4 flex-column d-flex align-items-center'>
            <h1>PHINMA University of Pangasinan</h1>
            <p>2020 - current</p>
          </ListGroup.Item>    
        </ListGroup>
        </Container>
      </Container>
    </>
  );
};

export default Education;
