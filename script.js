
var saveButton = document.querySelectorAll('#saver');
//var scheduledEvent = document.querySelectorAll('textarea');
var clock = $('#clock');
var today = dayjs();
$('#clock').text(today.format('h:mm A on dddd, MMM D, YYYY'));

console.log(today);

function loadExistingItems() {
  var timeAllBlocks = document.querySelectorAll(".time-block");
  for (var i = 0; i < timeAllBlocks.length; i++) {
    var timeBlock = timeAllBlocks[i];
    var timeBlockId = timeBlock.getAttribute("id");
    var childTextArea = timeBlock.querySelector("textarea");
    childTextArea.value = localStorage.getItem(timeBlockId);
  }
};

function loadHourSetting() {
  var timeAllBlocks = document.querySelectorAll(".time-block");
  for (var i = 0; i < timeAllBlocks.length; i++) {
    var timeBlock = timeAllBlocks[i];
  
  var hour = dayjs().hour();
    for (var i = 0; i < timeAllBlocks.length; i++) {
      if (i + 9 > hour) {
        timeAllBlocks[i].classList.add("future");
      }
      else if (i + 9 < hour) {
        timeAllBlocks[i].classList.add("past");
      }
      else {
        timeAllBlocks[i].classList.add("present");
      }
    }
  }
};


    for (var i = 0; i < saveButton.length; i++) {
      saveButton[i].addEventListener("click", e => {
        e.preventDefault();

        var thisBtn = e.target;
        var timeBlockEl = thisBtn.closest(".time-block");
        var textAreaEl = timeBlockEl.querySelector("textarea");

        localStorage.setItem(timeBlockEl.getAttribute("id"), textAreaEl.value);
      })
    };

    loadExistingItems();
    loadHourSetting();