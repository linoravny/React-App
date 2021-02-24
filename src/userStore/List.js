import React from 'react';
import { useSelector } from 'react-redux';
import data from '../data/book.json';
import { Image, Box, Card, Text} from 'rebass';

// user props data object - one way data flow
function List() {
  const isUserActive = useSelector(state => state.isLoggedIn);


    // axios.get('../data/book.json')
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err)

  
  return (
    <div>
      <h3>Guitar List</h3>
      {
      isUserActive ?  
      <div>
        <h3>BOOK LIST</h3>
        <Box>
          {data.items.map((book, index) => {
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
