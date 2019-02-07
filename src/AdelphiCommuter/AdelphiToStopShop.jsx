import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from './Functions.js';
import {createDateValue} from './Functions.js';
import {DVDate} from './Functions.js';

export class AdelphiToStopShop extends React.Component {

render() {

  //Name of Route
  let route = 'Adelphi University to Stop & Shop';
  let departing = 'Adelphi University';
  let arriving = 'Stop & Shop';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,35), difference: new Date(2018,8,1,7,35), weekdayTwo: createDate(2018,8,1,7,40) },
    {id: 2, weekday: createDate(2018,8,1,8,45), difference: new Date(2018,8,1,8,45), weekdayTwo: createDate(2018,8,1,8,50) },
    {id: 3, weekday: createDate(2018,8,1,9,20), difference: new Date(2018,8,1,9,20), weekdayTwo: createDate(2018,8,1,9,25) },
    {id: 4, weekday: createDate(2018,8,1,10,35), difference: new Date(2018,8,1,10,35), weekdayTwo: createDate(2018,8,1,10,40) },
    {id: 5, weekday: createDate(2018,8,1,12,40), difference: new Date(2018,8,1,12,40), weekdayTwo: createDate(2018,8,1,12,45) },
    {id: 6, weekday: createDate(2018,8,1,13,10), difference: new Date(2018,8,1,13,10), weekdayTwo: createDate(2018,8,1,13,15) },
    {id: 7, weekday: createDate(2018,8,1,13,45), difference: new Date(2018,8,1,13,45), weekdayTwo: createDate(2018,8,1,13,50) },
    {id: 8, weekday: createDate(2018,8,1,15,35), difference: new Date(2018,8,1,15,35), weekdayTwo: createDate(2018,8,1,15,40) },
    {id: 9, weekday: createDate(2018,8,1,17,30), difference: new Date(2018,8,1,17,30), weekdayTwo: createDate(2018,8,1,17,40) },
    {id: 10, weekday: createDate(2018,8,1,19,40), difference: new Date(2018,8,1,19,40), weekdayTwo: createDate(2018,8,1,19,45) },
    {id: 11, weekday: createDate(2018,8,1,20,10), difference: new Date(2018,8,1,20,10), weekdayTwo: createDate(2018,8,1,20,15) },
    {id: 12, weekday: createDate(2018,8,1,20,35), difference: new Date(2018,8,1,20,35), weekdayTwo: createDate(2018,8,1,20,45) },
    {id: 13, weekday: createDate(2018,8,1,22,5), difference: new Date(2018,8,1,22,5), weekdayTwo: createDate(2018,8,1,22,10) }
  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,35),
    createDateValue(2018,8,1,8,45),
    createDateValue(2018,8,1,9,20),
    createDateValue(2018,8,1,10,35),
    createDateValue(2018,8,1,12,40),
    createDateValue(2018,8,1,13,10),
    createDateValue(2018,8,1,13,45),
    createDateValue(2018,8,1,15,35),
    createDateValue(2018,8,1,17,30),
    createDateValue(2018,8,1,19,40),
    createDateValue(2018,8,1,20,10),
    createDateValue(2018,8,1,20,35),
    createDateValue(2018,8,1,22,5)

  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,35),
    createDate(2018,8,1,8,45),
    createDate(2018,8,1,9,20),
    createDate(2018,8,1,10,35),
    createDate(2018,8,1,12,40),
    createDate(2018,8,1,13,10),
    createDate(2018,8,1,13,45),
    createDate(2018,8,1,15,35),
    createDate(2018,8,1,17,30),
    createDate(2018,8,1,19,40),
    createDate(2018,8,1,20,10),
    createDate(2018,8,1,20,35),
    createDate(2018,8,1,22,5)


  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
