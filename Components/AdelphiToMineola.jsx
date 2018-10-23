import React from 'react';

import { Shuttle } from './Shuttle.jsx';
import {createDate} from '../Functions.js';
import {createDateValue} from '../Functions.js';
import {diff_minutes} from '../Functions.js';



export class AdelphiToMineola extends React.Component {

render() {

  //Name of Route
  let route = 'Adelphi University to Mineola';
  let departing = 'Adelphi University';
  let arriving = 'Mineola'

  let data = [
    {id: 1, weekday: createDate(2018,8,1,7,15), difference: new Date(2018,8,1,7,15), weekdayTwo: createDate(2018,8,1,7,25) },
    {id: 2, weekday: createDate(2018,8,1,7,35), difference: new Date(2018,8,1,7,35), weekdayTwo: createDate(2018,8,1,7,45) },
    {id: 3, weekday: createDate(2018,8,1,7,55), difference: new Date(2018,8,1,7,55), weekdayTwo: createDate(2018,8,1,8,5) },
    {id: 4, weekday: createDate(2018,8,1,8,15), difference: new Date(2018,8,1,8,15), weekdayTwo: createDate(2018,8,1,8,30) },
    {id: 5, weekday: createDate(2018,8,1,8,35), difference: new Date(2018,8,1,8,35), weekdayTwo: createDate(2018,8,1,8,45) },
    {id: 6, weekday: createDate(2018,8,1,8,40), difference: new Date(2018,8,1,8,40), weekdayTwo: createDate(2018,8,1,8,50) },
    {id: 7, weekday: createDate(2018,8,1,8,55), difference: new Date(2018,8,1,8,55), weekdayTwo: createDate(2018,8,1,9,5) },
    {id: 8, weekday: createDate(2018,8,1,9,15), difference: new Date(2018,8,1,9,15), weekdayTwo: createDate(2018,8,1,9,25) },
    {id: 9, weekday: createDate(2018,8,1,9,35), difference: new Date(2018,8,1,9,35), weekdayTwo: createDate(2018,8,1,9,50) },
    {id: 10, weekday: createDate(2018,8,1,9,55), difference: new Date(2018,8,1,9,55), weekdayTwo: createDate(2018,8,1,10,5) },
    {id: 11, weekday: createDate(2018,8,1,10,35), difference: new Date(2018,8,1,10,35), weekdayTwo: createDate(2018,8,1,10,45) },
    {id: 12, weekday: createDate(2018,8,1,11,15), difference: new Date(2018,8,1,11,15), weekdayTwo: createDate(2018,8,1,11,25) },
    {id: 13, weekday: createDate(2018,8,1,11,55), difference: new Date(2018,8,1,11,55), weekdayTwo: createDate(2018,8,1,12,10) },
    {id: 14, weekday: createDate(2018,8,1,12,35), difference: new Date(2018,8,1,12,35), weekdayTwo: createDate(2018,8,1,12,45) },
    {id: 15, weekday: createDate(2018,8,1,13,15), difference: new Date(2018,8,1,13,15), weekdayTwo: createDate(2018,8,1,13,25) },
    {id: 16, weekday: createDate(2018,8,1,13,55), difference: new Date(2018,8,1,13,55), weekdayTwo: createDate(2018,8,1,14,5) },
    {id: 17, weekday: createDate(2018,8,1,14,25), difference: new Date(2018,8,1,14,25), weekdayTwo: createDate(2018,8,1,14,35) },
    {id: 18, weekday: createDate(2018,8,1,15,5), difference: new Date(2018,8,1,15,5), weekdayTwo: createDate(2018,8,1,15,10) },
    {id: 19, weekday: createDate(2018,8,1,15,50), difference: new Date(2018,8,1,15,50), weekdayTwo: createDate(2018,8,1,16,0) },
    {id: 20, weekday: createDate(2018,8,1,16,35), difference: new Date(2018,8,1,16,35), weekdayTwo: createDate(2018,8,1,16,45) },
    {id: 21, weekday: createDate(2018,8,1,17,5), difference: new Date(2018,8,1,17,5), weekdayTwo: createDate(2018,8,1,17,15) },
    {id: 22, weekday: createDate(2018,8,1,17,20), difference: new Date(2018,8,1,17,20), weekdayTwo: createDate(2018,8,1,17,30) },
    {id: 23, weekday: createDate(2018,8,1,17,40), difference: new Date(2018,8,1,17,40), weekdayTwo: createDate(2018,8,1,17,50) },
    {id: 24, weekday: createDate(2018,8,1,18,5), difference: new Date(2018,8,1,18,5), weekdayTwo: createDate(2018,8,1,18,15) },
    {id: 25, weekday: createDate(2018,8,1,18,40), difference: new Date(2018,8,1,18,40), weekdayTwo: createDate(2018,8,1,18,50) },
    {id: 26, weekday: createDate(2018,8,1,19,30), difference: new Date(2018,8,1,19,30), weekdayTwo: createDate(2018,8,1,19,40) },
    {id: 27, weekday: createDate(2018,8,1,20,5), difference: new Date(2018,8,1,20,5), weekdayTwo: createDate(2018,8,1,20,15) },
    {id: 28, weekday: createDate(2018,8,1,20,45), difference: new Date(2018,8,1,20,45), weekdayTwo: createDate(2018,8,1,20,55) },
    {id: 29, weekday: createDate(2018,8,1,21,25), difference: new Date(2018,8,1,21,25), weekdayTwo: createDate(2018,8,1,21,35) },
    {id: 30, weekday: createDate(2018,8,1,22,10), difference: new Date(2018,8,1,22,10), weekdayTwo: createDate(2018,8,1,22,20) },

  ];



  //Departing
  let weekdayValues = [
    createDateValue(2018,8,1,7,15),
    createDateValue(2018,8,1,7,35),
    createDateValue(2018,8,1,7,55),
    createDateValue(2018,8,1,8,15),
    createDateValue(2018,8,1,8,35),
    createDateValue(2018,8,1,8,40),
    createDateValue(2018,8,1,8,55),
    createDateValue(2018,8,1,9,15),
    createDateValue(2018,8,1,9,35),
    createDateValue(2018,8,1,9,55),
    createDateValue(2018,8,1,10,35),
    createDateValue(2018,8,1,11,15),
    createDateValue(2018,8,1,11,55),
    createDateValue(2018,8,1,12,35),
    createDateValue(2018,8,1,13,15),
    createDateValue(2018,8,1,13,55),
    createDateValue(2018,8,1,14,25),
    createDateValue(2018,8,1,15,5),
    createDateValue(2018,8,1,15,50),
    createDateValue(2018,8,1,16,35),
    createDateValue(2018,8,1,17,5),
    createDateValue(2018,8,1,17,20),
    createDateValue(2018,8,1,17,40),
    createDateValue(2018,8,1,18,5),
    createDateValue(2018,8,1,18,40),
    createDateValue(2018,8,1,19,30),
    createDateValue(2018,8,1,20,5),
    createDateValue(2018,8,1,20,45),
    createDateValue(2018,8,1,21,25),
    createDateValue(2018,8,1,22,10)

  ];

  //Departing
  let weekday = [
    createDate(2018,8,1,7,15),
    createDate(2018,8,1,7,35),
    createDate(2018,8,1,7,55),
    createDate(2018,8,1,8,15),
    createDate(2018,8,1,8,35),
    createDate(2018,8,1,8,40),
    createDate(2018,8,1,8,55),
    createDate(2018,8,1,9,15),
    createDate(2018,8,1,9,35),
    createDate(2018,8,1,9,55),
    createDate(2018,8,1,10,35),
    createDate(2018,8,1,11,15),
    createDate(2018,8,1,11,55),
    createDate(2018,8,1,12,35),
    createDate(2018,8,1,13,15),
    createDate(2018,8,1,13,55),
    createDate(2018,8,1,14,25),
    createDate(2018,8,1,15,5),
    createDate(2018,8,1,15,50),
    createDate(2018,8,1,16,35),
    createDate(2018,8,1,17,5),
    createDate(2018,8,1,17,20),
    createDate(2018,8,1,17,40),
    createDate(2018,8,1,18,5),
    createDate(2018,8,1,18,40),
    createDate(2018,8,1,19,30),
    createDate(2018,8,1,20,5),
    createDate(2018,8,1,20,45),
    createDate(2018,8,1,21,25),
    createDate(2018,8,1,22,10)

  ];






  return (

    <div>
      <Shuttle departing={departing} arriving={arriving} route={route} weekdayValues = {weekdayValues} weekday = {weekday}  data = {data} />
    </div>
  );
}

}
