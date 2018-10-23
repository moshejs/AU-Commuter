import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {createDate} from '../Functions.js';
import {createDateValue} from '../Functions.js';
import {DVDate} from '../Functions.js';

export class xxx extends React.Component {

render() {

  //Name of Route
  let route = '';

  let data = [
    {id: 1, weekday: createDate(2018,8,1,bob1), difference: new Date(2018,8,1,bob1), weekdayTwo: createDate(2018,8,1,,) },
    {id: 2, weekday: createDate(2018,8,1,bob2), difference: new Date(2018,8,1,bob2), weekdayTwo: createDate(2018,8,1,,) },
    {id: 3, weekday: createDate(2018,8,1,bob3), difference: new Date(2018,8,1,bob3), weekdayTwo: createDate(2018,8,1,,) },
    {id: 4, weekday: createDate(2018,8,1,bob4), difference: new Date(2018,8,1,bob4), weekdayTwo: createDate(2018,8,1,,) },
    {id: 5, weekday: createDate(2018,8,1,bob5), difference: new Date(2018,8,1,bob5), weekdayTwo: createDate(2018,8,1,,) },
    {id: 6, weekday: createDate(2018,8,1,bob6), difference: new Date(2018,8,1,bob6), weekdayTwo: createDate(2018,8,1,,) },
    {id: 7, weekday: createDate(2018,8,1,bob7), difference: new Date(2018,8,1,bob7), weekdayTwo: createDate(2018,8,1,,) },
    {id: 8, weekday: createDate(2018,8,1,bob8), difference: new Date(2018,8,1,bob8), weekdayTwo: createDate(2018,8,1,,) },
    {id: 9, weekday: createDate(2018,8,1,bob9), difference: new Date(2018,8,1,bob9), weekdayTwo: createDate(2018,8,1,,) },
    {id: 10, weekday: createDate(2018,8,1,boba), difference: new Date(2018,8,1,boba), weekdayTwo: createDate(2018,8,1,,) },
    {id: 11, weekday: createDate(2018,8,1,bobb), difference: new Date(2018,8,1,bobb), weekdayTwo: createDate(2018,8,1,,) },
    {id: 12, weekday: createDate(2018,8,1,bobc), difference: new Date(2018,8,1,bobc), weekdayTwo: createDate(2018,8,1,,) },
    {id: 13, weekday: createDate(2018,8,1,bobd), difference: new Date(2018,8,1,bobd), weekdayTwo: createDate(2018,8,1,,) },
    {id: 14, weekday: createDate(2018,8,1,bobe), difference: new Date(2018,8,1,bobe), weekdayTwo: createDate(2018,8,1,,) },
    {id: 15, weekday: createDate(2018,8,1,bobf), difference: new Date(2018,8,1,bobf), weekdayTwo: createDate(2018,8,1,,) },
    {id: 16, weekday: createDate(2018,8,1,bobg), difference: new Date(2018,8,1,bobg), weekdayTwo: createDate(2018,8,1,,) },
    {id: 17, weekday: createDate(2018,8,1,bobh), difference: new Date(2018,8,1,bobh), weekdayTwo: createDate(2018,8,1,,) },
    {id: 18, weekday: createDate(2018,8,1,bobi), difference: new Date(2018,8,1,bobi), weekdayTwo: createDate(2018,8,1,,) },
    {id: 19, weekday: createDate(2018,8,1,bobj), difference: new Date(2018,8,1,bobj), weekdayTwo: createDate(2018,8,1,,) },
    {id: 20, weekday: createDate(2018,8,1,bobk), difference: new Date(2018,8,1,bobk), weekdayTwo: createDate(2018,8,1,,) },
    {id: 21, weekday: createDate(2018,8,1,bobl), difference: new Date(2018,8,1,bobl), weekdayTwo: createDate(2018,8,1,,) },
    {id: 22, weekday: createDate(2018,8,1,bobm), difference: new Date(2018,8,1,bobm), weekdayTwo: createDate(2018,8,1,,) },
    {id: 23, weekday: createDate(2018,8,1,bobn), difference: new Date(2018,8,1,bobn), weekdayTwo: createDate(2018,8,1,,) },
    {id: 24, weekday: createDate(2018,8,1,bobo), difference: new Date(2018,8,1,bobo), weekdayTwo: createDate(2018,8,1,,) },
    {id: 25, weekday: createDate(2018,8,1,bobp), difference: new Date(2018,8,1,bob), weekdayTwo: createDate(2018,8,1,,) },
    {id: 26, weekday: createDate(2018,8,1,bobq), difference: new Date(2018,8,1,bobq), weekdayTwo: createDate(2018,8,1,,) },
    {id: 27, weekday: createDate(2018,8,1,bobr), difference: new Date(2018,8,1,bobr), weekdayTwo: createDate(2018,8,1,,) },
    {id: 28, weekday: createDate(2018,8,1,bobs), difference: new Date(2018,8,1,bobs), weekdayTwo: createDate(2018,8,1,,) },
    {id: 29, weekday: createDate(2018,8,1,bobt), difference: new Date(2018,8,1,bobt), weekdayTwo: createDate(2018,8,1,,) },
    {id: 30, weekday: createDate(2018,8,1,bobu), difference: new Date(2018,8,1,bobu), weekdayTwo: createDate(2018,8,1,,) },

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,bob1),
    createDateValue(2018,8,1,bob2),
    createDateValue(2018,8,1,bob3),
    createDateValue(2018,8,1,bob4),
    createDateValue(2018,8,1,bob5),
    createDateValue(2018,8,1,bob6),
    createDateValue(2018,8,1,bob7),
    createDateValue(2018,8,1,bob8),
    createDateValue(2018,8,1,bob9),
    createDateValue(2018,8,1,boba),
    createDateValue(2018,8,1,bobb),
    createDateValue(2018,8,1,bobc),
    createDateValue(2018,8,1,bobd),
    createDateValue(2018,8,1,bobe),
    createDateValue(2018,8,1,bobf),
    createDateValue(2018,8,1,bobg),
    createDateValue(2018,8,1,bobh),
    createDateValue(2018,8,1,bobi),
    createDateValue(2018,8,1,bobj),
    createDateValue(2018,8,1,bobk),
    createDateValue(2018,8,1,bobl),
    createDateValue(2018,8,1,bobm),
    createDateValue(2018,8,1,bobn),
    createDateValue(2018,8,1,bobo),
    createDateValue(2018,8,1,bobp),
    createDateValue(2018,8,1,bobq),
    createDateValue(2018,8,1,bobr),
    createDateValue(2018,8,1,bobs),
    createDateValue(2018,8,1,bobt),
    createDateValue(2018,8,1,bobu)
  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,bob1),
    createDate(2018,8,1,bob2),
    createDate(2018,8,1,bob3),
    createDate(2018,8,1,bob4),
    createDate(2018,8,1,bob5),
    createDate(2018,8,1,bob6),
    createDate(2018,8,1,bob7),
    createDate(2018,8,1,bob8),
    createDate(2018,8,1,bob9),
    createDate(2018,8,1,boba),
    createDate(2018,8,1,bobb),
    createDate(2018,8,1,bobc),
    createDate(2018,8,1,bobd),
    createDate(2018,8,1,bobe),
    createDate(2018,8,1,bobf),
    createDate(2018,8,1,bobg),
    createDate(2018,8,1,bobh),
    createDate(2018,8,1,bobi),
    createDate(2018,8,1,bobj),
    createDate(2018,8,1,bobk),
    createDate(2018,8,1,bobl),
    createDate(2018,8,1,bobm),
    createDate(2018,8,1,bobn),
    createDate(2018,8,1,bobo),
    createDate(2018,8,1,bobp),
    createDate(2018,8,1,bobq),
    createDate(2018,8,1,bobr),
    createDate(2018,8,1,bobs),
    createDate(2018,8,1,bobt),
    createDate(2018,8,1,bobu)
  ];

  return (

    <div>
      <Shuttle route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
