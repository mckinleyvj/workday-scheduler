var $currentDaylbl = $('#currentDay');
var $container = $('.container');
var $textarea;
var $customBtn;

var storeSchedules;
var arrSchedules = [];

var workhours = [9,10,11,12,13,14,15,16,17];

function setDay() {
    var dateNow = moment().format('dddd, MMMM Do');
    $currentDaylbl.text(dateNow);
}

function printBoxes() {

    var $timeNow = moment().format('HH');

    for (var i = 0; i < workhours.length; i++) {

        var $div = $('<div>')
            .addClass('input-group mb-3')
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
            .addClass('form-control present');

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
            //.attr('disabled', true)
            
            .addClass('form-control past');

            $customBtn = $('<button>')
            .addClass('btn btn-outline-dark saveBtn')
            .attr('type', 'button')
            .attr('id', 'saveBtn')
            //.attr('disabled', true)
            .append('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-save\" viewBox=\"0 0 16 16\"><path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z\"/></svg>');

        }else if (workhours[i] > $timeNow) {
            //FUTURE//
            $textarea = $('<textarea>')
            .attr('type', 'text')
            .attr('aria-describedby', 'saveBtn')
            .attr('id', 'text-memo')
            .attr('data-id', workhours[i])
            .addClass('form-control future');

            $customBtn = $('<button>')
            .addClass('btn btn-outline-dark saveBtn')
            .attr('type', 'button')
            .attr('id', 'saveBtn');

            $customBtn = $('<button>')
            .addClass('btn btn-outline-dark saveBtn')
            .attr('type', 'button')
            .attr('id', 'saveBtn')
            //.attr('disabled', true)
            .append('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-save\" viewBox=\"0 0 16 16\"><path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z\"/></svg>');

            // $customBtnIcon = $('<svg>')
            // .attr('xlmns', 'http://www.w3.org/2000/svg')
            // .attr('width','0')
            // .attr('height','0')
            // .attr('fill','currentColor')
            // .attr('viewBox','0 0 0 0')
            // .addClass('bi bi-save');
            
            // $customBtn.append($customBtnIcon);
            // <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-save\" viewBox=\"0 0 16 16\"></svg>');
            // .append('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-save\" viewBox=\"0 0 16 16\"></svg>');
            //<path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z\"/>
        }            

        $div.append($span, $textarea, $customBtn);
        $container.append($div);
    }
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
            console.log(keyID);
    
            if (keyID === strTime) {
                console.log(strTime);
                console.log(strMemo);
                $(this).text(strMemo);
            }
        
        });

        }
    }else {
        return;
    }  
}

function saveSchedule(sched,time) {
    
    console.log(time);

    loadSchedules();
    var addedSchedule = {};

            
            addedSchedule["time"] = time;
            addedSchedule["desc"] = sched;
            arrSchedules.push(addedSchedule);
            localStorage.setItem(
                "schedules", JSON.stringify(arrSchedules)
            );

}

setDay();
printBoxes();
loadSchedules();
printSchedules();

$(document).ready(function() {

    $(document).on('click', '#saveBtn', function(event){
        event.preventDefault();
        if ($customBtn.attr('id') === "saveBtn") {
            var theMemo = $(this).siblings('textarea').val();
            var theIndex = $(this).siblings('textarea').attr('data-id');
            var convertToHour = moment(theIndex, 'HH').format('H').toString();

            console.log(theMemo);
            console.log(theIndex);
            console.log(convertToHour);

            saveSchedule(theMemo, theIndex);

            //location.reload();

            // localStorage.setItem("", JSON.stringify(user));
            // .attr('style', 'background-color: red');
            // console.log($(event.target.parentNode.dataset.id));
            // $(event.target).closest(div).attr('style', 'background-color: red');
            // $(event.target).hide();
        }
        // console.log($(event.target.parentNode.dataset.id));
        // console.log($('#text-memo').val());
    });
});

