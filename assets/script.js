// global variables
var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector("#container");
var timeblockEl = document.querySelector("#time");

// current day, month date
currentDayEl.innerHTML=moment().format("dddd, MMMM Do");

//  time blocks 9-5
var createTimeblock = function () {
}
//  //  color-coded time-based loop
    for (var i = 0; i < timeblockEl.length; i++){

        timeblockEl.attr("data-number", i)
        timeblockEl.text(timeblockEl[i].hour)
    }
  
//  //  text input item






//  //  item save button




