import React from 'react';

export class Session extends React.Component{

  constructor() {
     super();
  };

  state = {
    Semester: "Summer",
    Year: 2018
  }


render() {
  return (

    <div>

      <div><p>Live</p></div>
      <p>{this.state.Semester}</p>
      <p>{this.state.Year}</p>

    </div>


  );
}


}
