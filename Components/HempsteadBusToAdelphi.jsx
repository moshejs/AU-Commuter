import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from '../Functions.js';
import {createDateValue} from '../Functions.js';
import {DVDate} from '../Functions.js';

export class HempsteadBusToAdelphi extends React.Component {

render() {

  //Name of Route
  let route = 'Hempstead Bus Terminal To Adelphi';
  let departing = 'Hempstead Bus Terminal';
  let arriving = 'Adelphi University';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,15), difference: new Date(2018,8,1,7,15), weekdayTwo: createDate(2018,8,1,7,25) },
    {id: 2, weekday: createDate(2018,8,1,8,5), difference: new Date(2018,8,1,8,5), weekdayTwo: createDate(2018,8,1,8,15) },
    {id: 3, weekday: createDate(2018,8,1,8,35), difference: new Date(2018,8,1,8,35), weekdayTwo: createDate(2018,8,1,8,45) },
    {id: 4, weekday: createDate(2018,8,1,10,10), difference: new Date(2018,8,1,10,10), weekdayTwo: createDate(2018,8,1,10,25) },
    {id: 5, weekday: createDate(2018,8,1,11,15), difference: new Date(2018,8,1,11,15), weekdayTwo: createDate(2018,8,1,11,25) },
    {id: 6, weekday: createDate(2018,8,1,12,20), difference: new Date(2018,8,1,12,20), weekdayTwo: createDate(2018,8,1,12,30) },
    {id: 7, weekday: createDate(2018,8,1,13,30), difference: new Date(2018,8,1,13,30), weekdayTwo: createDate(2018,8,1,13,40) },
    {id: 8, weekday: createDate(2018,8,1,13,55), difference: new Date(2018,8,1,13,55), weekdayTwo: createDate(2018,8,1,14,5) },
    {id: 9, weekday: createDate(2018,8,1,15,15), difference: new Date(2018,8,1,15,15), weekdayTwo: createDate(2018,8,1,15,25) },
    {id: 10, weekday: createDate(2018,8,1,16,25), difference: new Date(2018,8,1,16,25), weekdayTwo: createDate(2018,8,1,16,55) },
    {id: 11, weekday: createDate(2018,8,1,17,25), difference: new Date(2018,8,1,17,25), weekdayTwo: createDate(2018,8,1,17,35) },
    {id: 12, weekday: createDate(2018,8,1,18,40), difference: new Date(2018,8,1,18,40), weekdayTwo: createDate(2018,8,1,18,50) },
    {id: 13, weekday: createDate(2018,8,1,19,10), difference: new Date(2018,8,1,19,10), weekdayTwo: createDate(2018,8,1,19,20) },
    {id: 14, weekday: createDate(2018,8,1,19,55), difference: new Date(2018,8,1,19,55), weekdayTwo: createDate(2018,8,1,20,25) },
    {id: 15, weekday: createDate(2018,8,1,20,55), difference: new Date(2018,8,1,20,55), weekdayTwo: createDate(2018,8,1,21,5) },
    {id: 16, weekday: createDate(2018,8,1,21,30), difference: new Date(2018,8,1,21,30), weekdayTwo: createDate(2018,8,1,21,40) },
    {id: 17, weekday: createDate(2018,8,1,22,10), difference: new Date(2018,8,1,22,10), weekdayTwo: createDate(2018,8,1,22,35) }
  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,15),
    createDateValue(2018,8,1,8,5),
    createDateValue(2018,8,1,8,35),
    createDateValue(2018,8,1,10,10),
    createDateValue(2018,8,1,11,15),
    createDateValue(2018,8,1,12,20),
    createDateValue(2018,8,1,13,30),
    createDateValue(2018,8,1,13,55),
    createDateValue(2018,8,1,15,15),
    createDateValue(2018,8,1,16,25),
    createDateValue(2018,8,1,17,25),
    createDateValue(2018,8,1,18,40),
    createDateValue(2018,8,1,19,10),
    createDateValue(2018,8,1,19,55),
    createDateValue(2018,8,1,20,55),
    createDateValue(2018,8,1,21,30),
    createDateValue(2018,8,1,22,10)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,15),
    createDate(2018,8,1,8,5),
    createDate(2018,8,1,8,35),
    createDate(2018,8,1,10,10),
    createDate(2018,8,1,11,15),
    createDate(2018,8,1,12,20),
    createDate(2018,8,1,13,30),
    createDate(2018,8,1,13,55),
    createDate(2018,8,1,15,15),
    createDate(2018,8,1,16,25),
    createDate(2018,8,1,17,25),
    createDate(2018,8,1,18,40),
    createDate(2018,8,1,19,10),
    createDate(2018,8,1,19,55),
    createDate(2018,8,1,20,55),
    createDate(2018,8,1,21,30),
    createDate(2018,8,1,22,10)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
