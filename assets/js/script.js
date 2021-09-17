var $currentDaylbl = $('#currentDay');
var $container = $('.container');

var workhours = [9,10,11,12,13,14,15,16,17];

function printBoxes() {

    var timeNow = moment().format('HH');

    for (var i = 0; i < workhours.length; i++) {
        console.log(timeNow);
        console.log(workhours[i]);

        var $div = $('<div>')
            .addClass('input-group mb-3');
        var $span = $('<span>')
            .addClass('input-group-text custom-span-width hour')
            .text(moment(workhours[i], 'HH').format('hA'));

        if (workhours[i] == timeNow) {
            var $textarea = $('<textarea>')
            .attr('type', 'text')
            .attr('aria-describedby', 'button')
            .addClass('form-control present');
        }else if (workhours[i] < timeNow) {
            var $textarea = $('<textarea>')
            .attr('type', 'text')
            .attr('aria-describedby', 'button')
            .addClass('form-control past');
        }else if (workhours[i] > timeNow) {
            var $textarea = $('<textarea>')
            .attr('type', 'text')
            .attr('aria-describedby', 'button')
            .addClass('form-control future');
        }      

        var $customBtn = $('<button>')
            .addClass('btn btn-outline-dark saveBtn')
            .attr('type', 'button')
            .attr('id', 'button' + workhours[i])
            .append('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-save\" viewBox=\"0 0 16 16\"><path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z\"/></svg>');

        $div.append($span, $textarea, $customBtn);
        $container.append($div);
    }
  
}

function setDay() {
    var dateNow = moment().format('dddd, MMMM Do');
    $currentDaylbl.text(dateNow);    
}

function setTime() {
    
        var timeNow = moment().format('HH');

        console.log(timeNow);

}


setDay();
setTime();
printBoxes();