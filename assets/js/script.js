var $currentDaylbl = $('#currentDay');

function dayTime() {
    var dateNow = moment().format('dddd, MMMM Do');
    $currentDaylbl.text(dateNow);
}

dayTime();