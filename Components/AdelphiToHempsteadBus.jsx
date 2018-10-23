import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from '../Functions.js';
import {createDateValue} from '../Functions.js';
import {DVDate} from '../Functions.js';

export class AdelphiToHempsteadBus extends React.Component {

render() {

  //Name of Route
  let route = 'Adelphi University to Hempstead Bus Terminal';
  let departing = 'Adelphi University';
  let arriving = 'Hempstead Bus Terminal';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,5), difference: new Date(2018,8,1,7,5), weekdayTwo: createDate(2018,8,1,7,15) },
    {id: 2, weekday: createDate(2018,8,1,7,55), difference: new Date(2018,8,1,7,55), weekdayTwo: createDate(2018,8,1,8,5) },
    {id: 3, weekday: createDate(2018,8,1,8,25), difference: new Date(2018,8,1,8,25), weekdayTwo: createDate(2018,8,1,8,35) },
    {id: 4, weekday: createDate(2018,8,1,10,0), difference: new Date(2018,8,1,10,0), weekdayTwo: createDate(2018,8,1,10,10) },
    {id: 5, weekday: createDate(2018,8,1,10,50), difference: new Date(2018,8,1,10,50), weekdayTwo: createDate(2018,8,1,11,15) },
    {id: 6, weekday: createDate(2018,8,1,12,10), difference: new Date(2018,8,1,12,10), weekdayTwo: createDate(2018,8,1,12,20) },
    {id: 7, weekday: createDate(2018,8,1,13,20), difference: new Date(2018,8,1,13,20), weekdayTwo: createDate(2018,8,1,13,30) },
    {id: 8, weekday: createDate(2018,8,1,13,45), difference: new Date(2018,8,1,13,45), weekdayTwo: createDate(2018,8,1,13,55) },
    {id: 9, weekday: createDate(2018,8,1,15,5), difference: new Date(2018,8,1,15,5), weekdayTwo: createDate(2018,8,1,15,15) },
    {id: 10, weekday: createDate(2018,8,1,16,15), difference: new Date(2018,8,1,16,15), weekdayTwo: createDate(2018,8,1,16,25) },
    {id: 11, weekday: createDate(2018,8,1,17,15), difference: new Date(2018,8,1,17,15), weekdayTwo: createDate(2018,8,1,17,25) },
    {id: 12, weekday: createDate(2018,8,1,18,30), difference: new Date(2018,8,1,18,30), weekdayTwo: createDate(2018,8,1,18,40) },
    {id: 13, weekday: createDate(2018,8,1,19,0), difference: new Date(2018,8,1,19,0), weekdayTwo: createDate(2018,8,1,19,10) },
    {id: 14, weekday: createDate(2018,8,1,19,45), difference: new Date(2018,8,1,19,45), weekdayTwo: createDate(2018,8,1,19,55) },
    {id: 15, weekday: createDate(2018,8,1,20,45), difference: new Date(2018,8,1,20,45), weekdayTwo: createDate(2018,8,1,20,55) },
    {id: 16, weekday: createDate(2018,8,1,21,20), difference: new Date(2018,8,1,21,20), weekdayTwo: createDate(2018,8,1,21,30) },
    {id: 17, weekday: createDate(2018,8,1,22,0), difference: new Date(2018,8,1,22,0), weekdayTwo: createDate(2018,8,1,22,10) },

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,5),
    createDateValue(2018,8,1,7,55),
    createDateValue(2018,8,1,8,25),
    createDateValue(2018,8,1,10,0),
    createDateValue(2018,8,1,10,50),
    createDateValue(2018,8,1,12,10),
    createDateValue(2018,8,1,13,20),
    createDateValue(2018,8,1,13,45),
    createDateValue(2018,8,1,15,5),
    createDateValue(2018,8,1,16,15),
    createDateValue(2018,8,1,17,15),
    createDateValue(2018,8,1,18,30),
    createDateValue(2018,8,1,19,0),
    createDateValue(2018,8,1,19,45),
    createDateValue(2018,8,1,20,45),
    createDateValue(2018,8,1,21,20),
    createDateValue(2018,8,1,22,0)

  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,5),
    createDate(2018,8,1,7,55),
    createDate(2018,8,1,8,25),
    createDate(2018,8,1,10,0),
    createDate(2018,8,1,10,50),
    createDate(2018,8,1,12,10),
    createDate(2018,8,1,13,20),
    createDate(2018,8,1,13,45),
    createDate(2018,8,1,15,5),
    createDate(2018,8,1,16,15),
    createDate(2018,8,1,17,15),
    createDate(2018,8,1,18,30),
    createDate(2018,8,1,19,0),
    createDate(2018,8,1,19,45),
    createDate(2018,8,1,20,45),
    createDate(2018,8,1,21,20),
    createDate(2018,8,1,22,0)



  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
