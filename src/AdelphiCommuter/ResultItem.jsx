import React from 'react';

const ObjectTest = {
    1: {
        FromLocation : "Adelphi University",
        FromTime : "7:05PM",
        ToLocation:"Nassau Boulevard",
        ToTime : "7:10PM"

    }

}


export class ResultItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      from: props.from,
      to: props.to,
      time: props.time
    }

  }


  



  _renderObject(){
		return Object.entries(ObjectTest).map(([key, value], i) => {
			return (
				<div>
				<p> {value.FromLocation} </p>
				<p>	{value.FromTime} </p>
        <p>{value.ToLocation}</p>
        <p>{value.ToTime}</p>

           <br></br>
				</div>
			)
		})
	}

render() {
  return(
      <div>
        {this._renderObject()}
      </div>


  );

}
}
