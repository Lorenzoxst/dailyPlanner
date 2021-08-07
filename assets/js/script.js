$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var descrip = $(this).siblings('.description').val();
        var timeBlock = $(this).parent().attr('id');
         console.log(descrip);
         console.log(timeBlock);

        localStorage.setItem(timeBlock, descrip);
    })



    function changeHours() {
        const current = moment().hours();

         console.log(current);
        $('.row').each(function() {

            const time = parseInt($(this).attr('id'))
            if (time < current ) {
                $(this).addClass('past')
            } else if (time === current){
                $(this).addClass('present')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future')
            }
        });
    }
    changeHours();


    $('#9 .description').val(localStorage.getItem('9'))
    $('#10 .description').val(localStorage.getItem('10'))
    $('#11 .description').val(localStorage.getItem('11'))
    $('#12 .description').val(localStorage.getItem('12'))
    $('#13 .description').val(localStorage.getItem('13'))
    $('#14 .description').val(localStorage.getItem('14'))
    $('#15 .description').val(localStorage.getItem('15'))
    $('#16 .description').val(localStorage.getItem('16'))
    $('#17 .description').val(localStorage.getItem('17'))

});