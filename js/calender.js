var eventToUse = 'tap';

$(document).ready(function() {
  makeTemplates();

  var today = new Date();
  var date = moment(today);
  var currentDate = date.format("Do MMMM dddd");

  $('.dateContainer').text(currentDate);

  var date = JSLINQ(calendar.data)
    .Where(function(x) {
      return (x.monthNumber == 'April');
    }).items[0];

  render(".datePanel", "calendar", date);
  render(".eventContainer", "event", calendar.data[1].dates[9]);

  $('.event:eq(0)').addClass('selected');

  bind('.btnBook', showConfirmationContainer);
  bind('.month', showMonth);
  bind('.event', showEvent);
})


function showMonth() {
  console.log("lucifer morning star");
  $('.month').removeClass('active');
  $(this).addClass('active');

  var monthType = $(this).attr("month-type");
  console.log(monthType);
  var date = JSLINQ(calendar.data)
    .Where(function(x) {
      return (x.monthNumber == monthType)
    }).items[0];

  render(".datePanel", "calendar", date);

  bind('.event', showEvent);
  bind('.btnBook', showConfirmationContainer);
}

function showEvent() {
  var index = $(this).attr("event-index");
  $('.dateBlock').removeClass('selected');
  $(this).addClass('selected');
  var eventType = $(this).tmplItem().data;
  $('.confirmationContainer').removeClass('fadeIn');
  $('.btnBook').removeClass('rotate');
  $('.flipContainer').removeClass('hideBtn');

  render(".eventContainer", "event", eventType.dates[index]);
  bind('.btnBook', showConfirmationContainer);
}

function showConfirmationContainer() {
  $('.confirmationContainer').addClass('fadeIn');
  $('.btnBook').addClass('rotate');

  render('.personBarContainer', 'personBar', numberBlock.number)
  $('.numberBlock:eq(2)').addClass('selectedNumber');

  bind('.numberBlock', function showSelectedNumber() {
    $('.numberBlock').removeClass('selectedNumber');
    $(this).addClass('selectedNumber');
  });

  bind('.face.back', showThankYouContainer)
}

function showThankYouContainer() {
  name = $('.placeholder.name').val();

  $('.thankYouContainer .name').text(name);
  $('.thankYouContainer').addClass('fadeIn');
  $('.flipContainer').addClass('hideBtn');

  setTimeout(function() {
    $('.confirmationContainer').removeClass('fadeIn');
    $('.thankYouContainer').removeClass('fadeIn');
    $('.btnBook').removeClass('rotate');
    $('.flipContainer').removeClass('hideBtn');
    $('.placeholder').val('');
  }, 1500);
};
