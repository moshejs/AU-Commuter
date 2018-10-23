import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from '../Functions.js';
import {createDateValue} from '../Functions.js';
import {DVDate} from '../Functions.js';

export class SeventhToAdelphi extends React.Component {

render() {

  //Name of Route
  let route = '7th Street Hilton Ave to Adelphi Universtiy';
  let departing = '7th Street Hilton Ave';
  let arriving = 'Adelphi University';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,11,15), difference: new Date(2018,8,1,11,15), weekdayTwo: createDate(2018,8,1,11,25) },
    {id: 2, weekday: createDate(2018,8,1,11,45), difference: new Date(2018,8,1,11,45), weekdayTwo: createDate(2018,8,1,11,55) },
    {id: 3, weekday: createDate(2018,8,1,12,15), difference: new Date(2018,8,1,12,15), weekdayTwo: createDate(2018,8,1,12,25) },
    {id: 4, weekday: createDate(2018,8,1,12,50), difference: new Date(2018,8,1,12,50), weekdayTwo: createDate(2018,8,1,13,0) },
    {id: 5, weekday: createDate(2018,8,1,13,20), difference: new Date(2018,8,1,13,20), weekdayTwo: createDate(2018,8,1,13,30) },
    {id: 6, weekday: createDate(2018,8,1,17,25), difference: new Date(2018,8,1,17,25), weekdayTwo: createDate(2018,8,1,17,35) },
    {id: 7, weekday: createDate(2018,8,1,18,15), difference: new Date(2018,8,1,18,15), weekdayTwo: createDate(2018,8,1,18,25) },
    {id: 8, weekday: createDate(2018,8,1,18,45), difference: new Date(2018,8,1,18,45), weekdayTwo: createDate(2018,8,1,18,55) },
    {id: 9, weekday: createDate(2018,8,1,19,15), difference: new Date(2018,8,1,19,15), weekdayTwo: createDate(2018,8,1,19,25) }
  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,11,15),
    createDateValue(2018,8,1,11,45),
    createDateValue(2018,8,1,12,15),
    createDateValue(2018,8,1,12,50),
    createDateValue(2018,8,1,13,20),
    createDateValue(2018,8,1,17,25),
    createDateValue(2018,8,1,18,15),
    createDateValue(2018,8,1,18,45),
    createDateValue(2018,8,1,19,15)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,11,15),
    createDate(2018,8,1,11,45),
    createDate(2018,8,1,12,15),
    createDate(2018,8,1,12,50),
    createDate(2018,8,1,13,20),
    createDate(2018,8,1,17,25),
    createDate(2018,8,1,18,15),
    createDate(2018,8,1,18,45),
    createDate(2018,8,1,19,15)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
