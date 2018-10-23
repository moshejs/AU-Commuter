import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from '../Functions.js';
import {createDateValue} from '../Functions.js';
import {DVDate} from '../Functions.js';

export class HempsteadTpkToAdelphi extends React.Component {

render() {

  //Name of Route
  let route = 'Hempstead Turnpike to Adelphi University';
  let departing = 'Hempstead Turnpike';
  let arriving = 'Adelphi University';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,45), difference: new Date(2018,8,1,7,45), weekdayTwo: createDate(2018,8,1,7,55) },
    {id: 2, weekday: createDate(2018,8,1,8,55), difference: new Date(2018,8,1,8,55), weekdayTwo: createDate(2018,8,1,9,5) },
    {id: 3, weekday: createDate(2018,8,1,9,30), difference: new Date(2018,8,1,9,30), weekdayTwo: createDate(2018,8,1,9,40) },
    {id: 4, weekday: createDate(2018,8,1,10,45), difference: new Date(2018,8,1,10,45), weekdayTwo: createDate(2018,8,1,10,55) },
    {id: 5, weekday: createDate(2018,8,1,12,50), difference: new Date(2018,8,1,12,50), weekdayTwo: createDate(2018,8,1,13,0) },
    {id: 6, weekday: createDate(2018,8,1,13,20), difference: new Date(2018,8,1,13,20), weekdayTwo: createDate(2018,8,1,13,30) },
    {id: 7, weekday: createDate(2018,8,1,13,55), difference: new Date(2018,8,1,13,55), weekdayTwo: createDate(2018,8,1,14,5) },
    {id: 8, weekday: createDate(2018,8,1,15,45), difference: new Date(2018,8,1,15,45), weekdayTwo: createDate(2018,8,1,15,55) },
    {id: 9, weekday: createDate(2018,8,1,17,45), difference: new Date(2018,8,1,17,45), weekdayTwo: createDate(2018,8,1,17,55) },
    {id: 10, weekday: createDate(2018,8,1,19,50), difference: new Date(2018,8,1,19,50), weekdayTwo: createDate(2018,8,1,20,0) },
    {id: 11, weekday: createDate(2018,8,1,20,20), difference: new Date(2018,8,1,20,20), weekdayTwo: createDate(2018,8,1,20,30) },
    {id: 12, weekday: createDate(2018,8,1,20,45), difference: new Date(2018,8,1,20,45), weekdayTwo: createDate(2018,8,1,21,0) },
    {id: 13, weekday: createDate(2018,8,1,22,15), difference: new Date(2018,8,1,22,15), weekdayTwo: createDate(2018,8,1,22,20) }
  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,45),
    createDateValue(2018,8,1,8,55),
    createDateValue(2018,8,1,9,30),
    createDateValue(2018,8,1,10,45),
    createDateValue(2018,8,1,12,50),
    createDateValue(2018,8,1,13,20),
    createDateValue(2018,8,1,13,55),
    createDateValue(2018,8,1,15,45),
    createDateValue(2018,8,1,17,45),
    createDateValue(2018,8,1,19,50),
    createDateValue(2018,8,1,20,20),
    createDateValue(2018,8,1,20,45),
    createDateValue(2018,8,1,22,15)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,45),
    createDate(2018,8,1,8,55),
    createDate(2018,8,1,9,30),
    createDate(2018,8,1,10,45),
    createDate(2018,8,1,12,50),
    createDate(2018,8,1,13,20),
    createDate(2018,8,1,13,55),
    createDate(2018,8,1,15,45),
    createDate(2018,8,1,17,45),
    createDate(2018,8,1,19,50),
    createDate(2018,8,1,20,20),
    createDate(2018,8,1,20,45),
    createDate(2018,8,1,22,15)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
