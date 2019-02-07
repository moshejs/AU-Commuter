import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from './Functions.js';
import {createDateValue} from './Functions.js';
import {DVDate} from './Functions.js';

export class AdelphiTo7th extends React.Component {

render() {
  //Name of Route
  let route = 'Adelphi University to 7th St, Hilton Ave';
  let departing = 'Adelphi University';
  let arriving = '7th St, Hilton Ave';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,11,5), difference: new Date(2018,8,1,11,5), weekdayTwo: createDate(2018,8,1,11,15) },
    {id: 2, weekday: createDate(2018,8,1,11,35), difference: new Date(2018,8,1,11,35), weekdayTwo: createDate(2018,8,1,11,45) },
    {id: 3, weekday: createDate(2018,8,1,12,5), difference: new Date(2018,8,1,12,5), weekdayTwo: createDate(2018,8,1,12,15) },
    {id: 4, weekday: createDate(2018,8,1,12,40), difference: new Date(2018,8,1,12,40), weekdayTwo: createDate(2018,8,1,12,50) },
    {id: 5, weekday: createDate(2018,8,1,13,10), difference: new Date(2018,8,1,13,10), weekdayTwo: createDate(2018,8,1,13,20) },
    {id: 6, weekday: createDate(2018,8,1,17,15), difference: new Date(2018,8,1,17,15), weekdayTwo: createDate(2018,8,1,17,25) },
    {id: 7, weekday: createDate(2018,8,1,18,5), difference: new Date(2018,8,1,18,5), weekdayTwo: createDate(2018,8,1,18,15) },
    {id: 8, weekday: createDate(2018,8,1,18,35), difference: new Date(2018,8,1,18,35), weekdayTwo: createDate(2018,8,1,18,45) },
    {id: 9, weekday: createDate(2018,8,1,19,5), difference: new Date(2018,8,1,19,5), weekdayTwo: createDate(2018,8,1,19,15) }

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,11,5),
    createDateValue(2018,8,1,11,35),
    createDateValue(2018,8,1,12,5),
    createDateValue(2018,8,1,12,40),
    createDateValue(2018,8,1,13,10),
    createDateValue(2018,8,1,17,15),
    createDateValue(2018,8,1,18,5),
    createDateValue(2018,8,1,18,35),
    createDateValue(2018,8,1,19,5)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,11,5),
    createDate(2018,8,1,11,35),
    createDate(2018,8,1,12,5),
    createDate(2018,8,1,12,40),
    createDate(2018,8,1,13,10),
    createDate(2018,8,1,17,15),
    createDate(2018,8,1,18,5),
    createDate(2018,8,1,18,35),
    createDate(2018,8,1,19,5)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
