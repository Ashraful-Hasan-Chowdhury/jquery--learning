$(document).ready(function() {

    $('#btnHide').click(
        function() {
            $('#txt').hide();
        }
    );

    $('#btnSlideDown').click(
        function() {
            $('#txt').slideDown("slow");
        }
    );

    $('#btnSlideUp').click(
        function() {
            $('#txt').slideUp("slow");
        }
    );

    $('#btnSlideToggle').click(
        function() {
            $('#txt').slideToggle("slow");
        }
    );

});
