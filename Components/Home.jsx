import React from 'react';
import { AdelphiToNassau } from "./AdelphiToNassau.jsx";
import { AdelphiToMineola } from "./AdelphiToMineola.jsx";
import { AdelphiToStopShop } from "./AdelphiToStopShop.jsx";
import { MineolaToAdelphi } from "./MineolaToAdelphi.jsx";


import '../index.css';




export class Home extends React.Component {

render() {



  return (

    <div>

      <div className='home-row'>
      <MineolaToAdelphi />
      </div>

      <div className='home-row'>
      <AdelphiToMineola />
      </div>



    </div>
  );
}

}
