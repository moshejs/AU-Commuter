import React from 'react';
import { AdelphiToNassau } from "./AdelphiToNassau.jsx"
import { AdelphiToMineola } from "./AdelphiToMineola.jsx"
import { AdelphiToHempsteadBus } from "./AdelphiToHempsteadBus.jsx"
import { AdelphiToRooseveltField } from "./AdelphiToRooseveltField.jsx"
import { AdelphiToStopShop } from "./AdelphiToStopShop.jsx"
import { AdelphiToHempsteadTpk } from "./AdelphiToHempsteadTpk.jsx"
import { AdelphiTo7th } from "./AdelphiTo7th.jsx"
import { NassauToAdelphi } from "./NassauToAdelphi.jsx"
import { MineolaToAdelphi } from "./MineolaToAdelphi.jsx"
import { StopShopToAdelphi } from "./StopShopToAdelphi.jsx"
import { HempsteadBusToAdelphi } from "./HempsteadBusToAdelphi.jsx"
import { RooseveltToAdelphi } from "./RooseveltToAdelphi.jsx"
import { HempsteadTpkToAdelphi } from "./HempsteadTpkToAdelphi.jsx"
import { SeventhToAdelphi } from "./SeventhToAdelphi.jsx"
import { HempsteadBusToRoosevelt } from "./HempsteadBusToRoosevelt.jsx"
import { StopShopToHempsteadTpk } from "./StopShopToHempsteadTpk.jsx"
import { InvalidSearch } from "./InvalidSearch.jsx"


import './index.css';


export class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      from: 'Adelphi University',
      to: 'Nassau Boulevard',
      check: false

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });

  }


  handleSubmit(event) {

        this.state = {
         check: true
       }
      event.preventDefault();
  }


render(){


  let statement;

  if (this.state.from == 'Adelphi University' && this.state.to == 'Nassau Boulevard') {
    statement = <AdelphiToNassau />

  } else if (this.state.from == 'Adelphi University' && this.state.to == 'Mineola') {
    statement = <AdelphiToMineola />

  } else if (this.state.from == 'Adelphi University' && this.state.to == 'Stop and Shop') {
    statement = <AdelphiToStopShop />

  } else if (this.state.from == 'Adelphi University' && this.state.to == 'Hempstead Bus') {
    statement = <AdelphiToHempsteadBus />

  } else if (this.state.from == 'Adelphi University' && this.state.to == 'Roosevelt Field') {
    statement = <AdelphiToRooseveltField/>

  } else if (this.state.from == 'Adelphi University' && this.state.to == 'Hempstead Turnpike') {
    statement = <AdelphiToHempsteadTpk/>

  } else if (this.state.from == 'Adelphi University' && this.state.to == '7th Street, Hilton Ave') {
    statement = <AdelphiTo7th/>

  } else if (this.state.from == 'Nassau Boulevard' && this.state.to == 'Adelphi University') {
    statement = <NassauToAdelphi/>

  } else if (this.state.from == 'Mineola' && this.state.to == 'Adelphi University') {
    statement = <MineolaToAdelphi/>

  } else if (this.state.from == 'Stop and Shop' && this.state.to == 'Adelphi University') {
    statement = <StopShopToAdelphi/>

  } else if (this.state.from == 'Hempstead Bus' && this.state.to == 'Adelphi University') {
    statement = <HempsteadBusToAdelphi/>

  } else if (this.state.from == 'Roosevelt Field' && this.state.to == 'Adelphi University') {
    statement = <RooseveltToAdelphi/>

  } else if (this.state.from == 'Hempstead Turnpike' && this.state.to == 'Adelphi University') {
    statement = <HempsteadTpkToAdelphi/>

  } else if (this.state.from == '7th Street, Hilton Ave' && this.state.to == 'Adelphi University') {
    statement = <SeventhToAdelphi/>

  } else if (this.state.from == 'Hempstead Bus' && this.state.to == 'Roosevelt Field') {
    statement = <HempsteadBusToRoosevelt/>

  } else if (this.state.from == 'Stop and Shop' && this.state.to == 'Hempstead Turnpike') {
    statement = <StopShopToHempsteadTpk/>

  // Show all data
//} else if (this.state.from == 'Adelphi University' && this.state.to == 'Where To?') {
    //statement = 'Show Multiple Data Component'

  } else {
    statement = <InvalidSearch from = {this.state.from} to = {this.state.to} />
  }




  return(
<div>
    <div className='SearchFormDiv'>
      <div className='nav'>
        <p className='nav1'>Adelphi Commuter</p>
        <a className='nav2' href='https://safety.adelphi.edu/transportation/shuttle/'>Public Safety & Transportation</a>

      </div>
    <form className='SearchForm' onSubmit={this.handleSubmit}>

           <select className='Search-item1' value={this.state.from} name="from" onChange={this.handleChange}>
           <option className='dropdown-item' value="Adelphi University">Adelphi University</option>
           <option className='dropdown-item' value="Nassau Boulevard">Nassau Boulevard</option>
           <option className='dropdown-item' value="Mineola">Mineola</option>
           <option className='dropdown-item' value="Stop and Shop">Stop & Shop</option>
           <option className='dropdown-item' value="Hempstead Bus">Hempstead Bus</option>
           <option className='dropdown-item' value="Roosevelt Field">Roosevelt Field</option>
           <option className='dropdown-item' value="Hempstead Turnpike">Hempstead Turnpike</option>
           <option className='dropdown-item' value="7th Street, Hilton Ave"> 7 th Street, Hilton Ave</option>
           </select>


             <select className='Search-item2' value={this.state.to} name="to" onChange={this.handleChange}>
             <option className='dropdown-item' value="Adelphi University">Adelphi University</option>
             <option className='dropdown-item' value="Nassau Boulevard">Nassau Boulevard</option>
             <option className='dropdown-item' value="Mineola">Mineola</option>
             <option className='dropdown-item' value="Stop and Shop">Stop & Shop</option>
             <option className='dropdown-item' value="Hempstead Bus">Hempstead Bus</option>
             <option className='dropdown-item' value="Roosevelt Field">Roosevelt Field</option>
             <option className='dropdown-item' value="Hempstead Turnpike">Hempstead Turnpike</option>
             <option className='dropdown-item' value="7th Street, Hilton Ave"> 7 th Street, Hilton Ave</option>
             </select>




     </form>

     </div>

    <h3>{statement}</h3>

    <div className='footer'>
      <p className='footer-text1'>Designed & Developed by</p>
      <a className='footer-text2' href='http://lapomeray.com/' target='blank'>  Brandon Lapomeray </a>
    </div>

    </div>

  )
}

}
