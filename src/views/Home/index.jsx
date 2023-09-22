import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '@redux/homeSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photots = useSelector((state) => state.home.photos);
  const isLoading = useSelector((state) => state.home.isLoading);
  const error = useSelector((state) => state.home.error);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  // eslint-disable-next-line no-console
  console.log('process.env.TEST_VAR1', process.env.TEST_VAR1c);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Photos</h1>
        </Col>
      </Row>
      <Row xs={1} md={4} className="g-4">
        {photots.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                {/* <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
