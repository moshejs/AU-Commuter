import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from './Functions.js';
import {createDateValue} from './Functions.js';
import {DVDate} from './Functions.js';

export class AdelphiToNassau extends React.Component {

render() {

  //Name of Route
  let route = 'Adelphi University to Nassau Boulevard';
  let departing = 'Adelphi University';
  let arriving = 'Nassau Boulevard';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,10), difference: new Date(2018,8,1,7,10), weekdayTwo: createDate(2018,8,1,7,15) },
    {id: 2, weekday: createDate(2018,8,1,7,30), difference: new Date(2018,8,1,7,30), weekdayTwo: createDate(2018,8,1,7,35) },
    {id: 3, weekday: createDate(2018,8,1,8,15), difference: new Date(2018,8,1,8,15), weekdayTwo: createDate(2018,8,1,8,20) },
    {id: 4, weekday: createDate(2018,8,1,9,0), difference: new Date(2018,8,1,9,0), weekdayTwo: createDate(2018,8,1,9,5)   },
    {id: 5, weekday: createDate(2018,8,1,9,35), difference: new Date(2018,8,1,9,35), weekdayTwo: createDate(2018,8,1,9,40) },
    {id: 7, weekday: createDate(2018,8,1,10,35), difference: new Date(2018,8,1,10,35), weekdayTwo: createDate(2018,8,1,10,40) },
    {id: 8, weekday: createDate(2018,8,1,11,5), difference: new Date(2018,8,1,11,5), weekdayTwo: createDate(2018,8,1,11,10) },
    {id: 9, weekday: createDate(2018,8,1,11,35), difference: new Date(2018,8,1,11,35), weekdayTwo: createDate(2018,8,1,11,40) },
    {id: 10, weekday: createDate(2018,8,1,12,5), difference: new Date(2018,8,1,12,5), weekdayTwo: createDate(2018,8,1,12,10) },
    {id: 11, weekday: createDate(2018,8,1,12,35), difference: new Date(2018,8,1,12,35), weekdayTwo: createDate(2018,8,1,12,40) },
    {id: 12, weekday: createDate(2018,8,1,13,5), difference: new Date(2018,8,1,13,5), weekdayTwo: createDate(2018,8,1,13,10) },
    {id: 13, weekday: createDate(2018,8,1,13,35), difference: new Date(2018,8,1,13,35), weekdayTwo: createDate(2018,8,1,13,40) },
    {id: 14, weekday: createDate(2018,8,1,14,5), difference: new Date(2018,8,1,14,5), weekdayTwo: createDate(2018,8,1,14,10) },
    {id: 15, weekday: createDate(2018,8,1,14,40), difference: new Date(2018,8,1,14,40), weekdayTwo: createDate(2018,8,1,14,45) },
    {id: 16, weekday: createDate(2018,8,1,15,5), difference: new Date(2018,8,1,15,5), weekdayTwo: createDate(2018,8,1,15,10) },
    {id: 17, weekday: createDate(2018,8,1,15,35), difference: new Date(2018,8,1,15,35), weekdayTwo: createDate(2018,8,1,15,40) },
    {id: 18, weekday: createDate(2018,8,1,16,0), difference: new Date(2018,8,1,16,0), weekdayTwo: createDate(2018,8,1,16,5) },
    {id: 19, weekday: createDate(2018,8,1,16,50), difference: new Date(2018,8,1,16,50), weekdayTwo: createDate(2018,8,1,16,55) },
    {id: 20, weekday: createDate(2018,8,1,17,35), difference: new Date(2018,8,1,17,35), weekdayTwo: createDate(2018,8,1,17,40) },
    {id: 21, weekday: createDate(2018,8,1,18,15), difference: new Date(2018,8,1,18,15), weekdayTwo: createDate(2018,8,1,18,30) },
    {id: 22, weekday: createDate(2018,8,1,19,5), difference: new Date(2018,8,1,19,5), weekdayTwo: createDate(2018,8,1,19,10) },
    {id: 23, weekday: createDate(2018,8,1,19,55), difference: new Date(2018,8,1,19,55), weekdayTwo: createDate(2018,8,1,20,0) },
    {id: 24, weekday: createDate(2018,8,1,20,55), difference: new Date(2018,8,1,20,55), weekdayTwo: createDate(2018,8,1,21,0) },
    {id: 25, weekday: createDate(2018,8,1,21,55), difference: new Date(2018,8,1,21,55), weekdayTwo: createDate(2018,8,1,22,0) }
  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,10),
    createDateValue(2018,8,1,7,30),
    createDateValue(2018,8,1,8,15),
    createDateValue(2018,8,1,9,0),
    createDateValue(2018,8,1,9,35),
    createDateValue(2018,8,1,10,35),
    createDateValue(2018,8,1,11,5),
    createDateValue(2018,8,1,11,35),
    createDateValue(2018,8,1,12,5),
    createDateValue(2018,8,1,12,35),
    createDateValue(2018,8,1,13,5),
    createDateValue(2018,8,1,13,35),
    createDateValue(2018,8,1,14,5),
    createDateValue(2018,8,1,14,40),
    createDateValue(2018,8,1,15,5),
    createDateValue(2018,8,1,15,35),
    createDateValue(2018,8,1,16,0),
    createDateValue(2018,8,1,16,50),
    createDateValue(2018,8,1,17,35),
    createDateValue(2018,8,1,18,15),
    createDateValue(2018,8,1,19,5),
    createDateValue(2018,8,1,19,55),
    createDateValue(2018,8,1,20,55),
    createDateValue(2018,8,1,21,55)



  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,10),
    createDate(2018,8,1,7,30),
    createDate(2018,8,1,8,15),
    createDate(2018,8,1,9,0),
    createDate(2018,8,1,9,35),
    createDate(2018,8,1,10,35),
    createDate(2018,8,1,11,5),
    createDate(2018,8,1,11,35),
    createDate(2018,8,1,12,5),
    createDate(2018,8,1,12,35),
    createDate(2018,8,1,13,5),
    createDate(2018,8,1,13,35),
    createDate(2018,8,1,14,5),
    createDate(2018,8,1,14,40),
    createDate(2018,8,1,15,5),
    createDate(2018,8,1,15,35),
    createDate(2018,8,1,16,0),
    createDate(2018,8,1,16,50),
    createDate(2018,8,1,17,35),
    createDate(2018,8,1,18,15),
    createDate(2018,8,1,19,5),
    createDate(2018,8,1,19,55),
    createDate(2018,8,1,20,55),
    createDate(2018,8,1,21,55)

  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route = {route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
