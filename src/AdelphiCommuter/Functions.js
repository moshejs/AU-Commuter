
// Create Date value
export function createDateValue(year,month,day,hour,minute) {
  let a = new Date(year,month,day,hour,minute).getHours()+(new Date(year,month,day,hour,minute).getMinutes()/100);
  return a;
}

// Create Date value, given a date object
export function DVDate(hours,mins) {
  let h = hours * 60;
  let total = h + mins;
  return total;
}

// Create Date
export function createDate(year,month,day,hour,minute) {
  let a = new Date(year,month,day,hour,minute).getHours()+(new Date(year,month,day,hour,minute).getMinutes()/100);
  return timeString(a);
}

// Converts time values in to humanradeable time
export function timeString(value){

  var hour,minute,period;

  //ex 22.25
  if (value > 12) {
    hour = Math.floor(value)  - 12;
    minute = Math.round((value - Math.floor(value)) * 100);
    period = " PM";
}

// ex 7.25
if( value < 12 ){
    hour = Math.floor(value);
    minute = Math.round((value - Math.floor(value)) * 100);
    period = " AM";
}

// ex 12.25
if (value > 12 && value < 13)  {
    hour = 12;
    minute = Math.round((value - Math.floor(value)) * 100);
    period = " PM";
  }

  // ex 7.5 should be 7:05
  if ( (value - Math.floor(value))*100 < 9){
    minute = '0' + Math.round((value - Math.floor(value)) * 100).toString()
  }

  return hour + ":" + minute + period;

}

export function ToMins(x){

  let minute,hour,total;

  // ex 12.95
  if (x > 1){

    hour = Math.floor(x);

    if ( ((x - hour)*100) < 60){
    minute = (x - hour)*100;
  }

    // ex 95
    if (minute > 60){
      hour = hour + 1;
      minute = minute - 60;
    }

  }

  if(x < 1){

    if ( (x*100) < 60 ){
      minute = (1 - x)*100;
    }
    if((x*100) > 60){
      hour = hour + 1;
      minute =  x - 60;
    }
  }

  total = (hour*60) + minute;
  return total;

}

export function removeDuplicates(arr){
 let unique_array = []
 for(let i = 0;i < arr.length; i++){
     if(unique_array.indexOf(arr[i]) == -1){
         unique_array.push(arr[i])
     }
 }
 return unique_array
}


export function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);

  if (rhours == 0){
  	return rminutes + ' mins';
  }
  return  rhours + " hr " + rminutes + " mins";

}
