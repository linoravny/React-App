import React, {useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Image, Box, Card, Text} from 'rebass';
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

    setLoading(true);
    axios.get(apiUrl).then((repos) => {
      //setTimeout(function(){ //for check loading
        console.log("repos.data:" + JSON.stringify(repos.data));
        setData(repos.data.items);
        setLoading(false);
      //}, 2000);
      
    }).catch((err) => {
      console.log("FETCH_DATA_REJECTED err" + err);
      setLoading(false);
    });

  },[]);

  return (
    <div>
      <h3>Guitar List</h3>
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
              <Card width={256} key={book.id}>
                <Image
                  alt={`${book.volumeInfo.title} book`}
                  src={`${book.volumeInfo.imageLinks.smallThumbnail}&printsec=frontcover&img=1&zoom=1&source=gbs_api` }
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 9999,
                  }}
                />
                <Text>{book.volumeInfo.title}</Text>
                <Text>{book.volumeInfo.publishedDate}</Text>

              </Card>
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
