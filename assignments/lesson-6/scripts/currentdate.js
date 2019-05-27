var d = new Date();
//document.getElementById("footerbar").innerHTML = d.toDateString('en-US', {
  //weekday: 'long',
  //month: 'long'})
  //document.getElementById("footerbar").innerHTML = d.toDateString();
 var d = new Date();
  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
  }
  var lett = d.getDate();
  var year = d.getFullYear();
  var month;
  switch(new Date().getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case  6:
        month = "July";
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
  }
  document.getElementById("footerbar").innerHTML = day + ', ' + lett + ' ' + month + ' ' + year; 