import React from 'react';
import { AdelphiToNassau } from "./AdelphiToNassau.jsx"

export class SearchResult extends React.Component {

  constructor(props){
    super(props);

  }


render() {
  let statement;
  if (this.props.from == 'Adelphi University' && this.props.to == 'Nassau Boulevard') {
    statement = <AdelphiToNassau />
}
  return (

    <div>

      <h3>You are in the Search Result</h3>
      <h3>{statement}</h3>

    </div>

  );
}

}
