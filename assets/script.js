// global variables
var currentDayEl = document.querySelector("#currentDay");
var containerEl = document.querySelector(".container");
/* var timeblockEl = document.querySelector("#time");
var hourEl = document.querySelector("#hour col-2")
var taskEl = document.querySelector("#form-control form-control-lg");
 var saveBtn = document.querySelector("#btn saveBtn col-2") */
var now = moment();  

// current day, month date
currentDayEl.innerHTML=moment().format("dddd, MMMM Do");

//  time blocks 9-5
var createTimeblock = function () {
}


// determine if time is in the past present or future
function isPastPresentOrFuture(time) {
  const now = new Date()
  const then = new Date(time)
  if (now.getTime() > then.getTime()) return 'past'
  if (now.getTime() < then.getTime()) return 'future'
  return 'present'
}

//  color-coded time-based loopfunction createSchedule() {
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  for (let i = 0; i < hours.length; i++) {
    containerEl.innerHTML += `
    <div class="row ${isPastPresentOrFuture(hours[i])}">
    <div class="hour col-2">
    <div>${moment(hours[i], ["HH.mm"]).format("hh:mm a")}</div>
    </div>
    <div class="col-8">
<input value="${localStorage.getItem("task-"+hours[i])||""}"  id="textarea-${hours[i]}" class="form-control form-control-lg" type="text" placeholder="Add new task" aria-label=".new-task">
    </div>
    <button id="button-${hours[i]}" class="btn saveBtn col-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
      </svg>
    </button>
  </div>
  `
  }

  var buttons = document.querySelectorAll('.saveBtn')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      var textarea = document.querySelector(`#textarea-${hours[i]}`)
      var text = textarea.value
      localStorage.setItem('task-' + hours[i], text)
    })
  }


createSchedule() 
