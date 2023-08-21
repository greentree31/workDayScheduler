// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
      var time1 = $(this).parent().attr('id');
      var time2 = $(this).siblings('.desc').val();
  
      localStorage.setItem(time1, time2);
      $('.notification').addClass('view');
      setTimeout(function () {
        $('.notification').removeClass('view');
      }, 5000);
    });
  
  
    function updateHour() {
      var presentHour = dayjs().hour();
  
      $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr('id'));
  
        if (timeBlock < presentHour) {
          $(this).addClass('past');
        } else if (timeBlock === presentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    };
  
    updateHour();
  
    setInterval(updateHour, 15000);
  
    $('#9 .desc').val(localStorage.getItem('9'));
    $('#10 .desc').val(localStorage.getItem('10'));
    $('#11 .desc').val(localStorage.getItem('11'));
    $('#12 .desc').val(localStorage.getItem('12'));
    $('#13 .desc').val(localStorage.getItem('13'));
    $('#14 .desc').val(localStorage.getItem('14'));
    $('#15 .desc').val(localStorage.getItem('15'));
    $('#16 .desc').val(localStorage.getItem('16'));
    $('#17 .desc').val(localStorage.getItem('17'));
  
    // code to display the current date
    $('#presentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  
  });
  // function savedData() {
  //   $('.description').each(function(){
  //     $(this).val(localStorage.getItem($(this).parent().attr('id')))
  //   })
  // };
  // savedData()