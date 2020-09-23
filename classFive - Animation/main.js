$(document).ready(function() {

    $('#btnStart').click(
        function() {
            $('#txt').animate({
                lineHeight: "+=3em",
                opacity: '.5'

            },5000,function(){
                alert("Callback Started");
            });
        }
    );

    $('#btnStop').click(
        function() {
            $('#txt').stop();
        }
    );


});
