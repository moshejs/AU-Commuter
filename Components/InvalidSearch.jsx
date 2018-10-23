import React from 'react';
import '../index.css';


export class InvalidSearch extends React.Component {

render() {

  return (

    <div className='InvalidSearchDiv'>
      <p className='InvalidSearchText'> {this.props.from} to {this.props.to} is not a valid route</p>
    </div>

  );
}

}
