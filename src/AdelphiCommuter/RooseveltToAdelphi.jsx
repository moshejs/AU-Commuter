import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from './Functions.js';
import {createDateValue} from './Functions.js';
import {DVDate} from './Functions.js';

export class RooseveltToAdelphi extends React.Component {

render() {

  //Name of Route
  let route = 'Roosevelt Field To Adelphi University';
  let departing = 'Roosevelt Field';
  let arriving = 'Adelphi University';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,9,10), difference: new Date(2018,8,1,9,10), weekdayTwo: createDate(2018,8,1,9,30) },
    {id: 2, weekday: createDate(2018,8,1,11,5), difference: new Date(2018,8,1,11,5), weekdayTwo: createDate(2018,8,1,11,25) },
    {id: 3, weekday: createDate(2018,8,1,12,50), difference: new Date(2018,8,1,12,50), weekdayTwo: createDate(2018,8,1,13,10) },
    {id: 4, weekday: createDate(2018,8,1,14,30), difference: new Date(2018,8,1,14,30), weekdayTwo: createDate(2018,8,1,14,50) },
    {id: 5, weekday: createDate(2018,8,1,16,35), difference: new Date(2018,8,1,16,35), weekdayTwo: createDate(2018,8,1,16,55) },
    {id: 6, weekday: createDate(2018,8,1,18,0), difference: new Date(2018,8,1,18,0), weekdayTwo: createDate(2018,8,1,18,20) },
    {id: 7, weekday: createDate(2018,8,1,20,5), difference: new Date(2018,8,1,20,5), weekdayTwo: createDate(2018,8,1,20,25) },
    {id: 8, weekday: createDate(2018,8,1,22,20), difference: new Date(2018,8,1,22,20), weekdayTwo: createDate(2018,8,1,22,35) },

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,9,10),
    createDateValue(2018,8,1,11,5),
    createDateValue(2018,8,1,12,50),
    createDateValue(2018,8,1,14,30),
    createDateValue(2018,8,1,16,35),
    createDateValue(2018,8,1,18,0),
    createDateValue(2018,8,1,20,5),
    createDateValue(2018,8,1,22,20)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,9,10),
    createDate(2018,8,1,11,5),
    createDate(2018,8,1,12,50),
    createDate(2018,8,1,14,30),
    createDate(2018,8,1,16,35),
    createDate(2018,8,1,18,0),
    createDate(2018,8,1,20,5),
    createDate(2018,8,1,22,20)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
