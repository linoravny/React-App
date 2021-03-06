import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function ListItem(props) {

  // console.log(props.location.query);
  const bookItemData = (props.location && props.location.query)? props.location.query : {};

  return (
    <div className="BookItem">
      <Container>
        <Row>
          <Col>
            {
            (bookItemData && bookItemData.volumeInfo) ?
              <Jumbotron>
                <h1 class="display-4">{bookItemData.volumeInfo.title}</h1>
                <p class="lead">
                  {bookItemData.volumeInfo.subtitle}
                </p>
                <hr class="my-4" />
                <p>
                  <a class="btn btn-primary btn-lg"
                     href={bookItemData.volumeInfo.canonicalVolumeLink} 
                     variant="dark" 
                     target="_blank">
                    canonical volume link
                  </a>
                </p>
              </Jumbotron>
              :
              <div>Please logging. No Data To Display :( </div>
            }
          </Col>
        </Row>
      </Container>
    </div>
  ) 
}

export default ListItem;
