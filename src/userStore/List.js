import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from '../actions';

// user props data object - one way data flow
function List() {
  const isUserActive = useSelector(state => state.isLoggedIn);

  const dispatch = useDispatch();
  dispatch(logIn());
  // dispatch(logOut());
  // if(isUserActive) {
  //   items = this.props.guitarList.map((item, index) => {
  //     return (
  //         <li key={item._id}>
  //           <div>{item.title}</div>
  //           <div>{item.price}</div>
  //         </li>
  //     )
  //   })
  // } 
  
  return (
    <div>
      <h3>Guitar List</h3>
      {isUserActive ?  <div>SHOW LIST</div> : <div>You need to logged in!</div>}
     
    </div>
  ) 

  

}

export default List;
