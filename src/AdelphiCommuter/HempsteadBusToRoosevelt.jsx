import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from './Functions.js';
import {createDateValue} from './Functions.js';
import {DVDate} from './Functions.js';

export class HempsteadBusToRoosevelt extends React.Component {

render() {

  //Name of Route
  let route = 'Hempstead Bus Terminal to Roosevelt Field';
  let departing = 'Hempstead Bus';
  let arriving = 'Roosevelt Field';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,16,25), difference: new Date(2018,8,1,16,25), weekdayTwo: createDate(2018,8,1,16,35) },
    {id: 2, weekday: createDate(2018,8,1,19,55), difference: new Date(2018,8,1,19,55), weekdayTwo: createDate(2018,8,1,20,5) }
  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,16,25),
    createDateValue(2018,8,1,19,55)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,16,25),
    createDate(2018,8,1,19,55)
  ];

  return (

    <div>
      <Shuttle departing = {departing} arriving = {arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
