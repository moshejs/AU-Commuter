import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from '../Functions.js';
import {createDateValue} from '../Functions.js';
import {DVDate} from '../Functions.js';

export class AdelphiToRooseveltField extends React.Component {

render() {

  //Name of Route
  let route = 'Adelphi Univerity to Roosevelt Field';
  let departing = 'Adelphi University';
  let arriving = 'Roosevelt Field';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,8,55), difference: new Date(2018,8,1,8,55), weekdayTwo: createDate(2018,8,1,9,10) },
    {id: 2, weekday: createDate(2018,8,1,10,50), difference: new Date(2018,8,1,10,50), weekdayTwo: createDate(2018,8,1,11,5) },
    {id: 3, weekday: createDate(2018,8,1,12,35), difference: new Date(2018,8,1,12,35), weekdayTwo: createDate(2018,8,1,12,50) },
    {id: 4, weekday: createDate(2018,8,1,14,15), difference: new Date(2018,8,1,14,15), weekdayTwo: createDate(2018,8,1,14,30) },
    {id: 5, weekday: createDate(2018,8,1,16,15), difference: new Date(2018,8,1,16,15), weekdayTwo: createDate(2018,8,1,16,35) },
    {id: 6, weekday: createDate(2018,8,1,17,45), difference: new Date(2018,8,1,17,45), weekdayTwo: createDate(2018,8,1,18,0) },
    {id: 7, weekday: createDate(2018,8,1,19,45), difference: new Date(2018,8,1,19,45), weekdayTwo: createDate(2018,8,1,20,5) },
    {id: 8, weekday: createDate(2018,8,1,22,0), difference: new Date(2018,8,1,22,0), weekdayTwo: createDate(2018,8,1,22,20) },

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,8,55),
    createDateValue(2018,8,1,10,50),
    createDateValue(2018,8,1,12,35),
    createDateValue(2018,8,1,14,15),
    createDateValue(2018,8,1,16,15),
    createDateValue(2018,8,1,17,45),
    createDateValue(2018,8,1,19,45),
    createDateValue(2018,8,1,22,0)

  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,8,55),
    createDate(2018,8,1,10,50),
    createDate(2018,8,1,12,35),
    createDate(2018,8,1,14,15),
    createDate(2018,8,1,16,15),
    createDate(2018,8,1,17,45),
    createDate(2018,8,1,19,45),
    createDate(2018,8,1,22,0)


  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
