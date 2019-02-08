import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from './Functions.js';
import {createDateValue} from './Functions.js';
import {DVDate} from './Functions.js';

export class StopShopToAdelphi extends React.Component {

render() {

  //Name of Route
  let route = 'Stop & Shop To Adelphi University';
  let departing = 'Stop & Shop';
  let arriving = 'Adelphi University';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,40), difference: new Date(2018,8,1,7,40), weekdayTwo: createDate(2018,8,1,7,55) },
    {id: 2, weekday: createDate(2018,8,1,8,50), difference: new Date(2018,8,1,8,50), weekdayTwo: createDate(2018,8,1,9,5) },
    {id: 3, weekday: createDate(2018,8,1,9,25), difference: new Date(2018,8,1,9,25), weekdayTwo: createDate(2018,8,1,9,40) },
    {id: 4, weekday: createDate(2018,8,1,10,40), difference: new Date(2018,8,1,10,40), weekdayTwo: createDate(2018,8,1,10,55) },
    {id: 5, weekday: createDate(2018,8,1,12,45), difference: new Date(2018,8,1,12,45), weekdayTwo: createDate(2018,8,1,13,0) },
    {id: 6, weekday: createDate(2018,8,1,13,15), difference: new Date(2018,8,1,13,15), weekdayTwo: createDate(2018,8,1,13,30) },
    {id: 7, weekday: createDate(2018,8,1,13,50), difference: new Date(2018,8,1,13,50), weekdayTwo: createDate(2018,8,1,14,5) },
    {id: 8, weekday: createDate(2018,8,1,15,40), difference: new Date(2018,8,1,15,40), weekdayTwo: createDate(2018,8,1,15,55) },
    {id: 9, weekday: createDate(2018,8,1,17,40), difference: new Date(2018,8,1,17,40), weekdayTwo: createDate(2018,8,1,17,55) },
    {id: 10, weekday: createDate(2018,8,1,19,45), difference: new Date(2018,8,1,19,45), weekdayTwo: createDate(2018,8,1,20,0) },
    {id: 11, weekday: createDate(2018,8,1,20,15), difference: new Date(2018,8,1,20,15), weekdayTwo: createDate(2018,8,1,20,30) },
    {id: 12, weekday: createDate(2018,8,1,20,45), difference: new Date(2018,8,1,20,45), weekdayTwo: createDate(2018,8,1,21,0) },
    {id: 13, weekday: createDate(2018,8,1,22,10), difference: new Date(2018,8,1,22,10), weekdayTwo: createDate(2018,8,1,22,20) }

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,40),
    createDateValue(2018,8,1,8,50),
    createDateValue(2018,8,1,9,25),
    createDateValue(2018,8,1,10,40),
    createDateValue(2018,8,1,12,45),
    createDateValue(2018,8,1,13,15),
    createDateValue(2018,8,1,13,50),
    createDateValue(2018,8,1,15,40),
    createDateValue(2018,8,1,17,40),
    createDateValue(2018,8,1,19,45),
    createDateValue(2018,8,1,20,15),
    createDateValue(2018,8,1,20,45),
    createDateValue(2018,8,1,22,10)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,40),
    createDate(2018,8,1,8,50),
    createDate(2018,8,1,9,25),
    createDate(2018,8,1,10,40),
    createDate(2018,8,1,12,45),
    createDate(2018,8,1,13,15),
    createDate(2018,8,1,13,50),
    createDate(2018,8,1,15,40),
    createDate(2018,8,1,17,40),
    createDate(2018,8,1,19,45),
    createDate(2018,8,1,20,15),
    createDate(2018,8,1,20,45),
    createDate(2018,8,1,22,10)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
