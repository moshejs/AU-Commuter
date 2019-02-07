import React from 'react';
import { Heading } from "./Heading.jsx"
import { AdelphiToNassau } from "./AdelphiToNassau.jsx"
import { Session } from "./Session.jsx"


export class Banner extends React.Component {

  constructor() {
     super();
  };


render() {
  return (

    <div>

      <Heading Heading="AU Shuttle" />
      <Session />
      <AdelphiToNassau />

    </div>



  );
}
}
