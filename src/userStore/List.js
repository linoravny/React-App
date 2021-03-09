import React, {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Image, Box, Card, Text, Heading} from 'rebass';
import { Link } from "react-router-dom";
import axios from 'axios';

function List() {
  //from store - REDUX
  const isUserActive = useSelector(state => state.isLoggedIn);

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
    }

  },[setLoading, setData,isUserActive]);

  return (
    <div className="bookList">
      {
      isUserActive ?  

      <div>
        <h3>BOOK LIST</h3>
        { isLoading  && 
          <Box>loading...</Box>
        }
        <Box>
          {books.map((book, index) => {
            return (
              <Link key={book.id} to={{
                pathname: `/storeItem/${book.id}`,
                state: { data: book }
              }}>
                <Card className="bookListItem" width={256}>
                  <Image
                    alt={`${book.volumeInfo.title} book`}
                    src={`${book.volumeInfo.imageLinks.smallThumbnail}&printsec=frontcover&img=1&zoom=1&source=gbs_api` }
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 9999,
                    }}
                  />
                  <Heading>{book.volumeInfo.title}</Heading>
                  <Text>{book.volumeInfo.publishedDate}</Text>
                </Card>
              </Link>
            )
          })}
        </Box>
      </div> 
      : 
      <div>You need to logged in!</div>
      }
     
    </div>
  ) 
}

export default List;
