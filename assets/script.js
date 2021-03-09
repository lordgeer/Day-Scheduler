// Table of Contents
// -------------------------
// 1: Date for Header
// 2: Write to storage function
// 3: Moment JS funtions
// 4: Local storage retrieval
// -------------------------------------------------------------
// 1: Date for the header
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
// 2: Inital function for writing to local storage from imput
$(document).ready(function () {    
    $(".saveBtn").on("click", function () {        
        var text = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");        
        localStorage.setItem(time, text);
    })
// 3: Funtion for keeping track of time based on moment js 
    function timeTracker() {        
        var timeNow = moment().hour();        
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

           
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
// 4: Locaal storage retrieval functions
$("#hour8 .task").val(localStorage.getItem("hour8"));
$("#hour9 .task").val(localStorage.getItem("hour9"));
$("#hour10 .task").val(localStorage.getItem("hour10"));
$("#hour11 .task").val(localStorage.getItem("hour11"));
$("#hour12 .task").val(localStorage.getItem("hour12"));
$("#hour13 .task").val(localStorage.getItem("hour13"));
$("#hour14 .task").val(localStorage.getItem("hour14"));
$("#hour15 .task").val(localStorage.getItem("hour15"));
$("#hour16 .task").val(localStorage.getItem("hour16"));
$("#hour17 .task").val(localStorage.getItem("hour17"));

timeTracker();
})