var $currentDaylbl = $('#currentDay');
var $container = $('.container');
var $textarea;
var $customBtn;
var $clearBtn;

var storeSchedules;

//main array to store schedules loaded from local storage
var arrSchedules = [];
//working hours
var workhours = [9,10,11,12,13,14,15,16,17];

function setDay() {
    var dateNow = moment().format('dddd, MMMM Do');
    $currentDaylbl.text(dateNow);
}

function printBoxes() {

    var $timeNow = moment().format('HH');

    for (var i = 0; i < workhours.length; i++) {

        var $div = $('<div>')
            .addClass('input-group mb-3 time-block')
        var $span = $('<span>')
            .addClass('input-group-text custom-span-width hour')
            .text(moment(workhours[i], 'HH').format('hA'));

        if (workhours[i] == $timeNow) {
            //PRESENT//
            $textarea = $('<textarea>')
            .attr('type', 'text')
            .attr('aria-describedby', 'saveBtn')
            .attr('id', 'text-memo')
            .attr('data-id', workhours[i])
            .addClass('form-control description present');

            $customBtn = $('<button>')
            .addClass('btn btn-outline-dark saveBtn')
            .attr('type', 'button')
            .attr('id', 'saveBtn')
            .append('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-save\" viewBox=\"0 0 16 16\"><path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z\"/></svg>');
            
        }else if (workhours[i] < $timeNow) {
            //PAST//
            $textarea = $('<textarea>')
            .attr('type', 'text')
            .attr('aria-describedby', 'saveBtn')
            .attr('id', 'text-memo')
            .attr('data-id', workhours[i])
            .attr('disabled', true)
            .addClass('form-control description past');

            $customBtn = $('<button>')
            .addClass('btn btn-outline-dark saveBtn')
            .attr('type', 'button')
            .attr('id', 'saveBtn')
            .attr('disabled', true)
            .append('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-save\" viewBox=\"0 0 16 16\"><path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z\"/></svg>');

        }else if (workhours[i] > $timeNow) {
            //FUTURE//
            $textarea = $('<textarea>')
            .attr('type', 'text')
            .attr('aria-describedby', 'saveBtn')
            .attr('id', 'text-memo')
            .attr('data-id', workhours[i])
            .addClass('form-control description future');

            $customBtn = $('<button>')
            .addClass('btn btn-outline-dark saveBtn')
            .attr('type', 'button')
            .attr('id', 'saveBtn');

            $customBtn = $('<button>')
            .addClass('btn btn-outline-dark saveBtn')
            .attr('type', 'button')
            .attr('id', 'saveBtn')
            .append('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-save\" viewBox=\"0 0 16 16\"><path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z\"/></svg>');
        }            

        $div.append($span, $textarea, $customBtn);
        $container.append($div);
        
    }

    // ADDITIONAL FEATURE/CLEAR ALL SCHEDULES
    // var $div = $('<div>')
    // .addClass('input-group mb-3')
    // $clearBtn = $('<button>')
    // .addClass('btn btn-outline-warning btn-lg clearBtn')
    // .attr('type','button')
    // .attr('id','clearBtn')
    // .append('Clear All');

    // $div.append($clearBtn);
    
    // $container.append($div);

}

function loadSchedules() {
    storeSchedules = JSON.parse(localStorage.getItem("schedules"));

    if (storeSchedules !== null) {
        var arrUnsorted = [];
        for (var j=0;j<storeSchedules.length;j++) {
            arrUnsorted.push(storeSchedules[j]);
        }
        arrSchedules = arrUnsorted.sort((a, b) => (b.time - a.time));
    }else {
        return;
    }
}

function printSchedules() {
    if (arrSchedules !== null) {
        for (var i = 0; i < arrSchedules.length; i++) {
           var strTime = arrSchedules[i]["time"];
           var strMemo = arrSchedules[i]["desc"];

           $('textarea').each(function () {
                var keyID = $(this).attr('data-id');
                //console.log(keyID);
        
                if (keyID === strTime) {
                    //console.log(strTime);
                    //console.log(strMemo);
                    $(this).text(strMemo);
                }
            });
        }
    }else {
        return;
    }  
}

function saveSchedule(sched,time) {

    loadSchedules();
    
    //lets check if there is a time exising from local storage
    for (i=0;i<arrSchedules.length;i++) {
        if (arrSchedules[i]["time"].includes(time)) {
            //then we update the data
            arrSchedules[i]["time"] = time;
            arrSchedules[i]["desc"] = sched;
            localStorage.setItem(
                "schedules", JSON.stringify(arrSchedules)
            );
            return;
        }
    }

    // but if time is not found in local storage
    // we will add as new
    var addedSchedule = {};
    addedSchedule["time"] = time;
    addedSchedule["desc"] = sched;
    arrSchedules.push(addedSchedule);
    localStorage.setItem(
        "schedules", JSON.stringify(arrSchedules)
    );
}

//Page initiate
setDay();
printBoxes();
loadSchedules();
printSchedules();

//Event listeners after rendered page
$(document).ready(function() {

    //listens to actions when Save button is clicked
    $(document).on('click', '#saveBtn', function(event){
        event.preventDefault();
        if ($customBtn.attr('id') === "saveBtn") {
            var theMemo = $(this).siblings('textarea').val();
            var theIndex = $(this).siblings('textarea').attr('data-id');

            saveSchedule(theMemo, theIndex);
        }
    });

    //listens to actions when text areas are unfocused and to update changes
    $(document).on('focusout', '#text-memo', function(event){
        event.preventDefault();
        var theMemo = $(this).val();
        var theIndex = $(this).attr('data-id');

        saveSchedule(theMemo, theIndex);
    });

});

