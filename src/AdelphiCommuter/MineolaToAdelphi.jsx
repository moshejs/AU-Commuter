import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from './Functions.js';
import {createDateValue} from './Functions.js';
import {DVDate} from './Functions.js';

export class MineolaToAdelphi extends React.Component {

render() {

  //Name of Route
  let route = 'Mineola To Adelphi University';
  let departing = 'Mineola';
  let arriving = 'Adelphi University';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,30), difference: new Date(2018,8,1,7,30), weekdayTwo: createDate(2018,8,1,7,45) },
    {id: 2, weekday: createDate(2018,8,1,7,50), difference: new Date(2018,8,1,7,50), weekdayTwo: createDate(2018,8,1,8,5) },
    {id: 3, weekday: createDate(2018,8,1,8,10), difference: new Date(2018,8,1,8,10), weekdayTwo: createDate(2018,8,1,8,25) },
    {id: 4, weekday: createDate(2018,8,1,8,35), difference: new Date(2018,8,1,8,35), weekdayTwo: createDate(2018,8,1,8,45) },
    {id: 5, weekday: createDate(2018,8,1,8,50), difference: new Date(2018,8,1,8,50), weekdayTwo: createDate(2018,8,1,9,5) },
    {id: 6, weekday: createDate(2018,8,1,8,55), difference: new Date(2018,8,1,8,55), weekdayTwo: createDate(2018,8,1,9,5) },
    {id: 7, weekday: createDate(2018,8,1,9,10), difference: new Date(2018,8,1,9,10), weekdayTwo: createDate(2018,8,1,9,25) },
    {id: 8, weekday: createDate(2018,8,1,9,30), difference: new Date(2018,8,1,9,30), weekdayTwo: createDate(2018,8,1,9,45) },
    {id: 9, weekday: createDate(2018,8,1,9,50), difference: new Date(2018,8,1,9,50), weekdayTwo: createDate(2018,8,1,10,5) },
    {id: 10, weekday: createDate(2018,8,1,10,15), difference: new Date(2018,8,1,10,15), weekdayTwo: createDate(2018,8,1,10,25) },
    {id: 11, weekday: createDate(2018,8,1,10,50), difference: new Date(2018,8,1,10,50), weekdayTwo: createDate(2018,8,1,11,5) },
    {id: 12, weekday: createDate(2018,8,1,11,30), difference: new Date(2018,8,1,11,30), weekdayTwo: createDate(2018,8,1,11,45) },
    {id: 13, weekday: createDate(2018,8,1,12,10), difference: new Date(2018,8,1,12,10), weekdayTwo: createDate(2018,8,1,12,25) },
    {id: 14, weekday: createDate(2018,8,1,12,50), difference: new Date(2018,8,1,12,50), weekdayTwo: createDate(2018,8,1,13,5) },
    {id: 15, weekday: createDate(2018,8,1,13,30), difference: new Date(2018,8,1,13,30), weekdayTwo: createDate(2018,8,1,13,45) },
    {id: 16, weekday: createDate(2018,8,1,14,10), difference: new Date(2018,8,1,14,10), weekdayTwo: createDate(2018,8,1,14,20) },
    {id: 17, weekday: createDate(2018,8,1,14,35), difference: new Date(2018,8,1,14,35), weekdayTwo: createDate(2018,8,1,14,50) },
    {id: 18, weekday: createDate(2018,8,1,15,15), difference: new Date(2018,8,1,15,15), weekdayTwo: createDate(2018,8,1,15,25) },
    {id: 19, weekday: createDate(2018,8,1,16,10), difference: new Date(2018,8,1,16,10), weekdayTwo: createDate(2018,8,1,16,25) },
    {id: 20, weekday: createDate(2018,8,1,16,45), difference: new Date(2018,8,1,16,45), weekdayTwo: createDate(2018,8,1,16,55) },
    {id: 21, weekday: createDate(2018,8,1,17,15), difference: new Date(2018,8,1,17,15), weekdayTwo: createDate(2018,8,1,17,25) },
    {id: 22, weekday: createDate(2018,8,1,17,40), difference: new Date(2018,8,1,17,40), weekdayTwo: createDate(2018,8,1,17,50) },
    {id: 23, weekday: createDate(2018,8,1,17,50), difference: new Date(2018,8,1,17,50), weekdayTwo: createDate(2018,8,1,18,0) },
    {id: 24, weekday: createDate(2018,8,1,18,15), difference: new Date(2018,8,1,18,15), weekdayTwo: createDate(2018,8,1,18,30) },
    {id: 25, weekday: createDate(2018,8,1,18,50), difference: new Date(2018,8,1,18,50), weekdayTwo: createDate(2018,8,1,19,5) },
    {id: 26, weekday: createDate(2018,8,1,19,40), difference: new Date(2018,8,1,19,40), weekdayTwo: createDate(2018,8,1,19,50) },
    {id: 27, weekday: createDate(2018,8,1,20,15), difference: new Date(2018,8,1,20,15), weekdayTwo: createDate(2018,8,1,20,30) },
    {id: 28, weekday: createDate(2018,8,1,20,55), difference: new Date(2018,8,1,20,55), weekdayTwo: createDate(2018,8,1,21,10) },
    {id: 29, weekday: createDate(2018,8,1,21,40), difference: new Date(2018,8,1,21,40), weekdayTwo: createDate(2018,8,1,21,50) },
    {id: 30, weekday: createDate(2018,8,1,22,20), difference: new Date(2018,8,1,22,20), weekdayTwo: createDate(2018,8,1,22,35) }

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,30),
    createDateValue(2018,8,1,7,50),
    createDateValue(2018,8,1,8,10),
    createDateValue(2018,8,1,8,35),
    createDateValue(2018,8,1,8,50),
    createDateValue(2018,8,1,8,55),
    createDateValue(2018,8,1,9,10),
    createDateValue(2018,8,1,9,30),
    createDateValue(2018,8,1,9,50),
    createDateValue(2018,8,1,10,15),
    createDateValue(2018,8,1,10,50),
    createDateValue(2018,8,1,11,30),
    createDateValue(2018,8,1,12,10),
    createDateValue(2018,8,1,12,50),
    createDateValue(2018,8,1,13,30),
    createDateValue(2018,8,1,14,10),
    createDateValue(2018,8,1,14,35),
    createDateValue(2018,8,1,15,15),
    createDateValue(2018,8,1,16,10),
    createDateValue(2018,8,1,16,45),
    createDateValue(2018,8,1,17,15),
    createDateValue(2018,8,1,17,40),
    createDateValue(2018,8,1,17,50),
    createDateValue(2018,8,1,18,15),
    createDateValue(2018,8,1,18,50),
    createDateValue(2018,8,1,19,40),
    createDateValue(2018,8,1,20,15),
    createDateValue(2018,8,1,20,55),
    createDateValue(2018,8,1,21,40),
    createDateValue(2018,8,1,22,20)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,30),
    createDate(2018,8,1,7,50),
    createDate(2018,8,1,8,10),
    createDate(2018,8,1,8,35),
    createDate(2018,8,1,8,50),
    createDate(2018,8,1,8,55),
    createDate(2018,8,1,9,10),
    createDate(2018,8,1,9,30),
    createDate(2018,8,1,9,50),
    createDate(2018,8,1,10,15),
    createDate(2018,8,1,10,50),
    createDate(2018,8,1,11,30),
    createDate(2018,8,1,12,10),
    createDate(2018,8,1,12,50),
    createDate(2018,8,1,13,30),
    createDate(2018,8,1,14,10),
    createDate(2018,8,1,14,35),
    createDate(2018,8,1,15,15),
    createDate(2018,8,1,16,10),
    createDate(2018,8,1,16,45),
    createDate(2018,8,1,17,15),
    createDate(2018,8,1,17,40),
    createDate(2018,8,1,17,50),
    createDate(2018,8,1,18,15),
    createDate(2018,8,1,18,50),
    createDate(2018,8,1,19,40),
    createDate(2018,8,1,20,15),
    createDate(2018,8,1,20,55),
    createDate(2018,8,1,21,40),
    createDate(2018,8,1,22,20)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
