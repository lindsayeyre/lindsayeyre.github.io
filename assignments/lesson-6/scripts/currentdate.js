/*var d = new Date();
document.getElementById("footerbar").innerHTML = d.toDateString('en-US', {
  weekday: 'long',
  month: 'long'})*/
  var newDate = new Date();
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
  var datelett = A.getDate();
  document.getElementById("footerbar").innerHTML = day + datelett;