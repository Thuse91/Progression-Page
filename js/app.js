

function timefrom(className) {
  let timeCollection = document.querySelectorAll(className);
  timeCollection.forEach(function(item) {
    let postDate = new Date(item.innerText).getTime();
    let d = new Date();
    let currDate = Date.parse(d);
    let diff = (currDate - postDate) / 1000;
    let mindiff = diff / 60;
    let hrdiff = diff / 60 / 60;
    let daydiff = diff / 60 / 60 / 24;
    let minago = parseInt(mindiff);
    let hrago = parseInt(hrdiff);
    let dayago = parseInt(daydiff);
    if (minago <= 59) {
      item.nextElementSibling.nextElementSibling.innerText = minago + " Minutes ago.";
    } else if (minago >= 60 && hrago <= 23) {
      item.nextElementSibling.nextElementSibling.innerText = hrago + " Hours ago.";
    } else if (dayago >= 1) {
      item.nextElementSibling.nextElementSibling.innerText = dayago + " Days ago.";
    }
  })
};

timefrom('.navpostdate');
timefrom('.postdate');
timefrom('.navpost-date');



function clock(){
  var h = new Date();
  var m = new Date();
  var s = new Date();
  
  let hr = h.getHours();
  let min = m.getMinutes();
  let sec = s.getSeconds();

  if (hr <= 9) 
  document.querySelector('.hours').innerHTML = "0" + hr + ":"
  else
  document.querySelector('.hours').innerHTML = hr + ":"

  if (min <= 9) 
  document.querySelector('.minutes').innerHTML = "0" + min + ":"
  else
  document.querySelector('.minutes').innerHTML = min + ":"


  if (sec <= 9) 
  document.querySelector('.seconds').innerHTML = "0" + sec
  else
  document.querySelector('.seconds').innerHTML = sec
}
  
window.setInterval(function(){
  clock();
}, 1000);

/*

 
Början till ett program som visar tid tills våran nästan lektion.

var d = new Date(); let day = d.getDay();
var h = new Date(); let hr = h.getHours();
var m = new Date(); let min = m.getMinutes();
var s = new Date(); let sec = s.getSeconds();
if (day === 1)
console.log(13 - hr + " Timmar till nästa lektion");
else if (day === 2)
console.log(24 - hr + 9 + " Timmar till nästa lektion"); 
else if (day === 3)
console.log(9 - hr + " Timmar till nästa lektion");
else if (day === 4)
console.log(9 - hr + " Timmar till nästa lektion");
else if (day === 5)
console.log(24-hr + 48 + 13 + " Timmar till nästa lektion");
else if (day === 6)  
console.log(24-hr + 24 + 13 + " Timmar till nästa lektion");
else if (day === 7)
console.log(24-hr + 13 + " Timmar till nästa lektion");


*/