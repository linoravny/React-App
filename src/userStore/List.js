import React, {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardColumns, Col, Row, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function List() {
  //from store - REDUX
  const isUserActive = useSelector(state => state.userData.isUserActive);

  //hook useState
  const [books, setData] = useState([]); //add state to function components
  const [isLoading, setLoading] = useState(false); 

  //fires after layout and paint
  useEffect(() => {
    const apiUrl = '/data/book.json';
    
    // const fetchData = async () => {
    //   const result = await axios(
    //     apiUrl,
    //   );
    //   setData(result.data.items);
    // };
 
    // fetchData();
    if(isUserActive) {
      setLoading(true);
      setTimeout(() => {
        axios.get(apiUrl).then((repos) => {
          //setTimeout(function(){ //for check loading
            //console.log("repos.data:" + JSON.stringify(repos.data));
            setData(repos.data.items);
            setLoading(false);
          //}, 2000);
          
        }).catch((err) => {
          console.log("FETCH_DATA_REJECTED err" + err);
          setLoading(false);
        });
      },2000);
    }

  },[setLoading, setData,isUserActive]);

  return (
    <div className="bookList">
      <Container>
        <Row>
          <Col>
            {
            isUserActive ?  

            <div>
              <h3>BOOK LIST</h3>
              { isLoading  && 
                <Spinner animation="border" variant="secondary" />
              }
              <div>
                <CardColumns>
                  {books.map((book, index) => {
                    return (
                      <Link key={book.id} to={{
                        pathname: `/storeItem/${book.id}`,
                        query: book 
                      }}>
                        
                          <Card bg="dark">
                            <Card.Img variant="top"
                              alt={`${book.volumeInfo.title} book`}
                              src={`${book.volumeInfo.imageLinks.smallThumbnail}&printsec=frontcover&img=1&zoom=1&source=gbs_api` } />
                            <Card.Body>
                              <Card.Title>{book.volumeInfo.title}</Card.Title>
                              <Card.Text>
                                {book.volumeInfo.publishedDate}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        
                      </Link>
                    )
                  })}
                </CardColumns>
              </div> 
            </div> 
            : 
            <div>You need to logged in!</div>
            }
          </Col>
        </Row>
      </Container>
    </div>
  ) 
}

export default List;
