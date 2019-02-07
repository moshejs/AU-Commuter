import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from './Functions.js';
import {createDateValue} from './Functions.js';
import {DVDate} from './Functions.js';

export class NassauToAdelphi extends React.Component {

render() {

  //Name of Route
  let route = 'Nassau Blvd to Adelphi University';
  let departing = 'Nassau Boulevard';
  let arriving = 'Adelphi University';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,25), difference: new Date(2018,8,1,7,25), weekdayTwo: createDate(2018,8,1,7,30) },
    {id: 2, weekday: createDate(2018,8,1,7,45), difference: new Date(2018,8,1,7,45), weekdayTwo: createDate(2018,8,1,7,50) },
    {id: 3, weekday: createDate(2018,8,1,8,30), difference: new Date(2018,8,1,8,30), weekdayTwo: createDate(2018,8,1,8,35) },
    {id: 4, weekday: createDate(2018,8,1,9,5), difference: new Date(2018,8,1,9,5), weekdayTwo: createDate(2018,8,1,9,10) },
    {id: 5, weekday: createDate(2018,8,1,9,50), difference: new Date(2018,8,1,9,50), weekdayTwo: createDate(2018,8,1,9,55) },
    {id: 6, weekday: createDate(2018,8,1,10,10), difference: new Date(2018,8,1,10,10), weekdayTwo: createDate(2018,8,1,10,15) },
    {id: 7, weekday: createDate(2018,8,1,10,50), difference: new Date(2018,8,1,10,50), weekdayTwo: createDate(2018,8,1,10,55) },
    {id: 8, weekday: createDate(2018,8,1,11,10), difference: new Date(2018,8,1,11,10), weekdayTwo: createDate(2018,8,1,11,15) },
    {id: 9, weekday: createDate(2018,8,1,11,50), difference: new Date(2018,8,1,11,50), weekdayTwo: createDate(2018,8,1,11,55) },
    {id: 10, weekday: createDate(2018,8,1,12,10), difference: new Date(2018,8,1,12,10), weekdayTwo: createDate(2018,8,1,12,15) },
    {id: 11, weekday: createDate(2018,8,1,12,50), difference: new Date(2018,8,1,12,50), weekdayTwo: createDate(2018,8,1,12,55) },
    {id: 12, weekday: createDate(2018,8,1,13,10), difference: new Date(2018,8,1,13,10), weekdayTwo: createDate(2018,8,1,13,15) },
    {id: 13, weekday: createDate(2018,8,1,13,50), difference: new Date(2018,8,1,13,50), weekdayTwo: createDate(2018,8,1,13,55) },
    {id: 14, weekday: createDate(2018,8,1,14,10), difference: new Date(2018,8,1,14,10), weekdayTwo: createDate(2018,8,1,14,15) },
    {id: 15, weekday: createDate(2018,8,1,14,50), difference: new Date(2018,8,1,14,50), weekdayTwo: createDate(2018,8,1,14,55) },
    {id: 16, weekday: createDate(2018,8,1,15,10), difference: new Date(2018,8,1,15,10), weekdayTwo: createDate(2018,8,1,15,15) },
    {id: 17, weekday: createDate(2018,8,1,15,50), difference: new Date(2018,8,1,15,50), weekdayTwo: createDate(2018,8,1,15,55) },
    {id: 18, weekday: createDate(2018,8,1,16,20), difference: new Date(2018,8,1,16,20), weekdayTwo: createDate(2018,8,1,16,25) },
    {id: 19, weekday: createDate(2018,8,1,17,15), difference: new Date(2018,8,1,17,15), weekdayTwo: createDate(2018,8,1,17,20) },
    {id: 20, weekday: createDate(2018,8,1,17,50), difference: new Date(2018,8,1,17,50), weekdayTwo: createDate(2018,8,1,17,55) },
    {id: 21, weekday: createDate(2018,8,1,18,25), difference: new Date(2018,8,1,18,25), weekdayTwo: createDate(2018,8,1,18,30) },
    {id: 22, weekday: createDate(2018,8,1,19,25), difference: new Date(2018,8,1,19,25), weekdayTwo: createDate(2018,8,1,19,30) },
    {id: 23, weekday: createDate(2018,8,1,20,20), difference: new Date(2018,8,1,20,20), weekdayTwo: createDate(2018,8,1,20,25) },
    {id: 24, weekday: createDate(2018,8,1,21,15), difference: new Date(2018,8,1,21,15), weekdayTwo: createDate(2018,8,1,21,20) },
    {id: 25, weekday: createDate(2018,8,1,22,30), difference: new Date(2018,8,1,22,30), weekdayTwo: createDate(2018,8,1,22,35) },

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,25),
    createDateValue(2018,8,1,7,45),
    createDateValue(2018,8,1,8,30),
    createDateValue(2018,8,1,9,5),
    createDateValue(2018,8,1,9,50),
    createDateValue(2018,8,1,10,10),
    createDateValue(2018,8,1,10,50),
    createDateValue(2018,8,1,11,10),
    createDateValue(2018,8,1,11,50),
    createDateValue(2018,8,1,12,10),
    createDateValue(2018,8,1,12,50),
    createDateValue(2018,8,1,13,10),
    createDateValue(2018,8,1,13,50),
    createDateValue(2018,8,1,14,10),
    createDateValue(2018,8,1,14,50),
    createDateValue(2018,8,1,15,10),
    createDateValue(2018,8,1,15,50),
    createDateValue(2018,8,1,16,20),
    createDateValue(2018,8,1,17,15),
    createDateValue(2018,8,1,17,50),
    createDateValue(2018,8,1,18,25),
    createDateValue(2018,8,1,19,25),
    createDateValue(2018,8,1,20,20),
    createDateValue(2018,8,1,21,15),
    createDateValue(2018,8,1,22,30)

  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,25),
    createDate(2018,8,1,7,45),
    createDate(2018,8,1,8,30),
    createDate(2018,8,1,9,5),
    createDate(2018,8,1,9,50),
    createDate(2018,8,1,10,10),
    createDate(2018,8,1,10,50),
    createDate(2018,8,1,11,10),
    createDate(2018,8,1,11,50),
    createDate(2018,8,1,12,10),
    createDate(2018,8,1,12,50),
    createDate(2018,8,1,13,10),
    createDate(2018,8,1,13,50),
    createDate(2018,8,1,14,10),
    createDate(2018,8,1,14,50),
    createDate(2018,8,1,15,10),
    createDate(2018,8,1,15,50),
    createDate(2018,8,1,16,20),
    createDate(2018,8,1,17,15),
    createDate(2018,8,1,17,50),
    createDate(2018,8,1,18,25),
    createDate(2018,8,1,19,25),
    createDate(2018,8,1,20,20),
    createDate(2018,8,1,21,15),
    createDate(2018,8,1,22,30)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
