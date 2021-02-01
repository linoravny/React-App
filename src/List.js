import React, {Component} from 'react';

// user props data object - one way data flow
class List extends Component {
  render() {

    const items = this.props.guitarList.map((item, index) => {
      return (
          <li key={item._id}>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </li>
      )
    })

    return (
      <div>
        <h3>Guitar List</h3>
        <ol>{items}</ol>
      </div>
    ) 

  }
}

export default List;
