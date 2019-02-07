import React from 'react';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import {DVDate} from './Functions.js';
import {timeString} from './Functions.js';
import {ToMins} from './Functions.js';
import {timeConvert} from './Functions.js'

import './index.css';



export class Shuttle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      value: new Date().getHours()+(new Date().getMinutes()/100),
      i: 0,
      message: '',
      countdown: [],
      difference: 0
    };

  }



  // Updates the date property to the current date and time
  tick() {
  this.setState({
    time: new Date(),
    value: new Date().getHours()+(new Date().getMinutes()/100),
   });

   // Check when the next shuttle is coming
   this.nextShuttle();


  }

  //Runs after the component is added to the DOM
  componentDidMount(){
    // Calls the tick() every second
    this.timerID = setInterval(
      () => this.tick(),
      //
      10
    );




  }

  componentWillUnmount(){

  }

  //Displays the remaning shuttles left
  nextShuttle(){

     // Checks to what shuttles have already left
     if (this.state.value > this.props.weekdayValues[this.state.i]) {
       //console.log(this.state.i);
       console.log("Latest shuttle has left, shift array, update UI");
       this.setState({
           i: this.state.i + 1
         });
     }

     // Checks for the next shuttle
       if (this.state.value < this.props.weekdayValues[this.state.i]) {
       console.log("Go Catch the next shuttle at " + timeString(this.props.weekdayValues[this.state.i]) + ',  it is at index ' + this.state.i);
       console.log(this.props.arriving)
     }

      // Flashes the shuttle time that is leaving that minute
      if (this.state.value == this.props.weekdayValues[this.state.i]){
       console.log("Shuttle is leaving now");
       //console.log(this.state.i);
     }

     // Shows there are no more shuttles for the day
      if (this.props.data.length == this.state.i){
       console.log("There are no more shuttles for the day.");
       this.setState({
         message: 'There are no more shuttles for the day.'
       });
     }
  } // End of Function

  render(){

    let content = this.props.data.slice(this.state.i).map((post) =>

        <div className='itemDiv' key={post.id}>

        <p className='time'>{post.weekday} - {post.weekdayTwo}</p>

        <p className='dname'>{this.props.departing}</p>

        <p className='aname'>{this.props.arriving}</p>

        <strong><p className='Countdown'>{timeConvert( Math.round( DVDate(post.difference.getHours(),post.difference.getMinutes()) - DVDate(this.state.time.getHours(),this.state.time.getMinutes()) ) )} </p></strong>

        </div>
    );


    return(
      <div>
              <div className='contentDiv'>{content}</div>

              <div className='InvalidSearchDiv'>
                  <p className='InvalidSearchText'>{this.state.message}</p>
              </div>
      </div>
    );
  }
}
